#!/usr/bin/env python3
"""
Top students
"""


def top_students(mongo_collection):
    """
    returns all students sorted by average score
    :param mongo_collection:
    :return:
    """
    return mongo_collection.aggregate([
        {"$project": {
            "name": "$name",
            "averageScore": {"$avg": "$topics.score"}
        }},
        {"$sort": {"averageScore": -1}}
    ])
