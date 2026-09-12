import { useEffect, useState } from "react";

import { useTheme } from "../../hooks/useTheme";
import { useNote } from "../../hooks/useNote";

import NoteForm from "../NoteForm";
import Sidebar from "./SidebarDashboard";
import NavbarDashboard from "./NavbarDashboard"
import Banner from "./BannerDashboard";
import Note from "./NoteDashboard";
import TemplateDashboard from "./TemplateDashboard";
import FeedDashboard from "./FeedDashboard";


const Dashboard = () => {
    const { theme } = useTheme();
    const { getnote } = useNote();

    const [showCreateNote, setShowCreateNote] = useState(false);


    const isDark = theme === "dark";

    useEffect(() => {
        getnote();
    }, []);

    return (
       <div className="grid h-screen w-full grid-cols-1 grid-rows-[auto_1fr_auto] sm:grid-cols-8 sm:grid-rows-3">
          <Sidebar/>
          <NavbarDashboard/>

    {/* Template */}
    <div className="
        hidden
        bg-violet-400

        sm:block
        sm:col-start-2
        sm:col-span-5
        sm:row-start-2
    ">
        Template
    </div>

    {/* Feed */}
    <div className="
        hidden
        bg-pink-400

        sm:block
        sm:col-start-7
        sm:col-span-2
        sm:row-start-2
        sm:row-span-2
    ">
        Feed
    </div>

    {/* Note */}
    <div className="
        row-start-2
        bg-orange-400

        sm:col-start-2
        sm:col-span-5
        sm:row-start-3
    ">
        Note
    </div>

</div>
        // <div
        //     className={`relative grid h-screen w-full grid-cols-7 gap-2 p-2
        //     transition-colors duration-300
        //     ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
        // >    
        //     {/* Create Note Modal */}
        //     {showCreateNote && (
        //         <NoteForm
        //             onClose={() => setShowCreateNote(false)}
        //         />
        //     )}



        //     {/* Sidebar */}
        //     <Sidebar />

        //     {/* Main Content */}
        //     <main className="col-span-6 grid min-h-0 grid-rows-[40%_60%] gap-2">

        //         {/* Top Section */}
        //         <section className="grid min-h-0 grid-rows-[30%_70%] rounded-xl">
        //             <NavbarDashboard
        //               onCreateNote={() => setShowCreateNote(true)}
        //             />
        //             <Banner />
        //         </section>

        //         {/* Bottom Section */}
        //         <section className="grid min-h-0 grid-cols-4 gap-2">

        //             {/* Main Content */}
        //             <div className="col-span-3 grid min-h-0 grid-rows-2 gap-2">
        //                 <TemplateDashboard />
        //                 <Note 
        //                  onCreateNote={() => setShowCreateNote(true)}
        //                 />
        //             </div>

        //             {/* Feed */}
        //             <FeedDashboard />

        //         </section>
        //     </main>
        // </div>
    );
};

export default Dashboard;