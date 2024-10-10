import { Ellipsis, Heart, MessageCircle, Share } from 'lucide-react';
import { FC } from 'react';

import Button from '../Button/Button';
import styles from './Post.module.scss';

interface PostProps {}

const Post: FC<PostProps> = () => {
  return (
    <div className={styles['post']}>
      <div className={styles['post-header']}>
        <div className={styles['post-header-user']}>
          <img src="" alt="" className={styles['post-header-user-avatar']} />
          <div className={styles['post-header-user-info']}>
            <span className="subtitle-2">Marcus Sanchez</span>
            <span className="description-2">15 mins ago</span>
          </div>
        </div>
        <Button variant="ghost" small>
          <Ellipsis size={16} stroke="var(--accent-color)" />
        </Button>
      </div>

      <img src="" alt="" className={styles['post-img']} />

      <span className={`description-1 ${styles['post-description']}`}>
        It is a long established fact that a reader will be distracted by the
        readable content...
      </span>

      <div className={styles['post-functional']}>
        <div className={styles['post-functional-like-comment']}>
          <Button
            className={`${styles['post-like-btn']}`}
            variant="ghost"
            small
            onClick={(e) => {
              e.currentTarget.classList.toggle(styles.liked);

              if (e.currentTarget.classList.contains(styles.liked)) {
                e.currentTarget.children[1].textContent = `${parseInt(e.currentTarget.children[1].textContent ?? '') + 1}`;
              } else {
                e.currentTarget.children[1].textContent = `${parseInt(e.currentTarget.children[1].textContent ?? '') - 1}`;
              }
            }}
          >
            <Heart size={18} />
            <span className="description-1">128</span>
          </Button>

          <Button variant="ghost" small>
            <MessageCircle stroke="var(--accent-color)" size={18} />
            <span className="description-1">58</span>
          </Button>
        </div>

        <Button variant="ghost" small>
          <Share stroke="var(--accent-color)" size={18} />
        </Button>
      </div>
    </div>
  );
};

export default Post;
