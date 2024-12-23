import { useRef } from 'react'
import './App.css'
import {
  motion,
  useScroll,
  useTransform,
  MotionValue
} from "framer-motion";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [0, distance]);
}

function App() {

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const layerHeaderY = useParallax(scrollYProgress, 430);
  const baseLayerY = useParallax(scrollYProgress, 540);
  const middleLayerY = useParallax(scrollYProgress, 350);
  const frontLayerY = useParallax(scrollYProgress, 150);
  const mainArticleY = useParallax(scrollYProgress, 115);

  return (
    <div className="wrapper" ref={ref}>
        <div className="content">

          <header className="main-header">
            <div className="layers">
              <motion.div className="layer__header" style={{ y: layerHeaderY }}>
                <div className="layers__caption">Здарова заебал</div>
                <div className="layers__title">Пералакс</div>
              </motion.div>
              <motion.div className="layer layers__base" style={{ y: baseLayerY }}></motion.div>
              <motion.div className="layer layers__middle" style={{ y: middleLayerY }}></motion.div>
              <motion.div className="layer layers__front" style={{ y: frontLayerY }}></motion.div>
            </div>
          </header>

          <motion.article className="main-article" style={{ y: mainArticleY }}>
            <div className="main-article__content">
              <h2 className="main-article__header">ОЛЕГ!!!</h2>
              <p className="main-article__paragraph">Давай норм картинку подберем и тут дальше длинный такой текст как ты любишь: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis error provident dignissimos facere. Repellendus tempore autem qui! Quia magnam tempora esse id necessitatibus corrupti mollitia expedita sapiente cum rerum, ut dicta laboriosam!</p>
              <p className="main-article__paragraph">А и еще скролл доработаю и удалю этот текст</p>
            </div>
          </motion.article>
        </div>
    </div>
  )
}

export default App
