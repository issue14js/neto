import React, { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNote } from "../hooks/useNote";
import Sidebar from "./Dashboard/SidebarDashboard";
import ProfileInfo from "./Dashboard/ProfileInfo";
import Post from "./Dashboard/Post";
import Mobileavbar from "./Mobileavbar";

const Profile = ({ setShowCreateNote, themeStyles, owner, setnoteId, onViewNote }) => {
    const { user } = useAuth();
    const { getnote,allNote } = useNote();

    const profileowner = owner ?? user;
    const ownerNote = allNote.filter(
        (e) => e.owner._id === profileowner._id
    );


    useEffect(() => {
        getnote();
    }, []);

    return (
        <div
            className={`min-h-screen relative w-full ${themeStyles}
            flex flex-col
            sm:grid sm:grid-cols-[12%_88%] `}
        >
            <ProfileInfo profileowner={profileowner} ownerNote={ownerNote} />
            {/* Sidebar */}
            <Sidebar />
            <Mobileavbar
                themeStyles={themeStyles}
                onCreateNote={setShowCreateNote} />
            <Post setnoteId={setnoteId} profileowner={profileowner} ownerNote={ownerNote} onViewNote={onViewNote} />
        </div>
    );
};

export default Profile;