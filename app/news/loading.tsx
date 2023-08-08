import style from './index.module.css'

export default function Preloader() {
  return (
    <div className={style.preloader}>
     <div className={style.loader} />
    </div>
  )
}