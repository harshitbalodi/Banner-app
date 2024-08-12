import express from 'express';
import mysql from 'mysql2/promise'; 
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
var count = 0;
const app = express();
app.use(cors());
app.use(bodyParser.json());

let db;

try {
  db = mysql.createPool({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });

  console.log('Connected to MySQL database successfully');
} catch (error) {
  console.error('Error connecting to MySQL database:', error);
  process.exit(1); 
}

// app.post('/api/update-banner', async (req, res) => {
//   const { description, countdown, link, isVisible } = req.body;
//   const query = `
//     UPDATE banner_settings 
//     SET description = ?, countdown = ?, link = ?, isVisible = ?
//   `;
//   try {
//     console.log("api hit", count++);
//     const [result] = await db.execute(query, [description, countdown, link, isVisible]);
//     res.send(result);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

// app.get('/api/banner-settings', async (req, res) => {
//   const query = 'SELECT * FROM banner_settings LIMIT 1';
//   try {
//     console.log("api hit",count++);
//     const [result] = await db.execute(query);
//     res.send(result[0]);
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.get('/api', (req, res) => {
  res.send('Hello, World!');
})

app.get('/api/banner-settings', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM banner_settings LIMIT 1');
    res.json(rows[0] || {});
  } catch (error) {
    console.error('Error fetching banner settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/banner-settings', async (req, res) => {
  const { isVisible, description, timer, link } = req.body;
  try {
    await db.query(
      'INSERT INTO banner_settings (is_visible, description, timer, link) VALUES (?, ?, ?, ?) ON DUPLICATE KEY UPDATE is_visible = ?, description = ?, timer = ?, link = ?',
      [isVisible, description, timer, link, isVisible, description, timer, link]
    );
    res.json({ isVisible, description, timer, link });
  } catch (error) {
    console.error('Error updating banner settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
