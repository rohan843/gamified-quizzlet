import mongoose from 'mongoose';
//import questionSchema from 'Question.js';
//import multimediaSchema from 'Multimedia.js';

const { Schema } = mongoose;


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


const multimediaSchema = new Schema({
    type: String,
    content: String
});

const badgeSchema = new Schema({
    questions_array: [questionSchema],
    time_dur_mins: Number,
    name: String,
    image: multimediaSchema
});


const badgeModel= mongoose.model('Badge', badgeSchema);
module.exports = badgeModel;
