const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const todoSchema = new Schema(
    {
        userid: { type: Number, default: 1 },
        title: { type: String  },
        description: { type: String },
        deadline: { type: String },
        isDone: { type: Boolean, default: false },
    },
    {
        timestamps: [{ createdAt: 'created_at', updatedAt: 'updated_at' }],
    }
);
module.exports=mongoose.model('Todo',todoSchema)