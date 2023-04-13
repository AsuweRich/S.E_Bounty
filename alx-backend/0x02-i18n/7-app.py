#!/usr/bin/env python3
"""
Use user locale
"""

from crypt import methods
from email import header
import babel
from flask import Flask, render_template, request, g
from flask_babel import Babel
import pytz
import requests

app = Flask(__name__)
babel = Babel(app)


class Config:
    """
    Config class
    """
    LANGUAGES = ["en", "fr"]
    BABEL_DEFAULT_LOCALE = "en"
    BABEL_DEFAULT_TIMEZONE = "UTC"


app.config.from_object(Config)

users = {
    1: {"name": "Balou", "locale": "fr", "timezone": "Europe/Paris"},
    2: {"name": "Beyonce", "locale": "en", "timezone": "US/Central"},
    3: {"name": "Spock", "locale": "kg", "timezone": "Vulcan"},
    4: {"name": "Teletubby", "locale": None, "timezone": "Europe/London"},
}


def get_user(login_as):
    """
    get_user
    """
    try:
        return users.get(int(login_as))
    except Exception:
        return


@app.before_request
def before_request():
    """
    before request
    """
    g.user = get_user(request.args.get("login_as"))


@babel.localeselector
def get_locale():
    """
    get_locale
    """
    locale = request.args.get("locale")
    if locale:
        return locale
    user = request.args.get('login_as')
    if user:
        lang = user.get(int(user)).get('locale')
        if lang in app.config['LANGUAGES']:
            return lang
    headers = request.headers.get('locale')
    if headers:
        return headers
    return request.accept_languages.best_match(app.config['LANGUAGES'])


@babel.timezoneselector
def get_timezone():
    """
    get_timezone.
    """
    try:
        timezone = request.args.get("timezone")
        if timezone:
            return pytz.timezone(timezone)
        user = request.args.get("login_as")
        if user:
            timezone = users.get(int(user)).get('timezone')
            if timezone:
                return pytz.timezone(timezone)
        timezone = request.headers.get("timezone")
        if timezone:
            return pytz.timezone(timezone)
    except pytz.UnknownTimeZoneError:
        return app.config.get('BABEL_DEFAULT_TIMEZONE')
    return app.config.get('BABEL_DEFAULT_TIMEZONE')


@app.route('/', methods=['GET'], strict_slashes=False)
def index():
    """
    hello world
    """
    return render_template('7-index.html')


if __name__ == '__main__':
    app.run(debug=True)
