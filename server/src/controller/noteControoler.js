import noteModel from "../model/noteModel.js";

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


async function getNote(req,res){
        try{

                const {noteId}=req.body
                if(!noteId){
                return res.status(400).json({
                        message:"noteId require for get note"
                })
        }
        const note = await noteModel.findById(noteId)
        if(!note){
                return res.status(404).json({
                        message:"note not found with this noteId"
                })
        }
        return res.status(201).json({
                message:"note featch sucsesssfully",
                note
        })
}catch(err){
        console.log('Error in note featch controoler ',err)
        return res.status(500).json({
                message:"Error in featch note controller",
                error: err.message

        })
}
}
export { createNote,getNote };