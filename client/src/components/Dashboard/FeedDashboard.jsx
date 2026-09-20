import { useTheme } from "../../hooks/useTheme";
import { useNote } from "../../hooks/useNote";

const FeedDashboard = ({onViewNote,setnoteId}) => {
    const { theme } = useTheme();
    const { allNote } = useNote();

    const isDark = theme === "dark";

    const cardStyle = isDark
        ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
        : "border-violet-200 bg-gradient-to-br from-violet-300 via-fuchsia-100 to-amber-100 text-zinc-900";

         const NoteView = ((id)=>{
            setnoteId(id)
            onViewNote()


    })
    // console.log(allNote)

    return (
        <div className="flex min-h-0 flex-col overflow-hidden rounded-xl sm:col-start-7 sm:col-span-2 sm:row-start-2 sm:row-span-2">

    <h2 className={`ml-2 mb-2 text-xl font-bold ${
        isDark ? "text-white" : "text-violet-700"
    }`}>
        Feed
    </h2>

    <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-y-auto p-1 scrollbar-none sm:scrollbar-thin sm:scrollbar-track-transparent sm:scrollbar-thumb-gray-400">
        {allNote.map((note) => {
            const owner = note.owner
            // console.log("owner",owner)
            return <div
                onClick={()=>{NoteView(note._id)}}
                key={note._id} 
                className={`h-20 w-full shrink-0 overflow-hidden rounded p-2 ${cardStyle}`}
            >
                <div className="flex gap-2 items-center h-5">
                    <img className="h-full w-5 rounded-full " src={owner.avatar} alt="" />
                    <h1>{owner.username}</h1>
                </div>
                <h3 className="text-sm font-bold">{note.title}</h3>
                <p className="text-[10px] opacity-70">{note.content}</p>
            </div>
        })}
    </div>
</div>
    );
};

export default FeedDashboard;