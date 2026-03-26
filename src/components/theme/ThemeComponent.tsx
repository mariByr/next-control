'use client'
import {useTheme} from "next-themes";

export const ThemeComponent = () => {
    const {theme,setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark');
    }
    return (
        <>
            <button className={'border border-gray-500 h-1/2 p-1'} onClick={toggleTheme}>Switch Theme

            </button>
        </>
    );
};
