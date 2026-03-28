'use client'
import {useTheme} from "next-themes";
import './theme.css'
export const ThemeComponent = () => {
    const {theme,setTheme} = useTheme();
    const toggleTheme = () => {
        setTheme(theme==='dark' ? 'light' : 'dark');
    }
    return (
        <>
            <button className={'theme-toggle'} onClick={toggleTheme}>Switch Theme

            </button>
        </>
    );
};
