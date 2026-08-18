import mongoose from "mongoose";

const bibleSchema = new mongoose.Schema({
    book: { type: String, required: true},
    chapter: {type: Number, required: true},
    versiculo: {type: Number, required: true},
    texto: {type: String, required: true}
});

export default mongoose.model('Bible', bibleSchema);