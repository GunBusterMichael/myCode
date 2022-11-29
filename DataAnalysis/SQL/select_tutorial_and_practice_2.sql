-- 基本语法（SELECT相关的组合关键字）

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

SELECT * FROM student;
SELECT * FROM sc;
SELECT * FROM course;
SELECT * FROM teacher;

-- 学生表student 	SId	 Sname Sage  Ssex
-- 成绩表sc 			SId  CId   score
-- 课程表course 		CId  Cname TId
-- 老师表teacher		TId	 Tname


-- 一、数据库查询 - 复杂查询

-- 1. 多表连接查询（JOIN）

-- 题目：查询课程表中各科老师的姓名
-- INNER JOIN
SELECT c.*, t.Tname 
FROM course c 
JOIN teacher t ;
ON c.TId = t.TId;

-- 题目：查询所有学生的课程及分数情况（存在没成绩，没选课的情况）
-- LEFT JOIN
SELECT * FROM student s 
LEFT JOIN sc ON
s.SId = sc.SId 

-- 2. 多表连接查询（UNION）
-- 题目：将老师表与学生表的信息组合成一张表，并标识清楚老师、学生

SELECT s.SId, s.Sname FROM student s 
UNION ALL
SELECT t.TId, t.Tname  FROM teacher t ;

SELECT s.SId id, s.Sname name FROM student s 
UNION ALL
SELECT t.TId id, t.Tname name  FROM teacher t ;

SELECT '学生' tag, s.SId id, s.Sname name FROM student s 
UNION ALL
SELECT '老师' tag, t.TId id, t.Tname name  FROM teacher t ;

-- 3. 多层嵌套查询

-- 题目：查询不存在" 01 "课程但存在" 02 "课程的学生信息
-- 思路：
-- 找到有02课程的学生id、学生成绩，
-- 在上面的表中，排除掉有01课程的学生id，
-- 在上面的表与学生表join，获得学生的信息及02课程的成绩

SELECT * from
(
SELECT sid, score FROM 
(SELECT DISTINCT sid, score FROM sc WHERE CId = '02') t
WHERE sid NOT IN (SELECT sid FROM sc WHERE cid = '01')
) t1
LEFT JOIN student s 
ON t1.sid = s.SId 
;


-- 二、数据库查询 - 基本函数

-- 1. 字符串函数
SELECT sid, LEFT(sname, 1), concat(LEFT(sname, 1), '同学') 
from student s
WHERE LEFT(sid, 1) = '0';

-- 2. 日期时间函数

-- 题目：查询各学生的年龄，只按年份来算
SELECT s.SId, s.Sname, 
	   YEAR (CURDATE()) - YEAR (s.Sage) AS age
FROM
	student s ;

-- 题目：按照出生日期来算，当前月日 < 出生年月的月日则，年龄减一
-- 备注：计算年龄，一般都用此方法，精确到天，而非直接取年进行计算
SELECT s.SId, s.Sname, s.Sage, 
	   timestampdiff(YEAR, s.Sage, CURDATE()) AS Age
FROM student s ;

-- 题目：查询本周过生日的学生
SELECT s.*
FROM student s 
WHERE WEEKOFYEAR(s.Sage) = WEEKOFYEAR(CURDATE());

-- 题目：查询本月过生日的学生
SELECT s.*
FROM student s 
WHERE MONTH (s.Sage) = MONTH (CURDATE());

-- 3. 聚合函数

-- 题目：查询男生、女生人数
SELECT s.Ssex, COUNT(s.Ssex) cnt
FROM student s 
GROUP BY s.Ssex;

-- 题目：查询各科中60分及以上的人的平均成绩
SELECT cid, avg(score) avg_score FROM sc s 
WHERE score >= 60
GROUP BY CId ;

-- 题目：查询平均成绩在70分以上的课程
SELECT cid, avg(score) avg_score FROM sc s 
GROUP BY CId
HAVING avg_score >= 70;

-- 题目：嵌套查询出同名的全部学生的信息
SELECT s2.*
FROM student s2 
WHERE s2.Sname IN (
		SELECT s1.Sname
		FROM student s1
		GROUP BY s1.Sname
		HAVING COUNT(s1.Sname) > 1
	);

-- 4. 流程函数

-- IF(condition, value_if_true, value_if_false)

