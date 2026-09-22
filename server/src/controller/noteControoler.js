import noteModel from "../model/noteModel.js";
import userModel from '../model/authModel.js'

async function createNote(req, res) {
    try {
        const { title, visibility, content } = req.body;
        const user = req.user;

        // Required fields check
        if (!title || !visibility || !content) {
            return res.status(400).json({
                message: "Please fill all required fields"
            });
        }

        const note = await noteModel.create({
            owner: user._id,
            title,
            visibility,
            content
        });

        return res.status(201).json({
            message: "Note created successfully",
            note
        });

    } catch (err) {
        console.log("Error in Create note controller:", err);

        return res.status(500).json({
            message: "Error in Create note controller",
            error: err.message
        });
    }
}

async function getNote(req, res) {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized request"
            });
        }

        // Current user's private + public notes
        const note = await noteModel.find({
            owner: user._id
        }).populate("owner", "username avatar");

        // Sabhi users ke public notes
        const allNote = await noteModel.find({
            visibility: "public"
        }).populate("owner", "username avatar");

        return res.status(200).json({
            message: "Notes fetched successfully",
            note,
            allNote
        });

    } catch (err) {
        console.log("Error in note fetch controller", err);

        return res.status(500).json({
            message: "Error in fetch note controller",
            error: err.message
        });
    }
}
async function updateNote(req, res) {
    try {
        const { title, visibility, content, noteId,like,save } = req.body;
        const user = req.user;
        const note = await noteModel.findByIdAndUpdate(noteId, {
            title,
            content,
            visibility
        }, { new: true })
        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }
        res.status(200).json({
            message: "Note updated successfully",
            note
        });

    } catch (err) {
        console.log("Error", err)
        return res.status(500).json({ message: "Error in update note controller", err })
    }
}
const likeUpdate = async (req, res) => {
    try {
        const noteId = req.params.id;
        const userId = req.user._id;

        const note = await noteModel.findById(noteId);

        if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        const alreadyLiked = note.likes.some(
            id => id.toString() === userId.toString()
        );

        if (alreadyLiked) {
            note.likes.pull(userId);
        } else {
            note.likes.push(userId);
        }

        await note.save();

        return res.status(200).json({
            message: alreadyLiked ? "Unliked" : "Liked",
            liked: !alreadyLiked,
            likes: note.likes
        });

    } catch (err) {
        console.log("LIKE ERROR:", err);

        return res.status(500).json({
            message: "Like update failed",
            error: err.message
        });
    }
};  

const saveUpdate = async (req,res)=>{
    try{
        const noteId = req.params.id
        const userId = req.user._id
        const note = await noteModel.findById(noteId)

           if (!note) {
            return res.status(404).json({
                message: "Note not found"
            });
        }

        const alreadySaved = note.saves.some(
            id => id.toString() === userId.toString()
        );

        if (alreadySaved) {
            note.saves.pull(userId);
        } else {
            note.saves.push(userId);
        }

        await note.save();

        return res.status(200).json({
            message: alreadySaved ? "UnSaved" : "Saved",
            Saved: !alreadySaved,
            saves: note.saves
        });
    }catch(err){
        console.log("SAVE ERROR:", err);

        return res.status(500).json({
            message: "Save update failed",
            error: err.message
        });
    }

}
     
export { createNote, getNote, updateNote,likeUpdate,saveUpdate };

