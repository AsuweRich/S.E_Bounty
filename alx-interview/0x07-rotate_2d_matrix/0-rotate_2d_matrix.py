#!/usr/bin/python3
"""
 Rotate 2D Matrix
"""


def rotate_2d_matrix(matrix):
    """
    Given an n x n 2D matrix, rotate it 90 degrees clockwise.
    """
    n = len(matrix)
    for layer in range(n // 2):
        first, last, offset = layer, n - 1 - layer, 0
        for i in range(first, last):
            top = matrix[first][i]
            matrix[first][i] = matrix[last - offset][first]
            matrix[last - offset][first] = matrix[last][last - offset]
            matrix[last][last - offset] = matrix[i][last]
            matrix[i][last] = top
            offset += 1
