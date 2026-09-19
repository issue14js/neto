import { useEffect, useState } from "react";
import { useNote } from "../../hooks/useNote";
import NoteForm from "../NoteForm";
import Sidebar from "./SidebarDashboard";
import NavbarDashboard from "./NavbarDashboard"
import TemplateDashboard from "./TemplateDashboard";
import FeedDashboard from "./FeedDashboard";
import NoteDashboard from "./NoteDashboard";
import Mobileavbar from "../Mobileavbar";


const Dashboard = ({onViewNote,setShowCreateNote,showCreateNote, setviewNote,setnoteId,themeStyles}) => {
    const { getnote } = useNote();  
    const handleCreateNote = () => {
    setShowCreateNote(true);
 };

    useEffect(() => {
        getnote();
    }, []);

    return (
        <div className={`grid h-screen w-full grid-cols-1 grid-rows-[25%_auto_7%] 
                         sm:grid-cols-8 sm:grid-rows-[40%_30%_30%] `}>
            <Sidebar themeStyles={themeStyles} />
            <NavbarDashboard  themeStyles={themeStyles} onViewNote={()=> {setviewNote(true)}} setnoteId={setnoteId} />
            <FeedDashboard onViewNote={()=> {setviewNote(true)}} setnoteId={setnoteId}  />
            <NoteDashboard onCreateNote={ setShowCreateNote} onViewNote={()=> {setviewNote(true)}} setnoteId={setnoteId} />
            <TemplateDashboard/>
            {showCreateNote && (
             <NoteForm onClose={() => setShowCreateNote(false)}/> )} 
             <Mobileavbar/>
        </div>
       
    );
};

export default Dashboard;