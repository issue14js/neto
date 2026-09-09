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


async function getNote(req, res) {
    try {
        const user = req.user;

        if (!user) {
            return res.status(401).json({
                message: "Unauthorized request"
            });
        }

        // Current user's notes
        const note = await noteModel.find({
            owner: user._id
        });

        // DB ke saare public notes
        const allNote = await noteModel.find({
            visibility: "public"
        });

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
export { createNote, getNote };