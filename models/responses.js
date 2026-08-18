import mongoose from "mongoose";

const responseSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    questionid: {type: mongoose.Schema.Types.ObjectId,ref: 'Question',required: true},
    isCorrect:{type: Boolean, required: true},
    answeredat: {type: Date, default: Date.now}
});

export default mongoose.model('Responses', responseSchema);