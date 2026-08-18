import mongoose from "mongoose";

const facSchema = new mongoose.Schema({
    userid: { type: mongoose.Schema.Types.ObjectId,ref: 'User',required: true,},
    title:  {type: String,required:true},
    description: {type: String,required:true},
    answer: { type: String, required:false,default: null },
    response: {type: String, required:false, default: null},
    isActive: {type: Boolean, default: true},
    createdAt: {type: Date,default: Date.now}
});

export default mongoose.model('fac', facSchema);