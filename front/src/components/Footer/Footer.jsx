import React from 'react'
import s from "./Footer.module.sass"
import Container from '../Container/Container'
import { IoLogoYoutube } from "react-icons/io5"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa"
import { BsInstagram } from "react-icons/bs"
import { FaYandexInternational } from "react-icons/fa6"

const Footer = () => {
  return (
    <footer className={s.rolex_footer}>
      <Container>
        <div className={s.footer_col}>

          <div className={s.brand}>
            <h4 className={s.logo}>WATCH</h4>
            <p className={s.copyright}>© 2007—2026 New Watch. All rights reserved.</p>
          </div>

          <nav className={s.footer_nav}>
            <Link className={s.link} to="/">Home</Link>
            <Link className={s.link} to="/sport">New Sport Watches</Link>
            <Link className={s.link} to="/classic">New Classic Watches</Link>
          </nav>

          <div className={s.socials}>
            <a href="#" className={s.iconLink} aria-label="YouTube"><IoLogoYoutube /></a>
            <a href="#" className={s.iconLink} aria-label="GitHub"><FaGithub /></a>
            <a href="#" className={s.iconLink} aria-label="Instagram"><BsInstagram /></a>
            <a href="#" className={s.iconLink} aria-label="Yandex"><FaYandexInternational /></a>
          </div>

        </div>
      </Container>
    </footer>
  )
}

export default Footer