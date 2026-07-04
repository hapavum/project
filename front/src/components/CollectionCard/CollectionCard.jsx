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
          <img src="https://hips.hearstapps.com/hmg-prod/images/best-titanium-watches-67f507ce533dc.jpg" alt="Collection" />
          <div className={s.overlay}>
            <div className={s.title}>Collection</div>
          </div>
        </div>
      </div>

      {showMore && (
        <>
          <Link to="/sport" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src="https://media.wired.com/photos/698f8284d9a9634d320efa36/2:3/w_532,h_798,c_limit/Update-%20Best%20Apple%20Watch_.png" alt="Sport" />
              <div className={s.overlay}>
                <div className={s.title}>Sport</div>
              </div>
            </div>
          </Link>

          <Link to="/classic" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzefGwKmF41JxODAbsJz5pxWp9p31YNTOE1hjAlkk-JA&s=10" alt="Classic" />
              <div className={s.overlay}>
                <div className={s.title}>Classic</div>
              </div>
            </div>
          </Link>

          <Link to="/shop" className={`${s.card} ${s.fadeIn}`}>
            <div className={s.card_img}>
              <img src="https://swcusa.com/cdn/shop/files/Skeleton-10.jpg?v=1761959698&width=2400" alt="Shop" />
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