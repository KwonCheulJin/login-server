'use strcit';

class UserStorage {
  static #users = {
    id: ['chel0001', '나개발', '김팀장'],
    pw: ['1234', '12345', '09876'],
    name: ['우리밋', '나개발', '김팀장']
  };

  static getUsers(...fields) {
    const users = this.#users;
    const newUsers = fields.reduce((newUsers, field) => {
      if (users.hasOwnProperty(field)) {
        newUsers[field] = users[field];
      }
      return newUsers;
    }, {});
    return newUsers;
  }
}

module.exports = UserStorage;