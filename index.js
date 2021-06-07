const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv')
const morgan = require('morgan');
const initializeDBConnection = require('./db/db.connect');
// const User = require('./models/User');
// const Post = require('./models/Post');

dotenv.config();
const app = express();
app.use(morgan('dev'))
app.use(express.json());
app.use(cors())

initializeDBConnection();

app.get('/', (req, res) => {
        // const posts = await Post.find();
        // console.log(posts);

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
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Server started at port " + PORT);
})