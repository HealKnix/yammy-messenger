import '/node_modules/flag-icons/css/flag-icons.min.css';

import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, KeyRound, Mail } from 'lucide-react';
import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '@/api';
import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input/Input';
import Select from '@/components/ui/Select/Select';
import { useAuthStore } from '@/store/useAuthStore';
import { codeByCountry } from '@/utils/countries';

import styles from './SignUp.module.scss';

interface CountryCode {
  id: number;
  name: string;
  code: string;
  phoneCode: string;
}
const countries: CountryCode[] = [
  {
    id: 0,
    name: 'Россия',
    code: codeByCountry['Russian Federation'],
    phoneCode: '+7',
  },
  {
    id: 1,
    name: 'Вьетнам',
    code: codeByCountry['Vietnam'],
    phoneCode: '+84',
  },
  {
    id: 2,
    name: 'США',
    code: codeByCountry['United States'],
    phoneCode: '+1',
  },
  {
    id: 3,
    name: 'Болгария',
    code: codeByCountry['Bulgaria'],
    phoneCode: '+359',
  },
  {
    id: 4,
    name: 'Беларусь',
    code: codeByCountry['Belarus'],
    phoneCode: '+375',
  },
  {
    id: 5,
    name: 'Австралия',
    code: codeByCountry['Australia'],
    phoneCode: '+61',
  },
  {
    id: 6,
    name: 'Великобритания',
    code: codeByCountry['United Kingdom of Great Britain and Northern Ireland'],
    phoneCode: '+44',
  },
];

interface SignUpForm {
  phoneCode: string;
  phone: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  patronymic: string;
  userName: string;
}

const SignUp: FC = () => {
  const [page, setPage] = useState(1);

  const [form, setForm] = useState<SignUpForm>({
    phoneCode: '+7',
    phone: '',
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    patronymic: '',
    userName: '',
  });

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((pv) => ({
      ...pv,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      {page === 1 && (
        <SignUpPagePhone
          form={form}
          handleForm={handleForm}
          setPage={setPage}
        />
      )}
      {page === 2 && (
        <SignUpPageContacts
          form={form}
          handleForm={handleForm}
          setPage={setPage}
        />
      )}
      {page === 3 && (
        <SignUpPageInfo form={form} handleForm={handleForm} setPage={setPage} />
      )}
    </>
  );
};

export default SignUp;

interface SignUpPageProps {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  form: SignUpForm;
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SignUpPagePhone: FC<SignUpPageProps> = ({
  setPage,
  form,
  handleForm,
}) => {
  const navigate = useNavigate();
  return (
    <motion.div
      className={styles['sign-up-wrapper']}
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
      <div className={styles.header}>
        <Button variant="ghost" small onClick={() => navigate('/')}>
          <ChevronLeft width={18} />
        </Button>
      </div>

      <h4>Enter your phone number for this device</h4>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(2);
        }}
        className={styles['form']}
      >
        <Select
          value={form.phoneCode}
          style={{
            maxWidth: 'fit-content',
          }}
          name="phoneCode"
          options={countries
            .sort((a, b) => a.name.localeCompare(b.name))
            .map((country) => ({
              id: country.id,
              value: country.phoneCode,
              label: (
                <>
                  <span className={`fi fi-${country.code}`}></span>
                  {country.name}
                </>
              ),
            }))}
          onChange={handleForm}
        />

        <Input
          maxLength={10}
          label={{
            left: form.phoneCode,
          }}
          required
          value={form.phone}
          name="phone"
          onChange={handleForm}
          placeholder="Your phone number"
          type="tel"
        />

        {form.phone &&
          /([0-9]{3})([0-9]{3})([0-9]{2})([0-9]{2})/g.exec(form.phone) && (
            <div className={styles['btn-next']}>
              <Button type="submit">
                <ArrowRight />
              </Button>
            </div>
          )}
      </form>
    </motion.div>
  );
};

const SignUpPageContacts: FC<SignUpPageProps> = ({
  form,
  handleForm,
  setPage,
}) => {
  return (
    <motion.div
      className={styles['sign-up-wrapper']}
      initial={{ x: '100%' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.15,
        },
      }}
      exit={{
        x: '100%',
        transition: {
          duration: 0.15,
        },
      }}
    >
      <div className={styles.header}>
        <Button variant="ghost" small onClick={() => setPage(1)}>
          <ChevronLeft width={18} />
        </Button>
      </div>

      <h4>Enter contact details</h4>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPage(3);
        }}
        className={styles['form']}
      >
        <Input
          type="email"
          label={{
            left: <Mail size={14} />,
          }}
          value={form.email}
          name="email"
          required
          placeholder="www.example@gmail.com"
          onInput={handleForm}
        />
        <Input
          type="password"
          label={{
            left: <KeyRound size={14} />,
          }}
          value={form.password}
          name="password"
          required
          placeholder="********"
          onInput={handleForm}
        />

        {form.email && form.password && (
          <div className={styles['btn-next']}>
            <Button type="submit">
              <ArrowRight />
            </Button>
          </div>
        )}
      </form>
    </motion.div>
  );
};

const SignUpPageInfo: FC<SignUpPageProps> = ({ form, handleForm, setPage }) => {
  const authStore = useAuthStore();

  return (
    <motion.div
      className={styles['sign-up-wrapper']}
      initial={{ x: '100%' }}
      animate={{
        x: 0,
        transition: {
          duration: 0.15,
        },
      }}
      exit={{
        x: '100%',
        transition: {
          duration: 0.15,
        },
      }}
    >
      <div className={styles.header}>
        <Button variant="ghost" small onClick={() => setPage(2)}>
          <ChevronLeft width={18} />
        </Button>
      </div>

      <h4>Enter your info</h4>

      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const userData = await api.signUp({
            phone: form.phoneCode + form.phone,
            email: form.email,
            password: form.password,
            first_name: form.firstName,
            last_name: form.lastName,
            patronymic: form.patronymic,
            user_name: form.userName,
          });

          if (userData) {
            authStore.setUser(userData.user);
          }
        }}
        className={styles['form']}
      >
        <Input
          label={{
            left: 'First name',
          }}
          value={form.firstName}
          name="firstName"
          required
          placeholder="John"
          onChange={handleForm}
        />
        <Input
          label={{
            left: 'Last name',
          }}
          value={form.lastName}
          name="lastName"
          required
          placeholder="Doe"
          onChange={handleForm}
        />
        <Input
          label={{
            left: 'Patronymic',
          }}
          value={form.patronymic}
          name="patronymic"
          required
          placeholder="Doevich"
          onChange={handleForm}
        />
        <Input
          label={{
            left: 'User name',
          }}
          value={form.userName}
          name="userName"
          required
          placeholder="johndoe"
          onChange={handleForm}
        />

        {
          <div className={styles['btn-next']}>
            <Button type="submit">
              <ArrowRight />
            </Button>
          </div>
        }
      </form>
    </motion.div>
  );
};
