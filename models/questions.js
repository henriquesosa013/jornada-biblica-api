import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({

    question: { type: String, required: true},
    answers: {type: [String], required: true},
    correctAnswer: {type: Number, required: true},
    level: {type: Number, required: true},
    book: { type: String, required: true},
    chapter: {type: Number, required: true},
    verseStart: {type: Number, required: true},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Question', questionSchema);