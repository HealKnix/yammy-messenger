import { Search as SearchLucide } from 'lucide-react';
import { FC, InputHTMLAttributes } from 'react';

import styles from './Search.module.scss';

interface SearchProps extends InputHTMLAttributes<HTMLInputElement> {}

const Search: FC<SearchProps> = (props) => {
  return (
    <label className={styles['custom-label']}>
      <div className={styles['custom-input-wrapper']}>
        <div className={`${styles['divider-content']} ${styles.left}`}>
          <SearchLucide />
        </div>
        <input type="search" className={styles['custom-input']} {...props} />
      </div>
    </label>
  );
};

export default Search;
