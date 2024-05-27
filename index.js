// configuring a server
const express = require("express");

const PORT = 3000
const app = express();

app.listen(PORT, () => {
  console.log('App listening on port 3000!');
});

app.get('/mine', (req, res) => {
  res.send('Hello there')
});


app.post('/mine', (req, res) => {
  res.send('Post request')
});

app.put('/mine', (req, res) => {
  res.send ('MY put request')
  });
  
app.patch('/mine', (req, res) => {
  res.send('I am a boss')
});

app.delete('/mine', (req, res) => {
  res.send('Deleting soon')
});