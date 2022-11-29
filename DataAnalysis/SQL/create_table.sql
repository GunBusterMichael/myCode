-- 少行注释： -- 或者 ctrl + /
-- 多行注释： /* … */


/*
课程表 course
成绩表 score
学生表 student
老师表 teacher
*/


-- 创建SCHEMA
-- CREATE SCHEMA test;
-- 删除SCHEMA
-- DROP SCHEMA test;
-- 创建SCHEMA
-- CREATE SCHEMA test;



-- ----------------------------
-- Table structure for course
-- ----------------------------
DROP TABLE IF EXISTS course;
CREATE TABLE course (
  CId varchar(10) DEFAULT NULL,
  Cname varchar(10) DEFAULT NULL,
  TId varchar(10) DEFAULT NULL
);

-- ----------------------------
-- Records of course
-- ----------------------------
INSERT INTO course VALUES ('01', '语文', '02');
INSERT INTO course VALUES ('02', '数学', '01');
INSERT INTO course VALUES ('03', '英语', '03');

-- ----------------------------
-- Table structure for sc
-- ----------------------------
DROP TABLE IF EXISTS sc;
CREATE TABLE sc (
  SId varchar(10) DEFAULT NULL,
  CId varchar(10) DEFAULT NULL,
  score decimal(18,1) DEFAULT NULL
);

-- ----------------------------
-- Records of sc
-- ----------------------------
INSERT INTO sc VALUES ('01', '01', '80.0');
INSERT INTO sc VALUES ('01', '02', '90.0');
INSERT INTO sc VALUES ('01', '03', '92.0');
INSERT INTO sc VALUES ('02', '01', '70.0');
INSERT INTO sc VALUES ('02', '02', '90.0');
INSERT INTO sc VALUES ('02', '03', '80.0');
INSERT INTO sc VALUES ('03', '01', '80.0');
INSERT INTO sc VALUES ('03', '02', '80.0');
INSERT INTO sc VALUES ('03', '03', '80.0');
INSERT INTO sc VALUES ('04', '01', '50.0');
INSERT INTO sc VALUES ('04', '02', '30.0');
INSERT INTO sc VALUES ('04', '03', '20.0');
INSERT INTO sc VALUES ('05', '01', '76.0');
INSERT INTO sc VALUES ('05', '02', '87.0');
INSERT INTO sc VALUES ('06', '01', '31.0');
INSERT INTO sc VALUES ('06', '03', '34.0');
INSERT INTO sc VALUES ('07', '02', '90.0');
INSERT INTO sc VALUES ('07', '03', '98.0');

-- ----------------------------
-- Table structure for student
-- ----------------------------
DROP TABLE IF EXISTS student;
CREATE TABLE student (
  SId varchar(10) DEFAULT NULL,
  Sname varchar(10) DEFAULT NULL,
  Sage datetime DEFAULT NULL,
  Ssex varchar(10) DEFAULT NULL
);

-- ----------------------------
-- Records of student
-- ----------------------------
INSERT INTO student VALUES ('01', '赵雷', '1990-01-01 00:00:00', '男');
INSERT INTO student VALUES ('02', '钱电', '1990-12-21 00:00:00', '男');
INSERT INTO student VALUES ('03', '孙风', '1990-12-20 00:00:00', '男');
INSERT INTO student VALUES ('04', '李云', '1990-12-06 00:00:00', '男');
INSERT INTO student VALUES ('05', '周梅', '1991-12-01 00:00:00', '女');
INSERT INTO student VALUES ('06', '吴兰', '1992-01-01 00:00:00', '女');
INSERT INTO student VALUES ('07', '郑竹', '1989-01-01 00:00:00', '女');
INSERT INTO student VALUES ('09', '张三', '2017-12-20 00:00:00', '女');
INSERT INTO student VALUES ('10', '李四', '2017-12-25 00:00:00', '女');
INSERT INTO student VALUES ('11', '李四', '2012-06-06 00:00:00', '女');
INSERT INTO student VALUES ('12', '赵六', '2013-06-13 00:00:00', '女');
INSERT INTO student VALUES ('13', '孙七', '2014-06-01 00:00:00', '女');

-- ----------------------------
-- Table structure for teacher
-- ----------------------------
DROP TABLE IF EXISTS teacher;
CREATE TABLE teacher (
  TId varchar(10) DEFAULT NULL,
  Tname varchar(10) DEFAULT NULL
);

-- ----------------------------
-- Records of teacher
-- ----------------------------
INSERT INTO teacher VALUES ('01', '张三');
INSERT INTO teacher VALUES ('02', '李四');
INSERT INTO teacher VALUES ('03', '王五');

