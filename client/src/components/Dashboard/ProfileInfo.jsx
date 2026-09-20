import React from 'react'
import { useAuth } from '../../hooks/useAuth'
import { useTheme } from '../../hooks/useTheme'
import { useNote } from '../../hooks/useNote'
import {RiDrizzleFill,RiSunLine} from '@remixicon/react'
import Post from './Post'

const ProfileInfo = ({ themeStyles = "" }) => {
    const { user } = useAuth()
    const { theme, changeTheme } = useTheme()
    const { note } = useNote()

    const ThemeChange = () => {
        changeTheme()
    }
    const isDark = theme === "dark";



    return (
        <main className="order-1  p-4 overflow-hidden h-80 sm:h-70 ">

            <div className="flex flex-col sm:gap-5 gap-2 sm:flex-row">
                {/* <button className='bg-blue-900 absolute top- '>DARK </button> */}

                {/* Avatar */}
                <div className="mx-auto h-25 w-25 shrink-0 overflow-hidden  border-4  sm:mx-0 sm:h-50 sm:w-50">
                    <img
                        src={user?.avatar}
                        alt="Avatar"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* User Info */}
                <div className="min-w-0 flex-1">

                    <div className="text-center sm:text-left">
                        <h1 className="truncate text-3xl font-bold sm:text-5xl lg:text-7xl">
                            {user?.username || "Guest"} <button onClick={ThemeChange} className='text-xl'> {isDark ? <RiDrizzleFill /> : <RiSunLine />}</button>
                        </h1>

                        <p className="text-sm sm:text-xl">
                            anshu
                        </p>
                    </div>

                    {/* Stats */}
                    <div className="mt-4 flex justify-center gap-4 sm:justify-start sm:gap-8">

                        <div className="text-center">
                            <h2 className="text-sm font-semibold sm:text-xl">
                                Posts
                            </h2>
                            <p>{theme.length}</p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-sm font-semibold sm:text-xl">
                                Followers
                            </h2>
                            <p>00</p>
                        </div>

                        <div className="text-center">
                            <h2 className="text-sm font-semibold sm:text-xl">
                                Following
                            </h2>
                            <p>00</p>
                        </div>

                    </div>

                    {/* Bio */}
                    <div className="mt-4 sm:flex-col flex justify-center max-w-xl">
                        <p className="break-words text-sm sm:text-base">
                            (\__/) 🍁 |「 त्यागात् शान्तिः अनंतरम्! 」| 🍁
                            <br />
                            ( • • ) Full-Stack Developer (MERN) | Web 3.0
                            <br />
                            🍃 Next.js • AWS • GSAP • Three.js • Kubernetes
                        </p>
                    </div>

                </div>
            </div>


        </main>
    )
}

export default ProfileInfo