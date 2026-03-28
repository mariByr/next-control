'use client'
import Link from "next/link";

import {ThemeComponent} from "@/components/theme/ThemeComponent";
import {UserComponent} from "@/components/user/UserComponent";

import './header.css';
import {SearchComponent} from "@/components/search/SearchComponent";
import {usePathname} from "next/navigation";

export const Header= ()=>{
    const pathname = usePathname();
    const isMoviePage = pathname === "/movies";

    return (
    <div className={"header-group"}>
            <Link href={'/movies'}>
                <div className={'logo'}>Movie Rock App</div>

            </Link>

        {isMoviePage &&  (<SearchComponent />)}
            <ThemeComponent/>
            <UserComponent name={'mary'}/>

        </div>
    );
};
