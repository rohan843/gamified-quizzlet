import mongoose from 'mongoose';
import questionSchema from 'Question.js';

const { Schema } = mongoose;

const badgeSchema = new Schema({
    questions_array: [questionSchema],
    time_dur_mins: Number,
    name: String,
    image: String
});

module.exports = badgeSchema;