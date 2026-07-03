import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFavorite } from '../../app/favoritesSlice';
import { FaHeart } from "react-icons/fa";
import { IoHeart, IoHeartOutline } from "react-icons/io5"; 
import s from "./Wshop.module.sass"; 
import Container from '../Container/Container';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Wshop = () => {
  const dispatch = useDispatch();
  const favoriteItems = useSelector((state) => state.favorites.items);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/products/')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching shop products:", err));
  }, []);

  return (
    <>
      <Header />
      <div className={s.main}>
        <Container>
          <h2 className={s.pageTitle}>Our Luxury Watch Collection</h2>
          
          <div className={s.cardContainer}>
            {products.map((product) => {
              const isFavorite = favoriteItems.some(item => item.id === product.id);

              return (
                <div key={product.id} className={s.card}>
                  <div className={s.card_img}>
                    <img src={product.imgUrl} alt={product.title} />

                    
                    <button
                      className={`${s.heartBtn} ${isFavorite ? s.active : ''}`}
                      onClick={() => dispatch(toggleFavorite(product))}
                    >

                      {isFavorite ? <IoHeart className={s.filledHeart} /> : <IoHeartOutline />}
                    </button>
                  </div>
                  <div className={s.img_title}>
                    <div className={s.title}>{product.title}</div>
                    <div className={s.price}>${Number(product.price).toLocaleString()}</div>
                    <div className={s.categoryTag}>{product.category}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </div>
      <Footer />
    </>
  );
};

export default Wshop;