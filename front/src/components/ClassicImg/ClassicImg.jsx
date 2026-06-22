import React from 'react'
import s from "./ClassicImg.module.sass"


const ClassicImg = () => {
  return (
    <section className={s.section}>
        <div className={s.title}>New Classic Watchs</div>
            <div className={s.item}>
                <div className={s.imgclassic}>
                     <img src="https://media.rolex.com/image/upload/q_auto:eco/f_auto/c_limit,w_1920/v1711364922/rolexcom/collection/family-pages/classic-watches/1908/landing/videos/cover/classic-watches-1908-cover-autoplay-posterframe" alt="" />
                </div>
            </div>
    </section>
  )
}

export default ClassicImg