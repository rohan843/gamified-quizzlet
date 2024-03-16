import mongoose from 'mongoose';
//import multimediaSchema from 'Multimedia.js';

const { Schema } = mongoose;


const multimediaSchema = new Schema({
    type: String,
    content: String
});

const flashcardSchema = new Schema({
    name: String,
    multimedia: multimediaSchema,
    text: String
});


const flashcardModel= mongoose.model('Flashcard', flashcardSchema);
module.exports = flashcardModel;
