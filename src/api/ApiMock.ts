import axios from 'axios';
import Cookies from 'cookies-ts';

import { SignUpUser, User } from '@/models/User';

import { ApiNames, ApiType } from './ApiType';

const cookies = new Cookies();

const DELAY = 1000; // Задержка 1 секунда
const DELAY_DIFF = 500;

// Возвращает переданные данные с заданной задержкой
async function delayRes<T>(data: T): Promise<T> {
  await new Promise((res) => {
    setTimeout(res, Math.random() * (DELAY + DELAY_DIFF) + DELAY - DELAY_DIFF);
  });
  return data;
}

export class ApiMock implements ApiType {
  constructor() {
    console.log('mock api');
  }

  async signUp(form: SignUpUser) {
    const { data: users } = await axios.get<User[]>('users');

    const { data } = await axios
      .post<User>('users', {
        id: users.length + 1,
        sessionid: `mock${users.length + 1}`,
        csrftoken: `mock${users.length + 1}`,
        ...form,
      })
      .then((res) => {
        if (res.data) {
          cookies.set('sessionid', res.data.sessionid);
          cookies.set('csrftoken', res.data.csrftoken);
        }

        return res;
      });

    return delayRes(data);
  }

  async login(email: string, password: string) {
    const { data } = await axios
      .get<User[]>(`users?email=${email}&password=${password}`)
      .then((res) => {
        if (res.data[0]) {
          console.log(res);

          cookies.set('csrftoken', res.data[0].csrftoken);
          cookies.set('sessionid', res.data[0].sessionid);
        }

        return res;
      });

    return delayRes(data[0]);
  }

  async logout() {
    await axios
      .get<
        User[]
      >(`users?csrftoken=${cookies.get('csrftoken')}&sessionid=${cookies.get('sessionid')}`)
      .then((res) => {
        if (res.data[0]) {
          cookies.remove('csrftoken');
          cookies.remove('sessionid');
        }
      });
  }

  async auth() {
    const { data } = await axios
      .get<
        User[]
      >(`users?csrftoken=${cookies.get('csrftoken')}&sessionid=${cookies.get('sessionid')}`)
      .then((res) => {
        if (!res.data[0]) {
          cookies.remove('csrftoken');
          cookies.remove('sessionid');
        }

        return res;
      });

    return delayRes(data[0]);
  }

  async get<T>(apiName: ApiNames) {
    const { data } = await axios.get<T[]>(apiName);

    return delayRes(data);
  }

  async getById<T>(apiName: ApiNames, id: number | null) {
    const { data } = await axios.get<T>(`${apiName}/${id}`);

    return delayRes(data);
  }

  async post<T>(apiName: ApiNames, dataBody: T) {
    const { data } = await axios.post<T>(apiName, dataBody);

    return delayRes(data);
  }

  async update<T>(apiName: ApiNames, id: number | null, dataBody: T) {
    const { data } = await axios.patch<T>(`${apiName}/${id}`, dataBody);

    return delayRes(data);
  }

  async delete<T>(apiName: ApiNames, id: number | null) {
    const { data } = await axios.delete<T>(`${apiName}/${id}`);

    return delayRes(data);
  }
}
