import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 
import s from "./CollectionCard.module.sass";
import WATCH from "../../assets/img/WATCH.png"

const CollectionCard = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className={s.container}>
      <div className={s.card} onClick={() => setShowMore(true)}>
        <div className={s.card_img}>
          <img src={WATCH} alt="Collection" />
          <div className={s.overlay}>
            <div className={s.title}>Collection</div>
          </div>
        </div>
      </div>

      {showMore && (
        <>
          <Link to="/sport" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src={WATCH} alt="Sport" />
              <div className={s.overlay}>
                <div className={s.title}>Sport</div>
              </div>
            </div>
          </Link>

          <Link to="/classic" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src={WATCH} alt="Classic" />
              <div className={s.overlay}>
                <div className={s.title}>Classic</div>
              </div>
            </div>
          </Link>

          <Link to="/shop" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src={WATCH} alt="Shop" />
              <div className={s.overlay}>
                <div className={s.title}>Watchs Shop</div>
              </div>
            </div>
          </Link>
        </>
      )}
    </div>
  );
};

export default CollectionCard;