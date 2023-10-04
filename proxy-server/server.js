// server.js
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

app.use(cors());

const apiUrl = 'https://englishapi.pinkvilla.com/app-api/v1/photo-gallery-feed-page/page/';

app.get('/api/articles/:page', async (req, res) => {
  const { page } = req.params;

  try {
    const response = await axios.get(apiUrl + page);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
