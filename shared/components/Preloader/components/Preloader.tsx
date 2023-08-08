'use client';
import style from '../styles/Preloader.module.css';

export const Preloader=()=> {
  return (
    <div className={style.preloader}>
     <div className={style.loader} />
    </div>
  )
}