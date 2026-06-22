import React, { useState } from 'react'
import s from "./Header.module.sass"
import {Link} from "react-router-dom"
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import Container from '../Container/Container';
import SearchModal from "../SearchModal/SearchModal"
import TextC from '../TextC/TextC';

const Header = () => {
   const [isSearchOpen, setIsSearchOpen] = useState(false)
  
   const openSearch = (e) => {
    e.preventDefault();
    setIsSearchOpen(true)
   }

  return (
    <>
    <TextC />
    <header className={s.header}>
      <Container>
       <div className={s.header_wrap}>
        <h2 className={s.title}>Watch</h2>
        <nav className={s.navbar}>
            <Link className={s.link} to="/">Home</Link>
            
            <a href="#" className={s.link} onClick={openSearch}> <IoIosSearch />Search</a>

             <Link className={s.link} to="/favorites" ><IoMdHeartEmpty />Favorites</Link>
            
            <Link className={s.link } to="/login"><FaUser />log in</Link>
        </nav>
     </div>
     </Container>
    </header>
  
  <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
  </>
  );
};

export default Header