import app from './app.js';
import db from './models/db.js';

const PORT = process.env.PORT || 3003;

db.getConnection()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });
