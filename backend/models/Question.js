import mongoose from 'mongoose';
const { Schema } = mongoose;

const questionSchema = new Schema({
  question_text:String,
  option_1:String,
  option_2:String,
  option_3:String,
  option_4:String,
  correct_option:String,
  flashcard_id: Number,
  multimedia: String,
});

module.exports = questionSchema;