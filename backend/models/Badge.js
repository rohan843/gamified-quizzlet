import mongoose from 'mongoose';
const { Schema } = mongoose;


const multimediaSchema = new Schema({
    type: String,
    content: String
});

const badgeSchema = new Schema({
 badgeImage: multimediaSchema
});


const badgeModel= mongoose.model('Badge', badgeSchema);
module.exports = badgeModel;
