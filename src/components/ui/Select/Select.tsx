import { ChevronDown } from 'lucide-react';
import { FC, InputHTMLAttributes, useEffect, useRef, useState } from 'react';

import styles from './Select.module.scss';

export interface RadioValue {
  id: number;
  value: string | number | readonly string[];
  label: string | number | readonly string[] | React.ReactNode;
}

interface SelectProps extends InputHTMLAttributes<HTMLInputElement> {
  customLabel?: string;
  icon?: {
    left?: React.ReactNode;
    right?: React.ReactNode;
  };
  options: RadioValue[];
}

const Select: FC<SelectProps> = ({ customLabel, options, icon, ...props }) => {
  const [show, setShow] = useState(false);

  const [inputName] = useState(Math.random().toString());

  const [selected, setSelected] = useState(
    props.value
      ? options.find((item) => item.value === props.value)
      : options[0],
  );

  const refSelect = useRef<HTMLButtonElement | null>(null);
  const refSelectMenu = useRef<HTMLDivElement | null>(null);

  const changeSelected = (newSelected: RadioValue) => setSelected(newSelected);

  useEffect(() => {
    const menuElement = refSelectMenu.current;
    const selectElement = refSelect.current;

    const onMouseDownHandler = (e: MouseEvent) => {
      if (!menuElement?.contains(e.target as HTMLElement)) {
        setShow(false);
        if (selectElement?.contains(e.target as HTMLElement) && show) {
          setShow(true);
        }
      }
    };

    const onKeyDownHandler = (e: KeyboardEvent) => {
      if ((e.key === 'Escape' || e.key === 'Tab' || e.key === ' ') && show) {
        setShow(false);
        selectElement?.focus();
      }
    };

    window.addEventListener('mouseup', onMouseDownHandler);
    window.addEventListener('keydown', onKeyDownHandler);
    return () => {
      window.removeEventListener('mouseup', onMouseDownHandler);
      window.removeEventListener('keydown', onKeyDownHandler);
    };
  }, [show]);

  return (
    <div className={styles['custom-select__wrapper']} style={props.style}>
      <button
        type="button"
        className={styles['custom-select']}
        onClick={() => setShow((pv) => !pv)}
        ref={refSelect}
      >
        <div className={styles['custom-select-content']}>
          {icon?.left}
          {customLabel ?? selected?.label}
          {icon?.right}
        </div>
        <ChevronDown
          size={10}
          className={`${styles.chevron} ${show ? styles.rotate : ''}`}
        />
      </button>
      {show && (
        <div className={`${styles['custom-select-menu__wrapper']}`}>
          <div className={styles['custom-select-menu']} ref={refSelectMenu}>
            {options.map((item, index) => (
              <label className={styles['custom-select-option']} key={item.id}>
                <input
                  autoFocus={item.id === selected?.id || index === 0}
                  className={styles['custom-select-option-input']}
                  type="radio"
                  name={inputName}
                  checked={item.id === selected?.id}
                  {...props}
                  value={item.value}
                  onChange={(e) => {
                    if (props.onChange) {
                      props.onChange(e);
                    }
                    changeSelected(item);
                  }}
                />
                <span className={styles['custom-select-option-content']}>
                  {item.label}
                </span>
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Select;
