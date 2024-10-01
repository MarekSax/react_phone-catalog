import styles from './Carousel.module.scss';
import { CarouselPicturesMap } from '../../constants';
import { useCallback, useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import cn from 'classnames';
import { CarouselSlide } from '../CarouselSlide';

export const Carousel = () => {
  const [currentIdex, setCurrentIndex] = useState(0);
  const [previousIndex, setPreviousIndex] = useState(-1);

  const handleNext = useCallback(() => {
    setPreviousIndex(currentIdex);
    setCurrentIndex(prevIndex =>
      prevIndex === CarouselPicturesMap.length - 1 ? 0 : prevIndex + 1,
    );
  }, [currentIdex]);

  const handlePrev = () => {
    setPreviousIndex(currentIdex);
    setCurrentIndex(prevIndex =>
      prevIndex === 0 ? CarouselPicturesMap.length - 1 : prevIndex - 1,
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
  });

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIdex, handleNext]);

  return (
    <div className={styles.container}>
      <button
        className={`${styles.button} ${styles.buttonLeft}`}
        onClick={handlePrev}
      >
        <img src="/img/icons/chevron-left.svg" alt="" />
      </button>
      <div className={styles.slidesContainer}>
        <div
          {...handlers}
          className={styles.slides}
          style={{
            transform: `translateX(calc((${currentIdex * 100}% + ${currentIdex} * var(--gap)) * -1))`,
          }}
        >
          {CarouselPicturesMap.map((item, index) =>
            index % 2 === 0 ? (
              <CarouselSlide
                key={item.id}
                src={item.src}
                title={item.title}
                button={item.button}
                alt={item.alt}
                direction="left"
              />
            ) : (
              <CarouselSlide
                key={item.id}
                src={item.src}
                title={item.title}
                button={item.button}
                alt={item.alt}
                direction="right"
              />
            ),
          )}
        </div>
      </div>
      <button
        className={`${styles.button} ${styles.buttonRight}`}
        onClick={handleNext}
      >
        <img src="/img/icons/chevron-right.svg" alt="" />
      </button>
      <div className={styles.dotsWrapper}>
        {CarouselPicturesMap.map((item, index) => (
          <button
            key={item.id}
            className={styles.dot}
            onClick={() => {
              setPreviousIndex(currentIdex);
              setCurrentIndex(index);
            }}
            disabled={index === currentIdex}
          >
            <div
              className={cn(styles.dotInside, {
                [styles.dotActiveLeft]:
                  index === currentIdex && previousIndex < currentIdex,
                [styles.dotActiveRight]:
                  index === currentIdex && previousIndex > currentIdex,
                [styles.dotExitLeft]:
                  previousIndex === index && currentIdex < index,
                [styles.dotExitRight]:
                  previousIndex === index && currentIdex > index,
              })}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
