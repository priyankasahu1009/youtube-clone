import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../utils/appSlice';
import { API_VIDEOS, GOOGLE_API_KEY, YOUTUBE_SEARCH_API } from '../utils/constant';
import { cachResults } from '../utils/searchSlice';
import { Link, json } from 'react-router-dom';
import SuggestionPage from './SuggestionPage';
const fetchJsonp = (url, callbackName) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    const callback = `jsonpCallback_${Date.now()}`;
    script.src = `${url}&callback=${callback || callbackName || callback}`;

    window[callback] = (data) => {
      resolve(data);
      document.body.removeChild(script);
      delete window[callback];
    };

    script.addEventListener('error', reject);

    document.body.appendChild(script);
  });
};

const Head = () => {



  const [searchQuery, setSearchQuery] = useState("");
  let search = searchQuery;
  const [suggestions, setSuggestion] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search)
  const [video, setVideo] = useState("")
  const inputRef = useRef(null);
  const [inputFocused, setInputFocused] = useState(false);




  useEffect(() => {
    const handleScroll = () => {
      setShowSuggestions(false); // Hide suggestions on scroll
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleInputFocus = () => {
    setShowSuggestions(true);
    setInputFocused(true); // Show suggestions on input focus
  };

  const handleInputBlur = () => {
    // Use a setTimeout to delay hiding the suggestions,
    // allowing the click event on suggestions to trigger first
    setTimeout(() => {
      setShowSuggestions(false);
      setInputFocused(false);
    }, 200);
  };
  const handleInputClick = () => {
    // Set the input to focused without opening the keyboard
    // and changing the border color to blue
    setInputFocused(true);

    // Trigger the focus event programmatically
    inputRef.current.focus();
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestion(searchCache[searchQuery])
      } else {
        getSearchSuggestions()
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    try {
      const data = await fetchJsonp(`${YOUTUBE_SEARCH_API}${searchQuery}`);
      console.log('Search suggestions:', data);
      // Handle the search suggestions as needed
      setSuggestion(data[1])

      dispatch(cachResults({
        [searchQuery]: data[1]
      }))
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };


  const handleSuggestionClick = (suggestion, event) => {
    event.preventDefault()
    console.log("cliking")
    setSearchQuery(suggestion);


    // setShowSuggestions(false);
    // Perform additional actions or navigate to a different page if needed
  };


  // const [searchQuery,setSearchQuery]=useState("")
  // useEffect(()=>{
  //   const timer=setTimeout(()=>getSearchSuggestions(),200);
  //   return ()=>{
  //     clearTimeout(timer)
  //   }
  // },[searchQuery])

  // const getSearchSuggestions=async()=>{
  //   const data=await fetch(YOUTUBE_SEARCH_API + searchQuery);
  //   const json =await data.json()
  // }
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu())
  }
  return (
    <div className=" grid-flow-col grid p-3 m-2  h-18 ">
      <div className='flex col-span-1 '>
        <img onClick={() => toggleMenuHandler()}
          className='h-8 mx-2 cursor-pointer' alt='menu' src='https://cdn.iconscout.com/icon/free/png-256/free-hamburger-menu-462145.png?f=webp' />
        <a href='/'>
          <img className='h-8' alt='youtube-logo' src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png' />
        </a>

      </div>

      <div className='col-span-10 px-0 ml-36'>
        <div className='flex'>
          <input
            ref={inputRef}
            className={`w-1/2 p-2 rounded-l-full border ${
              inputFocused ? 'border-blue-500' : 'border-grey-500'
            }`}
            type='text'
            value={searchQuery}
            placeholder='search here...'
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            onClick={ handleInputClick}
            
            
          />


          <a href={`/video?v=${searchQuery}`}>
          <div className='border border-grey-500 p-2 rounded-r-full w-12'><img alt='img' className='h-8' src='https://thumbs.dreamstime.com/b/outline-search-icon-vector-illustration-isolated-transparent-background-sign-symbol-black-white-style-207070400.jpg'/></div>
          </a>
        </div>
        {showSuggestions && (<div className='fixed bg-white py-2 px-2 w-[31rem]   border border-gray-100'  >
          <ul>
            {suggestions.map((s) => (
              <li key={s} onClick={(e) => {

                handleSuggestionClick(s, e);

              }} className='py-2 px-3 hover:bg-gray-100'  >{s}</li>
            ))}

          </ul>
        </div>)}

      </div>
      
      <div className='col-span-1 flex gap-5'>
      <img className='h-7' alt='user' src='https://static.thenounproject.com/png/3750242-200.png' />
      <img className='h-7' alt='user' src='https://www.svgrepo.com/download/31480/notification-bell.svg' />
    
        <img className='h-8' alt='user' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbD6FOA-PJ-ieDwrEn5oj43tAHU-jfBfR2raw9DnZ5FIZr94eT95UdDsqjnN3a1lfYQVw&usqp=CAU' />
      </div>


    </div>
  )
}

export default Head