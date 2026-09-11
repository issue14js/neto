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
        <div
            className={`relative grid h-screen w-full grid-cols-7 gap-2 p-2
            transition-colors duration-300
            ${isDark ? "bg-black text-white" : "bg-white text-black"}`}
        >
            {/* Create Note Modal */}
            {showCreateNote && (
                <NoteForm
                    onClose={() => setShowCreateNote(false)}
                />
            )}

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className="col-span-6 grid min-h-0 grid-rows-[40%_60%] gap-2">

                {/* Top Section */}
                <section className="grid min-h-0 grid-rows-[30%_70%] rounded-xl">
                    <NavbarDashboard/>
                    <Banner />
                </section>

                {/* Bottom Section */}
                <section className="grid min-h-0 grid-cols-4 gap-2">

                    {/* Main Content */}
                    <div className="col-span-3 grid min-h-0 grid-rows-2 gap-2">
                        <TemplateDashboard />
                        <Note />
                    </div>

                    {/* Feed */}
                    <FeedDashboard />

                </section>
            </main>
        </div>
    );
};

export default Dashboard;