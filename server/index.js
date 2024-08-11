// server/index.js
const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',
  database: 'yourdatabase'
});

app.post('/api/update-banner', (req, res) => {
  const { description, countdown, link, isVisible } = req.body;
  const query = `
    UPDATE banner_settings 
    SET description = ?, countdown = ?, link = ?, isVisible = ?
  `;
  db.query(query, [description, countdown, link, isVisible], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result);
  });
});

app.get('/api/banner-settings', (req, res) => {
  db.query('SELECT * FROM banner_settings LIMIT 1', (err, result) => {
    if (err) return res.status(500).send(err);
    res.send(result[0]);
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));
