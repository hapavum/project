import React from 'react';
import s from './SportImg.module.sass';

const SportImg = () => {
  return (
    <div className={s.section}>
      <h1 className={s.title}>New Sport Watch</h1>
      <div className={s.wrap}>
        <div className={s.img}>
          <img src="https://www.apple.com/newsroom/images/2023/09/apple-introduces-the-advanced-new-apple-watch-series-9/article/Apple-Watch-S9-hero-230912_Full-Bleed-Image.jpg.large.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default SportImg;

