import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {

    const router = useRouter();
    const searchInputRef = useRef();

    // search

    const search = (e) => {
        e.preventDefault();

        const term = searchInputRef.current.value;

        if(!term) return;

        router.push(`/search?term = ${term}`)
    }

    return (
        <header className = 'sticky top-0 bg-white'>
            <div className = 'flex w-full p-6'>
            <Image  src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' height = {40} 
            width = {140} className = 'cursor-pointer' onClick = {() => router.push('/')}
            >
            </Image>

            {/* form */}
            <form className = 'flex flex-grow px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center '>
                <input ref ={searchInputRef} type = 'text' className = 'flex-grow focus:outline-none' ></input>

                <XIcon className = 'h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-100 transform hover:scale-125' 
                onClick = {() => {searchInputRef.current.value = ""}}
                ></XIcon>
                <MicrophoneIcon className = 'h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 '></MicrophoneIcon>
                <SearchIcon className = 'h-6  text-blue-500 hidden sm:inline-flex'></SearchIcon>
                <button hidden type = 'submit' onClick = {search}> Search </button>
            </form>
            <Avatar className = 'ml-auto' url = 'https://lh3.googleusercontent.com/ogw/ADGmqu-Slsl0VZ1rePGtUTYwkfqg9eWUc0xm8IuryptRDw=s83-c-mo'></Avatar>
            </div>

            {/* Header options */}
            <HeaderOptions></HeaderOptions>
        </header>
    )
}

export default Header
