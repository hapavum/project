import React from 'react'
import s from "./Hero.module.sass"
import Container from "../Container/Container"
import video from "../../assets/myVideos/video.mp4"

const Hero = () => {
  return (
    <main className={s.hero_main}>
        <section className={s.hero}>
                    <div className={s.videos}>
                <video src={video} autoPlay loop muted playsInline></video>
                </div> 
        <Container>
            <div className={s.hero_wrap}>
              <div className={s.hero_item}>
                <div className={s.hero_title}>
                    <h3 className={s.title}>Where a new world begins</h3>
                    <h1 className={s.title_2}>New watches 2026</h1>
                </div>
                </div>
            </div>
            </Container> 
        </section>
    </main>
  )
}

export default Hero