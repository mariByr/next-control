'use client'
import Link from "next/link";

import {ThemeComponent} from "@/components/ThemeComponent";
import {UserComponent} from "@/components/UserComponent";
import SearchComponent from "../search/SearchComponent";
import './header.css';

export const Header = () => {

    return (
    <div className={"header-group"}>
            <Link href={'/public'}>
                <div className={'logo'}>logo</div>
            </Link>
            <SearchComponent/>
            <ThemeComponent/>
            <UserComponent/>

        </div>
    );
};
