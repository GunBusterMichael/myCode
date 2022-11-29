-- 03 SQL 必备技能 - 数据库查询

/*
一、基本语法
二、数据类型
三、通配符类型
四、运算符类型
*/


-- 一、基本语法（SELECT相关的组合关键字）

/*
SELECT
    column_1, column_2, ...
FROM
    table_1
[INNER | LEFT |RIGHT] JOIN table_2 ON conditions
WHERE
    conditions
GROUP BY column_1
HAVING group_conditions
ORDER BY column_1
LIMIT offset, length;
*/

-- 1. 查询单个列、多个列、全部列（SELECT … FROM …）

SELECT CId FROM course;

SELECT CId, TId FROM course;

SELECT * FROM course;

-- 查询结果去重

SELECT * FROM sc s ;

SELECT DISTINCT SId FROM sc; 

SELECT DISTINCT SId, score FROM sc;

-- 2. 查询前若干行、中间若干行（LIMIT）

SELECT * FROM sc s LIMIT 5;

-- 题目：查询从第二行起的连续三行数据
SELECT * FROM sc s LIMIT 2, 3;

-- 3. 为查询结果排序（ORDER BY desc/asc）

SELECT * FROM student s;

-- 题目：根据学生年龄进行排序
SELECT * FROM student s ORDER BY Sage ;

-- 题目：对性别进行字母顺序排序，对年龄进行降序排序
SELECT * FROM student s ORDER BY Ssex, Sage DESC ;

-- 4. 过滤查询数据（WHERE）
-- 单个条件、多个条件
-- 数据类型、通配符类型、运算符（操作符）类型

SELECT * FROM student s;

-- 题目：查询性别为女生的学生信息
SELECT * FROM student s WHERE Ssex = "女";

-- 题目：查询性别为女生，且生日年份为2017年的学生信息
SELECT * FROM student s WHERE Ssex = "女" AND YEAR(Sage) = 2017;

-- 题目：查询名字中含有[风]的学生信息
SELECT * FROM student s WHERE Sname LIKE '%风%';

-- 题目：查询姓氏为[李]的学生信息
SELECT * FROM student s WHERE Sname LIKE '李%';

-- 题目：查询2000年前出生的学生信息
SELECT * FROM student s WHERE YEAR(Sage) < 2000;

-- 题目：查询名字为[赵六]和[孙七]的学生信息
SELECT * FROM student s WHERE Sname = '赵六' OR Sname = '孙七';
SELECT * FROM student s WHERE Sname IN ('赵六', '孙七');


-- 二、数据类型

/*
1. 数值类型（整数型、小数型）
2. 日期时间类型
3. 字符串类型（''为空字符串，也是字符串类型）
4. 空值Null（注意与空字符串的区别）
 */

-- 三、通配符类型

/*
% 表示任何字符（可以出现任意次数，0次、1次或多次）
_表示单个字符
%可以匹配任意字符，但是不能匹配NULL
 */

-- 四、运算符类型

/*
1. 算术运算符
2. 比较运算符
3. 逻辑运算符

运算符类型		运算符		作用
----------------------------------------
算术运算符		+			加法
算术运算符		-			减法
算术运算符		*			乘法
算术运算符		/ 或 DIV		除法
算术运算符		% 或 MOD		取余
----------------------------------------
比较运算符		=			等于	
比较运算符		<>, !=		不等于	
比较运算符		>			大于	
比较运算符		<			小于	
比较运算符		<=			小于等于	
比较运算符		>=			大于等于	
比较运算符		BETWEEN		在两值之间
比较运算符		NOT BETWEEN	不在两值之间	
比较运算符		IN			在集合中	
比较运算符		NOT IN		不在集合中	
比较运算符		LIKE		模糊匹配	
比较运算符		REGEXP 		正则式匹配	
比较运算符		IS NULL		为空	
比较运算符		IS NOT NULL	不为空
----------------------------------------
逻辑运算符		NOT 或 !		逻辑非
逻辑运算符		AND			逻辑与
逻辑运算符		OR			逻辑或
逻辑运算符		XOR			逻辑异或
 */
