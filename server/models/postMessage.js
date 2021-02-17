import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    title: String,
    message: String,
    eventDate: Date,
    author: String,
    tags: [String],
    selectedFile: String,
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
}, { timestamps: true })

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;