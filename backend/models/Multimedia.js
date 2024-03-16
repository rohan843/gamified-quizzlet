import mongoose from 'mongoose';
const { Schema } = mongoose;

const multimediaSchema = new Schema({
    type: String,
    content: String
});


const multimediaModel= mongoose.model('Multimedia', multimediaSchema);
module.exports = multimediaModel;
