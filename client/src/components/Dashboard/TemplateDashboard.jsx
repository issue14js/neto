import React from 'react'
import { useTheme } from '../../hooks/useTheme';

const TemplateDashboard = () => {
    const { theme } = useTheme()
    const isDark = theme === "dark";
    return (
        <div className="py-2  rounded-xl ">
            <span className={`${isDark ? "text-white" : "text-violet-700"} text-xl font-bold`}>Template</span>
        </div>
    )
}

export default TemplateDashboard