const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username:String,
    user_gmail:String,
    user_password:String,
});
const users = mongoose.model('users',UserSchema);
module.exports = users;