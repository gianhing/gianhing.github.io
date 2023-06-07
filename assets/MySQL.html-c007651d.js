const l=JSON.parse('{"key":"v-bc806904","path":"/interview/MySQL.html","title":"MySQL 面试题","lang":"zh-CN","frontmatter":{"title":"MySQL 面试题","date":"2023-02-20T00:00:00.000Z","icon":"tabler:brand-mysql","order":5,"tag":["MySQL"],"category":["面试"],"description":"MySQL 字符串截取函数有哪些？ 在 MySQL 中，可以使用 substr、`substring 或 substring_index 函数来从一个字符串中截取出子串： substr(str, pos, len) 和 substring(str, pos, len) 功能相同，只不过 substr 是 MySQL 提供的函数，substring 是 ...","head":[["meta",{"property":"og:url","content":"https://gianhing.github.io/interview/MySQL.html"}],["meta",{"property":"og:site_name","content":"星路"}],["meta",{"property":"og:title","content":"MySQL 面试题"}],["meta",{"property":"og:description","content":"MySQL 字符串截取函数有哪些？ 在 MySQL 中，可以使用 substr、`substring 或 substring_index 函数来从一个字符串中截取出子串： substr(str, pos, len) 和 substring(str, pos, len) 功能相同，只不过 substr 是 MySQL 提供的函数，substring 是 ..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-06-07T14:32:06.000Z"}],["meta",{"property":"article:tag","content":"MySQL"}],["meta",{"property":"article:published_time","content":"2023-02-20T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-06-07T14:32:06.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"MySQL 面试题\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-02-20T00:00:00.000Z\\",\\"dateModified\\":\\"2023-06-07T14:32:06.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"MySQL 字符串截取函数有哪些？","slug":"mysql-字符串截取函数有哪些","link":"#mysql-字符串截取函数有哪些","children":[]},{"level":2,"title":"MySQL 条件判断函数有哪些？","slug":"mysql-条件判断函数有哪些","link":"#mysql-条件判断函数有哪些","children":[]},{"level":2,"title":"什么是数据库事务？讲一下事务的 ACID 特性？","slug":"什么是数据库事务-讲一下事务的-acid-特性","link":"#什么是数据库事务-讲一下事务的-acid-特性","children":[]},{"level":2,"title":"MySQL 日志有了解过吗？binlog、redolog、undolog 分别有什么作用","slug":"mysql-日志有了解过吗-binlog、redolog、undolog-分别有什么作用","link":"#mysql-日志有了解过吗-binlog、redolog、undolog-分别有什么作用","children":[]},{"level":2,"title":"数据库索引是什么，有什么作用，什么场景适合使用索引？","slug":"数据库索引是什么-有什么作用-什么场景适合使用索引","link":"#数据库索引是什么-有什么作用-什么场景适合使用索引","children":[]},{"level":2,"title":"你是怎么做 MySQL 数据备份的？比如怎么恢复半个月前的数据？","slug":"你是怎么做-mysql-数据备份的-比如怎么恢复半个月前的数据","link":"#你是怎么做-mysql-数据备份的-比如怎么恢复半个月前的数据","children":[]},{"level":2,"title":"一条 SQL 语句在 MySQL 中的执行过程是怎样的？","slug":"一条-sql-语句在-mysql-中的执行过程是怎样的","link":"#一条-sql-语句在-mysql-中的执行过程是怎样的","children":[]},{"level":2,"title":"MySQL 中的索引是怎么实现的？B+ 树是什么，B 树和 B+ 树的区别，为什么 MySQL 要用 B+ 树？","slug":"mysql-中的索引是怎么实现的-b-树是什么-b-树和-b-树的区别-为什么-mysql-要用-b-树","link":"#mysql-中的索引是怎么实现的-b-树是什么-b-树和-b-树的区别-为什么-mysql-要用-b-树","children":[]},{"level":2,"title":"MySQL 事务有哪些隔离级别、分别有什么特点，以及 MySQL 的默认隔离级别是什么？","slug":"mysql-事务有哪些隔离级别、分别有什么特点-以及-mysql-的默认隔离级别是什么","link":"#mysql-事务有哪些隔离级别、分别有什么特点-以及-mysql-的默认隔离级别是什么","children":[]},{"level":2,"title":"意向锁是什么？有什么作用？它是表级锁还是行级锁？","slug":"意向锁是什么-有什么作用-它是表级锁还是行级锁","link":"#意向锁是什么-有什么作用-它是表级锁还是行级锁","children":[]},{"level":2,"title":"MVCC 是什么？InnoDB 是如何实现 MVCC 机制的？","slug":"mvcc-是什么-innodb-是如何实现-mvcc-机制的","link":"#mvcc-是什么-innodb-是如何实现-mvcc-机制的","children":[]},{"level":2,"title":"覆盖索引和联合索引是什么？讲一下索引的最左前缀匹配原则","slug":"覆盖索引和联合索引是什么-讲一下索引的最左前缀匹配原则","link":"#覆盖索引和联合索引是什么-讲一下索引的最左前缀匹配原则","children":[]},{"level":2,"title":"什么是 MySQL 执行计划？如何获取执行计划并对其进行分析？","slug":"什么是-mysql-执行计划-如何获取执行计划并对其进行分析","link":"#什么是-mysql-执行计划-如何获取执行计划并对其进行分析","children":[]},{"level":2,"title":"MySQL 支持哪些存储引擎？默认使用哪个？MyISAM 和 InnoDB 引擎有什么区别，如何选择？","slug":"mysql-支持哪些存储引擎-默认使用哪个-myisam-和-innodb-引擎有什么区别-如何选择","link":"#mysql-支持哪些存储引擎-默认使用哪个-myisam-和-innodb-引擎有什么区别-如何选择","children":[]},{"level":2,"title":"MySQL 如何定位慢查询？","slug":"mysql-如何定位慢查询","link":"#mysql-如何定位慢查询","children":[]},{"level":2,"title":"什么是聚簇索引和非聚簇索引？什么是回表查询？","slug":"什么是聚簇索引和非聚簇索引-什么是回表查询","link":"#什么是聚簇索引和非聚簇索引-什么是回表查询","children":[]},{"level":2,"title":"MySQL 如何处理超大分页？","slug":"mysql-如何处理超大分页","link":"#mysql-如何处理超大分页","children":[]},{"level":2,"title":"什么情况索引会失效？","slug":"什么情况索引会失效","link":"#什么情况索引会失效","children":[]},{"level":2,"title":"MySQL 主从复制原理","slug":"mysql-主从复制原理","link":"#mysql-主从复制原理","children":[]}],"git":{"createdTime":1682755393000,"updatedTime":1686148326000,"contributors":[{"name":"Gianhing","email":"gianhing@qq.com","commits":4}]},"readingTime":{"minutes":20.07,"words":6022},"filePathRelative":"interview/MySQL.md","localizedDate":"2023年2月20日","autoDesc":true}');export{l as data};
