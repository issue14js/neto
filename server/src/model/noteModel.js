import mongoose from "mongoose"


const noteSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    visibility: {
        type: String,
        enum: ["private", "public"],
        default: "private"
    },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    likes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],

    saves: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }]

}, {
    timestamps: true
});


const noteModel = mongoose.model("Note", noteSchema)
export default noteModel