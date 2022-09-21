import React, { useState } from "react";
import { BsSearch } from 'react-icons/bs';
import { BiUser } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { IoIosArrowForward } from 'react-icons/io';
import logo from '../assets/logo.png';
import { useEffect } from "react";
import SearchResult from "./SearchResult";
import { Link, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const axios = require('axios');


const SubHeader = () => {
    const [categories, setCategories] = useState([]);
    const [keyword, setKeyword] = useState('');
    const navigate =useNavigate()
    useEffect(() => {
        axios.get('http://localhost:5000/api/v1/categories')
            .then(function (response) {
                setCategories(response.data.data.categories)
    
            })
    }, []);

  return (
    <div className=" border-b-2 py-4">
        <div className="max-w-7xl mx-auto ">
        <div className="flex justify-center items-center text-[16px] gap-5  z-0 w-full">
            <div className="hidden lg:block">
                <img src={logo} alt="" />      
            </div>
            <div className="flex bg-[#f8f8f8]  items-center  border ">
                <div className="p-3 border-r-[1px]">
                    <div className="dropdown">
                        <label tabIndex="0" className="cursor-pointer flex items-center gap-1" >Select category <IoIosArrowForward className="mt-1" /></label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 mt-3 shadow bg-base-100 rounded-box w-52 ">
                            {
                                categories?.map((category, index) =>
                                    <li key={index}>
                                        <a className="hover:text-[#669900]">{category.name}</a>
                                    </li>)          
                            }
                            
                        </ul>
                    </div> 
                </div>
                <div className="py-3 px-2">
                    <input
                        onChange={(e) => setKeyword(e.target.value)}
                        className="bg-[#f8f8f8] outline-0 w-[100%]" type="text" name="search" placeholder=" খোজ the Search Products" id="" />
                </div>     
                <div className="flex justify-center items-center border-l-[1px]">
                    <button className="p-4" onClick={()=>navigate(`/search/${keyword}`)}><BsSearch/></button>       
                </div>
            </div> 
            <div className=" hidden lg:block">
                <div className="flex justify-center items-center gap-6">
                    <div>
                        01756953936
                    </div>
                    <div>
                        Help & More
                    </div>
                    <div className="flex relative">
                        <span className="text-2xl"><FcLike/></span>
                        <span className="absolute top-[-9px] left-[13px] bg-[#669900] rounded-full w-[20px] h-[20px] flex items-center justify-center p-[3px]">1</span>
                    </div>
                    <div className="text-2xl">
                        <BiUser/>
                    </div>          
                </div>
            </div>
        </div>
          </div>
               
    </div>
  );
};

export default SubHeader;
