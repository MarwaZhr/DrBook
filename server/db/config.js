const Promise = require('bluebird');

module.exports = (db) => {
  if (!db.queryAsync) {
    db = Promise.promisifyAll(db);
  }
  return db.queryAsync(`
    CREATE TABLE IF NOT EXISTS bookListe (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(60),
      author VARCHAR(50),
      image VARCHAR(700) NOT NULL,
      description VARCHAR(700),
      price INTEGER  NOT NULL,
      quantitie INTEGER,
      inCart BOOLEAN NOT NULL,
      purchase INTEGER,
      total INTEGER,
      genre VARCHAR(60),
      UNIQUE KEY  unique_title (title)
    ); `)
    .error(err => {
      console.log(err);
    });
};

module.exports = (db2) => {
  if (!db2.queryAsync) {
    db2 = Promise.promisifyAll(db2);
  }
  return db2.queryAsync(`
    CREATE TABLE IF NOT EXISTS liste (
      id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
      title VARCHAR(60),
      author VARCHAR(50),
      image VARCHAR(700) NOT NULL,
      description VARCHAR(700),
      price INTEGER  NOT NULL,
      genre VARCHAR(60),
      UNIQUE KEY  unique_title (title)
    ); `)
    .error(err => {
      console.log(err);
    });
};