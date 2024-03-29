import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import ytLogoMobile from '../images/yt-logo-mobile.png'
import ytLogo from '../images/yt-logo.png'
import { SlMenu } from 'react-icons/sl';
import { IoSearch } from 'react-icons/io5';
import { RiVideoAddLine } from 'react-icons/ri';
import { FiBell } from 'react-icons/fi';
import { CgClose } from 'react-icons/cg';
import { Context } from '../context/ContextApi'
import Loader from '../shared/Loader';


const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const { loading, MobileMenu, setMobileMenu } = useContext(Context);

    const navigate = useNavigate();
    const searchQueryHandler = (event) => {
        if ((event?.key === "Enter" || event === "searchButton") && searchQuery?.length > 0) {
            navigate(`/searchResult/${searchQuery}`);
        }
    }
      const MobileMenuToggle = () => {
        setMobileMenu(!MobileMenu);
      };

    const { pathname } = useLocation();
    const pageName = pathname?.split('/')?.filter(Boolean)?.[0] || "";

    return (
        <div className="sticky top-0 z-10 flex flex-row items-center justify-between 
        h-14 px-1 md:px-5 bg-black">
      {loading && <Loader />}

      <div className="flex h-5 items-center ">
        {pageName !== 'video' && (
          <div
            className="flex  sm:hidden sm:h-4 sm:w-5 cursor-pointer items-center 
            justify-center h-8 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={MobileMenuToggle}
          >
            {MobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )}

        <Link to="/" className="flex h-5 items-center">
          {window.innerWidth === 768  ? (
            <img className="h-full" src={ytLogoMobile} alt="Youtube" />
          ) : (
            <img className="h-full dark:md:block" src={ytLogo} alt="Youtube" />
          )}
        </Link>
      </div>
        // Search Section
            <div className="group flex items-center">
                <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border 
                border-[#303030] rounded-l-3xl group-focus-within:border-blue-500
                md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                    <div className="w-10 items-center justify-center hidden 
                    group-focus-within:md:flex">
                        <IoSearch className="text-white text-xl" />
                    </div>
                    <input
                        type="text"
                        className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
                        onChange={(e) => setSearchQuery(e.target.value)}
                        onKeyUp={searchQueryHandler}
                        placeholder="Search"
                        value={searchQuery}
                    />
                    {searchQuery && (
                      <CgClose
                        className="md:w-[30px] h-8 w-[24px] md:h-10 text-white cursor-pointer"
                        onClick={() => setSearchQuery('')}
                      />
                    )}
                  </div>
                
                <button
                    className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
                    onClick={() => searchQueryHandler("searchButton")}
                >
                    <IoSearch className=" text-white text-xl" />
                </button>
            </div>
            <div className="flex items-center gap-3">
                <div className="flex ml-2 ">
                    <div className="flex items-center justify-center h-10 w-10 
                    rounded-full hover:bg-[#303030]/[0.6]">
                        <RiVideoAddLine className="text-white text-xl cursor-pointer" />
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 
                    rounded-full hover:bg-[#303030]/[0.6]">
                        <FiBell className="text-white text-xl cursor-pointer" />
                    </div>
                </div>
                <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
                    <img src="https://xsgames.co/randomusers/assets/avatars/male/67.jpg" />
                </div>
            </div> 
        </div>
    );
};

export default Header;


