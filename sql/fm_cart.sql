SET NAMES UTF8;
DROP DATABASE IF EXISTS fm;
CREATE DATABASE fm CHARSET=UTF8;
USE fm;

/**用户表:  uid/uname/upwd     fm_user**/
CREATE TABLE fm_user(
    uid INT PRIMARY KEY AUTO_INCREMENT,
    uname VARCHAR(100),
    upwd VARCHAR(32)
);
INSERT INTO fm_user VALUES(null,'tom',123);
INSERT INTO fm_user VALUES(null,'东东',456);
INSERT INTO fm_user VALUES(null,'yanyan',789);
INSERT INTO fm_user VALUES(null,'彦彦',123);
INSERT INTO fm_user VALUES(null,'zss',456);
INSERT INTO fm_user VALUES(null,'莎莎',789);
INSERT INTO fm_user VALUES(null,'daxu',123);
SELECT * FROM fm_user;



/**产品信息表:  pid/pname/price/pic    fm_product**/
CREATE TABLE fm_product(
    pid INT PRIMARY KEY AUTO_INCREMENT,
    pname VARCHAR(100),
    price DECIMAL(10,2),
    pic VARCHAR(100)
);
INSERT INTO fm_product VALUES
(1,'春笋',2.50,'images/180.jpeg'),
(2,'西红柿（番茄）',3.50,'images/180(1).jpeg'),
(3,'长豇豆',3.99,'images/180(2).jpeg'),
(4,'菲律宾凤梨',4.98,'images/180(3).jpeg'),
(5,'缅甸老缅婆甜瓜',5.99,'images/180(4).jpeg'),
(6,'马兰头',3.85,'images/167.jpeg'),
(7,'草头',3.59,'images/167(1).jpeg'),
(8,'菜苔',2.99,'images/167(2).jpeg'),
(9,'香椿头',5.50,'images/167(3).jpeg'),
(10,'带皮蚕豆',11.00,'images/167(4).jpeg'),
(11,'茼蒿',2.80,'images/167(5).jpeg'),
(12,'韭菜',2.73,'images/167(6).jpeg'),
(13,'小竹笋',12.58,'images/167(7).jpeg'),
(14,'烟台红富士80mm以上',14.75,'images/167(8).jpeg'),
(15,'越南火龙果头',10.88,'images/167(9).jpeg'),
(16,'烟台大樱桃 红灯',42.00,'images/167(10).jpeg'),
(17,'台湾金钻凤梨',27.25,'images/167(11).jpeg'),
(18,'千禧樱桃小番茄600g',10.19,'images/167(12).jpeg'),
(19,'水仙芒',20.64,'images/167(13).jpeg'),
(20,'小台农芒',8.91,'images/167(14).jpeg'),
(21,'西州蜜哈密瓜',31.20,'images/167(15).jpeg'),
(22,'鸽子（无内脏，宰杀后）',26.80,'images/167(16).jpeg'),
(23,'徐溪黑猪小排',27.50,'images/167(17).jpeg'),
(24,'大庄园羔羊排肉片300g/盒',36.00,'images/167(18).jpeg'),
(25,'膳博士草乡猪猪脚300g/盒',16.80, 'images/167(19).jpeg'),
(26,'原生态鲜鸭蛋（生）8枚/盒',12.80, 'images/167(20).jpeg'),
(27,'旺山草鸡蛋15枚/盒',18.90,'images/167(21).jpeg'),
(28,'澳洲谷饲牛腱肉 1000g/袋',119.00, 'images/167(22).jpeg'),
(29,'金字火腿金华香肠 208g/袋',26.00,'images/167(23).jpeg'),
(30,'卡士鲜酪乳(原味)120*3',13.50, 'images/167(24).jpeg'),
(31,'光明原味风味发酵乳490g',8.80,'images/167(25).jpeg'),
(32,'清美北海道吐司400g',15.80, 'images/167(26).jpeg'),
(33,'光明莫斯利安钻石装',55.50,'images/167(27).jpeg'),
(34,'三元冰岛式常温酸牛奶',49.00,'images/167(28).jpeg'),
(35,'纽麦福全脂纯牛奶礼盒',49.00,'images/167(29).jpeg'),
(36,'【2+2组合装】阿华田燕麦麦芽乳饮料含乳牛奶饮品（可可 原味）330ml*4',119.00,'images/167(30).jpeg'),
(37,'金字火腿金华香肠 208g/袋',26.00,'images/167(31).jpeg'),
(38,'家乐氏谷兰诺拉草莓什锦(350g*14)/盒',69.90,'images/167(32).jpeg'),
(39,'百草味蔓越莓曲奇100g/袋',9.90,'images/167(33).jpeg'),
(40,'啪啪通虾片-原味85g/袋',16.80,'images/167(34).jpeg'),
(41,'飘零大叔鱿鱼足片100g/袋',9.80,'images/167(35).jpeg'),
(42,'蜜滋兰多花种蜂蜜500g/瓶',109.00,'images/167(36).jpeg'),
(43,'金狮特选蜂蜜扁桃仁100g/袋',30.80,'images/167(37).jpeg'),
(44,'德菲丝松露巧克力情谜埃菲尔系列250g/盒',59.00,'images/167(38).jpeg'),
(45,'卡夫焙朗早餐饼坚果蜂蜜味150g/盒',10.50,'images/167(39).jpeg'),
(46,'沙巴哇综合蔬果干 100g 沙巴哇菠萝蜜果干100g',21.90,'images/167(40).jpeg'),
(47,'Aji尼西亚蔬菜味惊奇脆饼 200g/包',9.90,'images/167(41).jpeg'),
(48,'小老板烤海苔卷/香脆紫菜（烧烤味）32.4g/盒',16.80,'images/167(42).jpeg'),
(49,'北田糙米卷(蛋黄味)',12.80,'images/167(43).jpeg'),
(50,'蜜滋兰多花种蜂蜜500g/瓶',109.00,'images/167(36).jpeg'),
(51,'九日牌炒年糕条(紅-微辣味）100g/袋',10.90,'images/167(44).jpeg'),
(52,'九日牌蜂蜜黄油薯片60g',15.80,'images/167(45).jpeg'),
(53,'啪啪通木薯脆片-原味50g',8.50,'images/167(46).jpeg'),
(54,'威露士泡沫健康呵护洗手液（清新薄荷）300ml/瓶',17.50,'images/167(47).jpeg'),
(55,'清风原木金装抽取式面纸3层130抽*6包/袋',17.30,'images/167(48).jpeg'),
(56,'妙洁点断式平底大号垃圾袋/只',5.00,'images/167(49).jpeg'),
(57,'妮飘迷你纸手帕1*10/条（凯蒂）',8.50,'images/167(50).jpeg'),
(58,'威猛先生厨房柠檬双包装（袋装）500g加420g/组',21.90,'images/167(51).jpeg'),
(59,'蓝月亮自然清香深层洁净狐狸洗衣液3kg/瓶',49.80,'images/167(52).jpeg'),
(60,'金纺清新柔顺2L',25.90,'images/167(53).jpeg'),
(61,'妙洁中号点断式增厚保鲜袋',10.50, 'images/167(54).jpeg');



#创建购物车表并且添加二条测试数据
/**购物车表:cid/pid/count/uid   fm_cart**/
CREATE TABLE fm_cart(
    cid INT PRIMARY KEY AUTO_INCREMENT,
    uid INT,
    pid INT,
    pcount INT
);
INSERT INTO fm_cart VALUES(null,1,1,1);
INSERT INTO fm_cart VALUES(null,1,2,2);
SELECT * FROM fm_cart;