import { motion } from 'framer-motion';
import parse from 'html-react-parser';
import { ChevronLeft, CircleEllipsis, PlusCircle, Send } from 'lucide-react';
import { FC, useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';

import styles from './Conversation.module.scss';

interface ConversationProps {}

interface Message {
  id: number;
  text: string;
}

const Conversation: FC<ConversationProps> = () => {
  const navigate = useNavigate();

  const [messages, setMessages] = useState<Message[] | null>(null);
  const mainRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    window.scrollTo({
      top: mainRef.current?.clientHeight,
    });
    document.documentElement.style.height = 'auto';

    return () => {
      document.documentElement.style.height = '100%';
    };
  }, [mainRef]);

  return (
    <motion.div
      className={styles['conversation__wrapper']}
      initial={{ x: '100%' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.1,
        },
      }}
      exit={{
        x: '100%',
        transition: {
          duration: 0.1,
        },
      }}
    >
      <header className={styles.header} style={{ flex: 0 }}>
        <Button variant="ghost" onClick={() => navigate('/messages')}>
          <ChevronLeft />
        </Button>
        <div className={styles['user']}>
          <img src="" alt="" className={styles['user-avatar']} />
          <div className={styles['user-info']}>
            <span className="subtitle-2">Marcus Sanchez</span>
            <span
              className="description-2"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '5px',
              }}
            >
              <div className={styles['user-status']}></div>
              Online
            </span>
          </div>
        </div>
      </header>

      <main className={styles.main} style={{ flex: 1 }} ref={mainRef}>
        <div className={`${styles.message__wrapper}`}>
          <div className={`${styles.message}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              15:30 PM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          <div className={`${styles.message} ${styles.own}`}>
            <span
              className={`description-2 ${styles['message-time']}`}
              style={{
                color: 'var(--gray-color)',
              }}
            >
              10:00 AM
            </span>
            <span className={`body-text-2 ${styles['message-blob']}`}>
              It is a long established fact that a reader will be distracted by
              the readable content...
            </span>
          </div>

          {messages?.map((message) => {
            return (
              <div
                className={`${styles.message} ${styles.own}`}
                key={message.id}
              >
                <span
                  className={`description-2 ${styles['message-time']}`}
                  style={{
                    color: 'var(--gray-color)',
                  }}
                >
                  10:00 AM
                </span>
                <span className={`body-text-2 ${styles['message-blob']}`}>
                  {parse(message.text)}
                </span>
              </div>
            );
          })}
        </div>
      </main>

      <div className={styles['send-message__wrapper']} style={{ flex: 0 }}>
        <Button variant="ghost">
          <PlusCircle
            size={18}
            strokeWidth={1.5}
            stroke="var(--accent-color)"
          />
        </Button>
        <div className={styles['send-message']} style={{ flex: 1 }}>
          <span
            className={styles['send-message-text']}
            contentEditable
            ref={textRef}
          ></span>
          <Button
            onClick={() => {
              if (!textRef.current?.innerHTML) return;

              setMessages((pv) => {
                return [
                  ...(pv ?? []),
                  {
                    id: Math.random(),
                    text: textRef.current?.innerHTML ?? '',
                  },
                ];
              });

              setTimeout(() => {
                window.scrollTo({
                  top: mainRef.current?.clientHeight,
                });
                if (textRef.current) {
                  textRef.current.innerHTML = '';
                }
              }, 0);
            }}
          >
            <Send size={18} strokeWidth={1.5} stroke="var(--white-color)" />
          </Button>
        </div>
        <Button variant="ghost">
          <CircleEllipsis
            size={18}
            strokeWidth={1.5}
            stroke="var(--accent-color)"
          />
        </Button>
      </div>
    </motion.div>
  );
};

export default Conversation;
