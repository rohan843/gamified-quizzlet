import mongoose from 'mongoose';
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
const questionModel= mongoose.model('Question', questionSchema);

module.exports = questionModel;
