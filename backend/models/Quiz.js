import mongoose from 'mongoose';
//import questionSchema from 'Question.js';
//import multimediaSchema from 'Multimedia.js';

const { Schema } = mongoose;

const multimediaSchema = new Schema({
    type: String,
    content: String
});

const questionSchema = new Schema({
    question_text:String,
    option_1:String,
    option_2:String,
    option_3:String,
    option_4:String,
    correct_option:String,
    flashcard_id: Number,
    multimedia: multimediaSchema,
  });



const quizSchema = new Schema({
    questions_array: [questionSchema],
    time_dur_mins: Number,
    name: String,
    image: multimediaSchema
});


const quizModel= mongoose.model('Quiz', quizSchema);
module.exports = quizModel;
