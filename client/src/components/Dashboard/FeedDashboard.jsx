import { useTheme } from "../../hooks/useTheme";
import { useNote } from "../../hooks/useNote";

const FeedDashboard = () => {
    const { theme } = useTheme();
    const { allNote } = useNote();

    const isDark = theme === "dark";

    const cardStyle = isDark
        ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
        : "border-violet-200 bg-gradient-to-br from-violet-300 via-fuchsia-100 to-amber-100 text-zinc-900";

    return (
        <div className="col-span-1 flex flex-col overflow-hidden rounded-xl">
            <h2
                className={`text-xl font-bold ${
                    isDark ? "text-white" : "text-violet-700"
                }`}
            >
                Feed
            </h2>

            <div className="flex flex-col gap-1 overflow-y-auto p-1 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-400">
                {allNote.map((note) => (
                    <div
                        key={note._id}
                        className={`h-20 w-full shrink-0 cursor-pointer overflow-hidden rounded p-2 break-words whitespace-normal ${cardStyle}`}
                    >
                        <h3 className="text-sm font-bold">
                            {note.title}
                        </h3>

                        <p className="text-[10px] opacity-70">
                            {note.content}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeedDashboard;