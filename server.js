const express = require('express');
const app = express();
const env=require("dotenv").config();
app.use(express.json());

app.post('/calculate-nutrition', async (req, res) => {
  const { title, ing } = req.body;
  
  const url = `https://api.edamam.com/api/nutrition-details?app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`;

  const payload = {
    title,
    ingr: ing,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json();

  res.json(data.totalNutrients);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});


