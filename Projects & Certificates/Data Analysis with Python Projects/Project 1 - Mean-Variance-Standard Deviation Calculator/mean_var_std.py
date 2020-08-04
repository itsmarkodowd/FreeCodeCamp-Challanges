import numpy as np


def calculate(list):
    if (len(list) != 9):
        raise ValueError('List must contain nine numbers.')

    # np.reshape(list,(3,3)) also works
    matrix = np.array([list[0:3], list[3:6], list[6:]])

    mean1 = np.mean(matrix, axis=0).tolist()
    mean2 = np.mean(matrix, axis=1).tolist()
    meanflat = np.mean(matrix).tolist()

    var1 = np.var(matrix, axis=0).tolist()
    var2 = np.var(matrix, axis=1).tolist()
    varflat = np.var(matrix).tolist()

    std1 = np.std(matrix, axis=0).tolist()
    std2 = np.std(matrix, axis=1).tolist()
    stdflat = np.std(matrix).tolist()

    max1 = np.max(matrix, axis=0).tolist()
    max2 = np.max(matrix, axis=1).tolist()
    maxflat = np.max(matrix).tolist()

    min1 = np.min(matrix, axis=0).tolist()
    min2 = np.min(matrix, axis=1).tolist()
    minflat = np.min(matrix).tolist()

    sum1 = np.sum(matrix, axis=0).tolist()
    sum2 = np.sum(matrix, axis=1).tolist()
    sumflat = np.sum(matrix).tolist()

    result = {
        'mean': [mean1, mean2, meanflat],
        'variance': [var1, var2, varflat],
        'standard deviation': [std1, std2, stdflat],
        'max': [max1, max2, maxflat],
        'min': [min1, min2, minflat],
        'sum': [sum1, sum2, sumflat]
    }

    return result
