#!/usr/bin/env python3
"""
LIFO Caching
"""


BaseCaching = __import__('base_caching').BaseCaching


class LIFOCache(BaseCaching):
    """
     class LIFOCache that inherits from BaseCaching and is a caching system
    """

    def __init__(self):
        """
        Init method
        """
        super().__init__()
        self.key_indexes = []

    def put(self, key, item):
        """
        Must assign to the dictionary self.cache_data
        the item value for the key key.
        """
        if key and item:
            if len(self.cache_data) >= self.MAX_ITEMS:
                if key in self.cache_data:
                    del self.cache_data[key]
                    self.key_indexes.remove(key)
                else:
                    del self.cache_data[self.key_indexes[self.MAX_ITEMS - 1]]
                    item_discarded = self.key_indexes.pop(self.MAX_ITEMS - 1)
                    print("DISCARD:", item_discarded)

            self.cache_data[key] = item
            self.key_indexes.append(key)

    def get(self, key):
        """
        Must return the value in self.cache_data linked to key.
        """
        if key in self.cache_data:
            return self.cache_data[key]
        return None
