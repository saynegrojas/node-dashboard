import connection from '../config/connection.js';

const User = {
  getAll: async () => {
    const [rows] = await connection.query('SELECT * FROM users');
    return rows;
  },
  getById: (id) => {
    return connection.findById(id);
  },
  create: (user) => {
    const { username, password, email } = user;
    const [result] = connection.query(
      'INSERT INTO users (username, password, email) VALUES (?, ?, ?)',
      [username, password, email],
    );
    return result.insertId;
  },
  update: (id, user) => {
    return connection.findByIdAndUpdate(id, user, { new: true });
  },
  delete: (id) => {
    return connection.findByIdAndDelete(id);
  },
};

export default User;
