import { useEffect, useState } from "react";
import { useNote } from "../../hooks/useNote";
import NoteForm from "../NoteForm";
import Sidebar from "./SidebarDashboard";
import NavbarDashboard from "./NavbarDashboard"
import TemplateDashboard from "./TemplateDashboard";
import FeedDashboard from "./FeedDashboard";
import NoteDashboard from "./NoteDashboard";


const Dashboard = ({onViewNote,setviewNote,setnoteId,themeStyles}) => {
    const { getnote } = useNote();
    const [showCreateNote, setShowCreateNote] = useState(false);    
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
            <NavbarDashboard  />
            <FeedDashboard onViewNote={()=> {setviewNote(true)}} setnoteId={setnoteId}  />
            <NoteDashboard onCreateNote={() => setShowCreateNote(true)} onViewNote={()=> {setviewNote(true)}} setnoteId={setnoteId} />
            <TemplateDashboard/>
            {showCreateNote && (
             <NoteForm onClose={() => setShowCreateNote(false)}/> )} 
        </div>
       
    );
};

export default Dashboard;