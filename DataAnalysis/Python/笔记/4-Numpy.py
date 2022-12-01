import numpy as np

# 创建 numpy 数组：ndarray
a = np.arange(15)
b = np.array([0, 1, 5, 3])
print(a, type(a)) # [ 0  1  2  3  4  5  6  7  8  9 10 11 12 13 14] <class 'numpy.ndarray'>
print(b, type(b))  # [0 1 5 3] <class 'numpy.ndarray'>
print(a.ndim) # 返回数组维度 1

# 创建多维数组
a = a.reshape(3, 5) # 将 a 分解成三行五列的二维数组
print(a, type(a))
""" 
[[ 0  1  2  3  4]
 [ 5  6  7  8  9]
 [10 11 12 13 14]] <class 'numpy.ndarray'>
"""
print(a.ndim) # 返回数组维度 2

# 数组切片
print(a[0]) # 取数组的第一行：[0 1 2 3 4]
print(a[0][0]) # 取数组的第一行的第一个：[0 1 2 3 4]
print(a[0: 2])
"""
    取第一至第二行的数据：
    [[0 1 2 3 4]
     [5 6 7 8 9]]
"""

# 数组聚合运算
print(a.sum()) # 对数组中的每一个数据进行加和：105
print(a.mean()) # 对数组中的每一个数据求平均值：7.0
print(a.std()) #对数组中的每一个数据求标准偏差：4.320493798938574

# 向量化运算
print(a * 2)
"""
对每一个数据乘2：
[[ 0  2  4  6  8]
 [10 12 14 16 18]
 [20 22 24 26 28]]
"""
print(a + 1)
""" 
对每一个数据加1：
[[ 1  2  3  4  5]
 [ 6  7  8  9 10]
 [11 12 13 14 15]]
"""