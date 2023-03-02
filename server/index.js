const port = process.env.PORT || 3000;
const express = require('express')
const path = require('path')
const morgan = require('morgan');
const app = express()

// static middleware
app.use(express.static(path.join(__dirname, '..','public')))

// body parsing middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(morgan('dev'))
app.get('/', (req, res) => {
  console.log("sending bundle...")
  res.sendFile(path.join(__dirname, "../public/index.html"));
})
app.use("*", (req, res) => {
  res.redirect('/')
});

app.listen(port, ()=> console.log(`listening on port ${port}`));
