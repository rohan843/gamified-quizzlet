import mongoose from 'mongoose';
//import multimediaSchema from 'Multimedia.js';
const { Schema } = mongoose;
//import badgeSchema from 'Badge.js';


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

  const badgeSchema = new Schema({
    badgeImage: multimediaSchema
   });
   

const userSchema = new Schema({

    email: String,
    password: String,
    name: String,
    profileImage: multimediaSchema,
    lifeLines: Number,
    coins: Number,
    streakLength: Number,
    QuestionsSolved: Number,
    easyQuizzesAttended: Number,
    mediumQuizzesAttended: Number,
    hardQuizzesAttended: Number,
    badgesArray: [badgeSchema]
});


const userModel= mongoose.model('User', userSchema);
module.exports = userModel;
