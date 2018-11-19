const express = require('express');
const fs = require('fs');
const app = express();
const PORT = 8787;

app.get('/', (req,res) => res.send('Hello World!'));

app.post('/test', (req,res) => {
    fs.writeFileSync('test.log', req, function(err) {
      if (err) throw err;
      console.log('Received Post Request!');
    });
    res.end('Write file success!');
  } 
)


app.listen(PORT, ()=> {
    console.log(`Server start! port is ${PORT}`);
  }
)