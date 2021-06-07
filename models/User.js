const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    name: { type: String },
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }]
})

const User = mongoose.model('User', UserSchema);

module.exports = User;
