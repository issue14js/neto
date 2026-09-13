import React from 'react'
import { useTheme } from '../../hooks/useTheme';

const TemplateDashboard = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark";
    return (
        <div className="py-2 hidden    sm:block sm:col-start-2 sm:col-span-5  sm:row-start-2   ">
            <span className={`${isDark ? "text-white" : "text-violet-700"} text-xl font-bold`}>Template</span>
            <h1 className='text-5xl px-50 py-10'>Comming Soon</h1>
        </div>
    )
}

export default TemplateDashboard