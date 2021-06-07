const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv')
const morgan = require('morgan');
const initializeDBConnection = require('./db/db.connect');
const User = require('./models/User');
const Post = require('./models/Post');

dotenv.config();
app.use(cors())
app.use(morgan('dev'))
app.use(express.json());

initializeDBConnection();

app.get('/', async (req, res) => {
    try {

        const posts = await Post.find();
        console.log(posts);

        // User.findOne({ name: 'Gaurav' }).populate('posts')
        //     .exec((err, user) => {
        //         console.log(user);
        //     })
        // const user = await User.create({ name: 'Gaurav' });
        // await Post.create({
        //     title: "Title",
        //     body: "Post Body",
        //     user: user._id
        // })
        // res.send(user);
        res.send("Oh Boy")
    } catch (error) {
        res.send("ERROR")
    }
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, err => {
    console.log("Server started at port " + PORT);
})