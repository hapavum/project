import React from 'react'
import s from "./Footer.module.sass"
import Container from '../Container/Container'
import { IoLogoYoutube } from "react-icons/io5"
import {Link} from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { FaYandexInternational } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className={s.rolex_footer}>
    <Container>
      <div className={s.footer_col}>
         <h4>© 2007—2026  New Watch </h4>
         <nav className={s.footer_nav}>
           <Link className={s.link} to="/">Home</Link>
            <Link className={s.link} to="/sport">New Sport Wartchs</Link>
            <Link className={s.link} to="/classic">New Classic Watchs</Link>
         </nav>
    <IoLogoYoutube />
    <FaGithub />
    <BsInstagram />
    <FaYandexInternational />

    
      </div>
    </Container>
    </footer>
  )
}

export default Footer