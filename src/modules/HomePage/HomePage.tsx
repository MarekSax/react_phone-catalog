import styles from './HomePage.module.scss';
import { useVisuallyHidden } from 'react-aria';
import { Carousel } from './components/Carousel';

export const HomePage = () => {
  const { visuallyHiddenProps } = useVisuallyHidden();

  return (
    <main>
      <h1 {...visuallyHiddenProps}>Product Catalog</h1>
      <div className={styles.container}>
        <h1 className={styles.title}>Welcome to Nice Gadgets store!</h1>
      </div>
      <Carousel />
    </main>
  );
};
