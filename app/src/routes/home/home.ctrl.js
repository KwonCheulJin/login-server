'use strict';

const users = {
  id: ['chel0001', '나개발', '김팀장'],
  pw: ['1234', '12345', '09876']
};

const output = {
  home: (req, res) => {
    res.render('home/index');
  },

  login: (req, res) => {
    res.render('home/login');
  }
};

const process = {
  login: (req, res) => {
    const id = req.body.id,
      pw = req.body.pw;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.pw[idx] === pw) {
        return res.json({
          success: true
        });
      }
    }
    return res.json({
      success: false,
      msq: "로그인에 실패하셨습니다."
    });
  }
};

module.exports = {
  output,
  process
};