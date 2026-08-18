import mongoose from "mongoose";

const SocialSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    friendid: {type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true},
    createdAt: {type: Date, default: Date.now}
});

export default mongoose.model('Social', SocialSchema);