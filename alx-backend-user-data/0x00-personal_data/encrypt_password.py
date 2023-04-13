#!/usr/bin/env python3
"""
Encrypting passwords
"""


import bcrypt


def hash_password(password: str) -> bytes:
    """
    Salted pass generation
    """
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt())


def is_valid(hashed_password: bytes, password: str) -> bool:
    """ is valid?
    """
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)
