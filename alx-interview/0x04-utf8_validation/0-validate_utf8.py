#!/usr/bin/python3
"""
UTF-8 Validation
"""


def validUTF8(data) -> bool:
    """
    Returns True if data is a valid UTF-8 encoding, else return False
    :param data:
    :return:
    """
    num_bytes = 0
    for byte in data:
        mask = 1 << 7
        if not num_bytes:
            while byte & mask:
                num_bytes += 1
                mask >>= 1
            if not num_bytes:
                continue
            if num_bytes == 1 or num_bytes > 4:
                return False
        else:
            if byte >> 6 != 0b10:
                return False
        num_bytes -= 1
    return num_bytes == 0
