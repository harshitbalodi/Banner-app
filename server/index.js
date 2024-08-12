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
    port:process.env.DATABASE_PORT,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
    connectTimeout:10000,
    ssl: { rejectUnauthorized: false },
  });

  console.log('Connected to MySQL database successfully');
} catch (error) {
  console.error('Error connecting to MySQL database:', error);
  process.exit(1); 
}


app.get('/api', (req, res) => {
  res.send('Hello, World!');
})

app.post('/api/create-table', async(req, res) => {
  try {
    await db.execute('CREATE TABLE banner_settings (id INT PRIMARY KEY AUTO_INCREMENT,is_visible BOOLEAN NOT NULL DEFAULT FALSE,description TEXT,timer INT NOT NULL DEFAULT 0,link VARCHAR(255));');
    res.status(201).json({ message: 'Table created successfully' });
  } catch (error) {
    console.error('Error creating table:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
})

app.get('/api/banner-settings', async (req, res) => {
  try {
    console.log("api hit",count++);
    const [rows] = await db.execute('SELECT * FROM banner_settings LIMIT 1');
    res.json(rows[0] || {});
  } catch (error) {
    console.error('Error fetching banner settings:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/banner-settings', async (req, res) => {
  const { isVisible, description, timer, link } = req.body;
  try {
    console.log("api hit",count++);
    await db.execute(
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
app.listen(PORT, () => console.log('Server running on port ' ,PORT));

