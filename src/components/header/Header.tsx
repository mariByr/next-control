'use client'
import Link from "next/link";

import {ThemeComponent} from "@/components/theme/ThemeComponent";
import {UserComponent} from "@/components/user/UserComponent";

import './header.css';
import {SearchComponent} from "@/components/search/SearchComponent";

export const Header= ()=>{

    return (
    <div className={"header-group"}>
            <Link href={'/public'}>
                <div className={'logo'}>Movie Rock App</div>

            </Link>
            <SearchComponent />
            <ThemeComponent/>
            <UserComponent/>

        </div>
    );
};
