import mongoose from "mongoose";

const feedSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},
    description: {type: String, required: true},
    photo: {type: String, required: true},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Feed', feedSchema);