import { CarouselSlideProps } from '../../../../types';
import styles from './CarouselSlide.module.scss';

export const CarouselSlide = ({
  src,
  title,
  button,
  alt,
  direction,
}: CarouselSlideProps) => {
  const slideDirection = direction === 'left' ? 'row' : 'row-reverse';

  return (
    <div
      className={styles.container}
      style={{ flexDirection: `${slideDirection}` }}
    >
      <div className={styles.left}>
        <div className={styles.leftContent}>
          <h2 className={styles.title}>{title}</h2>
          <button className={styles.button}>
            {button.toLocaleUpperCase()}
          </button>
        </div>
      </div>
      <div className={styles.right}>
        <img src={src} alt={alt} className={styles.img} />
      </div>
    </div>
  );
};