-- 题目：新生成关于性别的代码列，如果是男生，代码为0；如果为女生，代码为1
SELECT s.*, IF(s.Ssex = '女', '1', '0') Ssex_tag from student s 

-- 题目：使用if()函数查询男生、女生人数
SELECT COUNT(IF(s.Ssex='女', 1, NULL)) girl_cnt,
	   COUNT(IF(s.Ssex='男', 1, NULL)) boy_cnt 
FROM student s;

SELECT s.Sname, s.Ssex,
	   IF(s.Ssex='女', 1, NULL) girl_if,
       IF(s.Ssex='男', 1, NULL) boy_if
FROM student s;

-- IFNULL(expression, alt_value)
SELECT t.*, ifnull(girl_if, boy_if) if_null 
FROM (
SELECT s.Sname, s.Ssex,
	   IF(s.Ssex='女', 1, NULL) girl_if,
       IF(s.Ssex='男', 1, NULL) boy_if
FROM student s) t;

-- CASE WHEN
CASE WHEN condition THEN result1 ELSE result2 END;

CASE WHEN condition1 THEN result1
     WHEN condition2 THEN result2
     ...
     WHEN conditionN THEN resultN
     ELSE result
END;

-- 题目：使用case when函数查询男生、女生人数
SELECT s.*, CASE WHEN s.Ssex = '女' THEN 1 ELSE 0 END Ssex_tag
from student s;

SELECT sum(CASE WHEN s.Ssex = '女' THEN 1 ELSE 0 END) girl_sum
from student s;

-- 题目：统计各科成绩各分数段人数：课程编号，课程名称，[100-85]，[85-70]，[70-60]，[60-0] 及所占百分比
SELECT course.Cname, t1.* FROM course,
(SELECT sc.CId,
SUM(CASE WHEN sc.score >= 85 AND sc.score < 100 THEN 1 ELSE 0 END) AS '[100-85]',
SUM(CASE WHEN sc.score >= 85 AND sc.score < 100 THEN 1 ELSE 0 END)/COUNT(sc.score) AS '[100-85]%'
-- 其他区间的写法同上
FROM sc 
GROUP BY sc.CId) AS t1
WHERE course.CId = t1.CId;

-- 题目：将成绩表转换为多维成绩表，即，首列为SId, 首行为各科的Cid，表格中的数据为score
SELECT sc.SId,
SUM(CASE WHEN sc.CId = '01' THEN sc.score ELSE NULL END) AS '01',
sum(CASE WHEN sc.CId = '02' THEN sc.score ELSE NULL END) AS '02',
sum(CASE WHEN sc.CId = '03' THEN sc.score ELSE NULL END) AS '03'
FROM sc
GROUP BY sc.SId;


-- 三、数据动态分析 - 窗口函数

-- <窗口函数> over (partition by <分组列> order by <排序列>)
-- 专用窗口函数：rank(), dense_rank(), row_number()等

-- 三类排序函数的比较
SELECT score, 
	   RANK() OVER (order BY score DESC) rnk, 
	   DENSE_RANK() OVER (order BY score DESC) dense_rnk, 
	   ROW_NUMBER() OVER (order BY score DESC) row_nb
FROM sc s ;


-- 题目：对各科成绩进行排序
SELECT cid, score, 
	   RANK() OVER (PARTITION BY CId order BY score DESC) rnk
FROM sc s;

-- 题目：对各科成绩进行排序，并拿取每科成绩的前三名
SELECT * FROM (
SELECT cid, score, 
	   RANK() OVER (PARTITION BY CId order BY score DESC) rnk
FROM sc s ) t
WHERE rnk <= 3
;

-- <聚合函数> over (partition by <分组列> order by <排序列>)
-- 聚合函数：count(), avg(), sum(), min(), max()等


-- 题目：查询各科成绩的均值
SELECT cid, score, 
--        avg(score) over (PARTITION BY CId) avg,
--        avg(score) over (PARTITION BY CId ORDER BY score) avg_cum,
	   RANK() OVER (PARTITION BY CId order BY score DESC) rnk
FROM sc s;


-- 四、视图表的创建
CREATE VIEW AS SELECT * FROM TABLE;

-- 题目：创建一个视图表，用于查看各科的前三名
CREATE VIEW v_top_3 AS 
SELECT * FROM (
SELECT cid, score, 
	   RANK() OVER (PARTITION BY CId order BY score DESC) rnk
FROM sc s ) t
WHERE rnk <= 3 ;