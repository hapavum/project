import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../../app/favoritesSlice';
import s from './Favorites.module.sass';
import Container from '../Container/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Favorites = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);

  return (
    <>
      <Header />
      <div className={s.main}>
        <Container>
          <h2 className={s.pageTitle}>im havanac jamacuycery</h2>
          
          {favoriteItems.length === 0 ? (
            <div className={s.emptyMessage}>
              <p>der havanacneri canky datark e🤍</p>
            </div>
          ) : (
            <div className={s.cardContainer}>
              {favoriteItems.map((product) => (
                <div key={product.id} className={s.card}>
                  <div className={s.card_img}>
                    <img src={product.imgUrl} alt={product.title} />
                    
                    <button 
                      className={s.heartBtn} 
                      onClick={() => dispatch(toggleFavorite(product))}
                    >
                      ❤️
                    </button>
                  </div>
                  <div className={s.img_title}>
                    <div className={s.title}>{product.title}</div>
                    <div className={s.price}>${Number(product.price).toLocaleString()}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Favorites;