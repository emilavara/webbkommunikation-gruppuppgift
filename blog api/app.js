const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

// Middleware
app.use(cors());
app.use(bodyParser.json());

const postRouter = require('./routes/posts');
app.use('/posts', postRouter);

// Routes
app.get('/', (req, res) => {
    res.send('Home page');
})

// mongodb+srv://Rubin:<password>@cluster0.seauo.mongodb.net/<dbname>?retryWrites=true&w=majority
mongoose.connect(
    'mongodb+srv://Rubin:rub13dub@cluster0.seauo.mongodb.net/cluster0?retryWrites=true&w=majority',
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log('DB connected')
);

app.listen(3000);