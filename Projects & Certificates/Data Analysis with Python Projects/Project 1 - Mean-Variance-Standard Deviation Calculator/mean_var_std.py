import numpy as np


def calculate(list):
    if (len(list) != 9):
        raise ValueError('List must contain nine numbers.')

    matrix = np.array([list[0:3], list[3:6], list[6:]])

    mean1 = np.mean(matrix, axis=0)
    mean2 = np.mean(matrix, axis=1)
    meanflat = np.mean(matrix)

    var1 = np.var(matrix, axis=0)
    var2 = np.var(matrix, axis=1)
    varflat = np.var(matrix)

    std1 = np.std(matrix, axis=0)
    std2 = np.std(matrix, axis=1)
    stdflat = np.std(matrix)

    max1 = np.max(matrix, axis=0)
    max2 = np.max(matrix, axis=1)
    maxflat = np.max(matrix)

    min1 = np.min(matrix, axis=0)
    min2 = np.min(matrix, axis=1)
    minflat = np.min(matrix)

    sum1 = np.sum(matrix, axis=0)
    sum2 = np.sum(matrix, axis=1)
    sumflat = np.sum(matrix)

    return {
        'mean': [mean1, mean2, meanflat],
        'variance': [var1, var2, varflat],
        'standard deviation': [std1, std2, stdflat],
        'max': [max1, max2, maxflat],
        'min': [min1, min2, minflat],
        'sum': [sum1, sum2, sumflat]
    }
