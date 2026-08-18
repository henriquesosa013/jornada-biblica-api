import mongoose from "mongoose";

const battleSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},
    battleId: {type: String,default: () => crypto.randomUUID(),unique: true},
    data: {type: mongoose.Schema.Types.Mixed,required: true},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('Battle', battleSchema);