#!/usr/bin/env python3
"""
Insert a document in Python
"""


def insert_school(mongo_collection, **kwargs):
    """
     inserts a new document in a
      collection based on kwargs

    :param mongo_collection:
    :param kwargs:
    :return:
    """
    new_documents = mongo_collection.insert_one(kwargs)
    return new_documents.inserted_id
