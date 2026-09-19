            {/* Profile Header */}
            <section  className="mx-auto max-w-4xl px-4 py-8">

                <div className="flexh-20  w-full  flex gap-5 ">

                    {/* Avatar */}
                    <div className="h-20 w-20  rounded-full  border-amber-400 border-3">
                        <img
                            src={user?.avatar}
                            alt="Profile"
                            className="h-full w-full rounded-full object-cover"
                        />
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1  w-90 ">

                        <div className="flex items-center gap-5">
                            <h1 className="text-2xl font-semibold">
                                {user?.username || "Guest"}
                            </h1>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-8 ">
                            <span className="flex flex-col">
                                <b>{note?.length || 0}</b> posts
                            </span>

                            <span className="flex flex-col">
                                <b>173</b> followers
                            </span>

                            <span className="flex flex-col">
                                <b>80</b> following
                            </span>
                        </div>

                        
                    </div>
                </div>
                {/* Bio */}
                        <div className="mt-5 px-2  h-20" >
                            <h2 className="font-semibold">
                                {user?.username}
                            </h2>

                            <p className="text-sm text-zinc-400">
                                Full-Stack Developer (MERN) | Web 3.0
                            </p>
                        </div>


                {/* Highlights */}
                {/* <div className="mt-10 flex gap-6 overflow-x-auto scrollbar-none">
                    {["My Mentor", "Development", "Learning", "Meetup", "AI", "Festival"].map(
                        (item) => (
                            <div
                                key={item}
                                className="shrink-0 text-center"
                            >
                                <div className="h-20 w-20 rounded-full  p-1">
                                    <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-800 text-xs">
                                        {item[0]}
                                    </div>
                                </div>

                                <p className="mt-2 text-xs">
                                    {item}
                                </p>
                            </div>
                        )
                    )}
                </div> */}

            </section>
            {/* Tabs */}
            <div className="flex w-90 items-center justify-between px-10 sm:w-full sm:px-90 border-t border-zinc-800 ">       
                    <i className="ri-grid-line text-xl" />
                    <i className="ri-video-line text-xl" />
                    <i className="ri-bookmark-line text-xl" />
            </div>
            <Post/>
            <Sidebar/>
            
