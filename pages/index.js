import Head from 'next/head'
import Image from 'next/image'
import Avatar from '../components/Avatar'
// heroicons
import { MicrophoneIcon, MinusCircleIcon, ViewGridIcon } from '@heroicons/react/solid'
import { SearchIcon } from '@heroicons/react/outline'
import Footer from '../components/Footer'
import { useRef } from 'react'
import {useRouter} from 'next/router'
export default function Home() {

  const router = useRouter();
  // useRef
 const searchInputRef =  useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term  = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term = ${term}`)
  }
  return (
    <div  className = 'flex flex-col items-center justify-center h-screen'>
      <Head >
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      {/* header */}
      <header className = 'flex w-full p-5 justify-between text-sm text-gray-700 '>
        {/* left */}
        <div className="flex space-x-4 items-center">
          <p className = 'link'>Store</p>
          <p  className = 'link'>About</p>
        </div>
        {/* right */}
        <div className = 'flex space-x-4 items-center'>
      <p  className = 'link'>Gmail</p>
      <p  className = 'link' >Images</p>
        {/* icon  */}
        <ViewGridIcon className = 'h-10 p-2 w-10 rounded-full hover:bg-gray-100 cursor-pointer '></ViewGridIcon>
        {/* Avatar */}
        <Avatar url = 'https://lh3.googleusercontent.com/ogw/ADGmqu-Slsl0VZ1rePGtUTYwkfqg9eWUc0xm8IuryptRDw=s83-c-mo'></Avatar>
        </div>

      </header>
      {/* body of the google search bar */}
      <form className = 'flex flex-col items-center mt-20 flex-grow w-4/5 '>
        <Image src = 'https://assets.stickpng.com/images/580b57fcd9996e24bc43c51f.png' height = {100} width = {300}></Image>
 
        {/* input */}
        <div className = 'flex w-full mt-5 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl '>
          <SearchIcon className = 'h-5 w-5 mr-3 text-gray-500'></SearchIcon>
          <input ref = {searchInputRef} type = 'text' className = ' flex-grow focus:outline-none' ></input>
          <MicrophoneIcon className = 'h-5 w-5 mr-3 '></MicrophoneIcon>
        </div>

        {/* button */}
        <div className = 'flex flex-col w-1/2  space-y-2 mt-5 mr-5 justify-center sm:space-y-0 sm:flex-row sm:space-x-4'>
        <button onClick = {search} className = 'btn'> Google Search</button>
        <button onClick = {search} className = 'btn'> I'm Feeling Lucky</button>
        </div>
      </form>

      {/* footer */}
      <Footer></Footer>
    </div>
  )
}
