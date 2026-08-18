import mongoose from "mongoose";

const notificationsSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},
    title: {type: String, required: true},
    description: {type: String, required: true},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Notifications', notificationsSchema);