const express = require('express');
const app = express();
const PORT = 3000;

app.get('/health', (req, res) => {
  res.json({ status: 'UP' });
});

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello from Jenkins CI/CD 🚀' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

