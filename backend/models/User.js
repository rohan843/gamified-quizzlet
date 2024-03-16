import mongoose from 'mongoose';
import questionSchema from 'Question.js';

const { Schema } = mongoose;
import badgeSchema from 'Badge.js';

const userSchema = new Schema({

    email: String,
    password: String,
    name: String,
    profileImage: String,
    lifeLines: Number,
    coins: Number,
    streakLength: Number,
    QuestionsSolved: Number,
    easyQuizzesAttended: Number,
    mediumQuizzesAttended: Number,
    hardQuizzesAttended: Number,
    badgesArray: [badgeSchema]
});

module.exports = userSchema;