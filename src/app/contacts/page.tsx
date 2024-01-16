'use client'
import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import SiteFooter from "../components/Footer";

export default function Contacts() {

    const [linkText, setLinkText] = useState('Click for displaying email.');
    const [linkUrl, setLinkUrl] = useState('#')
    const onEmailLinkClick = (event: any): void => {
        // Change the text content of the link
        setLinkText(`roustam.ts@gmail.com` );
        
    
        // Prevent the default behavior of the link (optional)
        event.preventDefault();

      };
    return (
        <div className="flex w-2/3 flex-col  h-screen items-center mx-auto">
            <TopNavbar />
            <main className="flex flex-col mt-3 pt-3  px-16 rounded-xl h-full w-full bg-white mb-auto">
                <h1 className="text-blue-800 font-semibold text-xl mb-3">My contacts</h1>
                <hr className="mb-3"/>
                <p className="font-semibold">Linkedin: <a className="underline" href="https://www.linkedin.com/in/roustam/">https://www.linkedin.com/in/roustam/</a></p>
                <p className="font-semibold">Github: <a className="underline" href="https://github.com/roustam">https://github.com/roustam</a></p>
                <p className="font-semibold">Telegram: <a className="underline" href="https://t.me/Rou1999">@Rou1999</a></p>
                <p className="font-semibold">Email: <a className="underline" onClick={onEmailLinkClick} href={'mailto:'+linkText}>{linkText}</a></p>
            </main>
            <SiteFooter /> 
        </div>
    )
}