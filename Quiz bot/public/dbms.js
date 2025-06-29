const dbmsQuestions = [
  {
    q: "What is the default isolation level in most RDBMS?",
    options: [
      "Read Uncommitted",
      "Read Committed",
      "Repeatable Read",
      "Serializable",
    ],
    answer: 1,
  },
  {
    q: "Which of the following is a DDL command?",
    options: ["INSERT", "UPDATE", "DELETE", "CREATE"],
    answer: 3,
  },
  {
    q: "Which command is used to remove all rows from a table without logging individual row deletions?",
    options: ["DELETE", "TRUNCATE", "DROP", "REMOVE"],
    answer: 1,
  },
  {
    q: "Which normal form removes partial dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 1,
  },
  {
    q: "Which SQL keyword is used to prevent duplicate values?",
    options: ["UNIQUE", "DISTINCT", "PRIMARY", "CHECK"],
    answer: 1,
  },
  {
    q: "Which of the following is a DDL command?",
    options: ["SELECT", "INSERT", "CREATE", "UPDATE"],
    answer: 2,
  },
  {
    q: "Which isolation level is the strictest in SQL?",
    options: [
      "READ UNCOMMITTED",
      "READ COMMITTED",
      "REPEATABLE READ",
      "SERIALIZABLE",
    ],
    answer: 3,
  },
  {
    q: "Which clause is used to group rows with same values?",
    options: ["ORDER BY", "GROUP BY", "HAVING", "WHERE"],
    answer: 1,
  },
  {
    q: "Which key is used to uniquely identify a row in a table?",
    options: ["Foreign key", "Composite key", "Primary key", "Candidate key"],
    answer: 2,
  },
  {
    q: "Which of the following is not a type of JOIN?",
    options: ["LEFT JOIN", "FULL JOIN", "TOP JOIN", "INNER JOIN"],
    answer: 2,
  },
  {
    q: "Which operation combines tuples from two relations?",
    options: ["Projection", "Union", "Join", "Selection"],
    answer: 2,
  },
  {
    q: "Which constraint ensures value exists in another table?",
    options: ["UNIQUE", "CHECK", "FOREIGN KEY", "DEFAULT"],
    answer: 2,
  },
  {
    q: "Which of these is not a part of ACID properties?",
    options: ["Atomicity", "Consistency", "Indexing", "Durability"],
    answer: 2,
  },
  {
    q: "What is a view in SQL?",
    options: [
      "A permanent table",
      "A temporary result of a query",
      "A stored procedure",
      "A trigger function",
    ],
    answer: 1,
  },
  {
    q: "What is the purpose of indexing in DBMS?",
    options: [
      "To remove duplicates",
      "To create backups",
      "To increase query performance",
      "To sort records",
    ],
    answer: 2,
  },
  {
    q: "Which language is used for data manipulation in DBMS?",
    options: ["DDL", "DML", "DCL", "TCL"],
    answer: 1,
  },
  {
    q: "Which of these anomalies is removed by normalization?",
    options: ["Update", "Delete", "Insert", "All of the above"],
    answer: 3,
  },
  {
    q: "Which of the following ensures referential integrity?",
    options: ["Check", "Unique", "Primary key", "Foreign key"],
    answer: 3,
  },
  {
    q: "What is a transaction in DBMS?",
    options: [
      "A record insert",
      "A set of operations that must be completed as a whole",
      "A deletion of rows",
      "A backup copy",
    ],
    answer: 1,
  },
  {
    q: "Which command is used to grant privileges to users?",
    options: ["ALLOW", "GRANT", "PERMIT", "ACCESS"],
    answer: 1,
  },
  {
    q: "Which join returns matching rows from both tables?",
    options: ["FULL JOIN", "INNER JOIN", "LEFT JOIN", "OUTER JOIN"],
    answer: 1,
  },
  {
    q: "What is the result of a cross join?",
    options: ["Cartesian product", "Intersection", "Union", "Difference"],
    answer: 0,
  },
  {
    q: "Which operator is used in SQL for pattern matching?",
    options: ["=", "LIKE", "IN", "BETWEEN"],
    answer: 1,
  },
  {
    q: "What is BCNF a refinement of?",
    options: ["1NF", "2NF", "3NF", "4NF"],
    answer: 2,
  },
  {
    q: "Which SQL clause is used to filter aggregated results?",
    options: ["WHERE", "GROUP BY", "HAVING", "ORDER BY"],
    answer: 2,
  },
  {
    q: "Which form eliminates transitive dependency?",
    options: ["1NF", "2NF", "3NF", "BCNF"],
    answer: 2,
  },
  {
    q: "Which command deletes a table structure permanently?",
    options: ["DELETE", "REMOVE", "TRUNCATE", "DROP"],
    answer: 3,
  },
];
