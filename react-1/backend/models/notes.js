const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title : String,
    description:String,
    user_gmail:String,
});
const Note = mongoose.model('notes',NoteSchema);
module.exports = Note;