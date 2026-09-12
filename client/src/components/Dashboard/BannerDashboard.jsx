import { useTheme } from "../../hooks/useTheme";

const Banner = () => {
    const { theme } = useTheme();
    const isDark = theme === "dark";

    const themeStyles = isDark
        ? "border-violet-400/20 bg-gradient-to-br from-violet-950 via-indigo-950 to-slate-950 text-white"
        : "border-violet-200 bg-gradient-to-br from-violet-100 via-fuchsia-50 to-amber-50 text-zinc-900";

    return (
        <div className="h-full py-4">
            <section
                className={`relative flex h-full w-full overflow-hidden rounded-xl px-4 py-4 sm:px-6 ${themeStyles}`}
            >
                {/* Content */}
                <div className="relative z-10 flex max-w-sm flex-1 flex-col justify-center">
                    <span
                        className={`mb-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${
                            isDark ? "text-violet-300" : "text-violet-700"
                        }`}
                    >
                        Creative workspace
                    </span>

                    <h1 className="max-w-xs text-2xl font-black leading-tight tracking-tight">
                        Create. Organize. Succeed.
                    </h1>

                    <p
                        className={`mt-2 max-w-xs text-xs leading-5 ${
                            isDark ? "text-slate-300" : "text-zinc-600"
                        }`}
                    >
                        Organize your ideas, notes, and projects in one place.
                    </p>

                    <button
                        type="button"
                        className={`mt-3 w-fit cursor-pointer rounded-full px-4 py-2 text-xs font-bold shadow-sm transition-transform hover:-translate-y-0.5 ${
                            isDark
                                ? "bg-white text-violet-950"
                                : "bg-violet-700 text-white"
                        }`}
                    >
                        Get started →
                    </button>
                </div>

                {/* Glow */}
                <div className="pointer-events-none absolute -bottom-10 -right-8 h-40 w-40 rounded-full bg-fuchsia-400/20 blur-3xl" />

                {/* Banner Image */}
                <img
                    src="/banner.png"
                    alt="Creative workspace"
                    className="absolute bottom-0 right-[2%] h-full w-1/2 max-w-[300px] object-contain object-bottom"
                />
            </section>
        </div>
    );
};

export default Banner;