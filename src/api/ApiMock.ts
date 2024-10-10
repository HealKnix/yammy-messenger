import axios from 'axios';
import Cookies from 'cookies-ts';

import { userList } from '@/models/mock/user';
import { SignUpUser, User } from '@/models/User';

import { ApiNames, ApiType } from './ApiType';

const cookies = new Cookies();

const DELAY = 1000; // Задержка 1 секунда
const DELAY_DIFF = 500;

// Возвращает переданные данные с заданной задержкой
async function delayRes<T>(data: T, delay: number): Promise<T> {
  await new Promise((res) => {
    setTimeout(res, Math.random() * (delay + DELAY_DIFF) + delay - DELAY_DIFF);
  });
  return data;
}

export class ApiMock implements ApiType {
  constructor() {
    console.log('mock api');
  }

  async signUp(form: SignUpUser) {
    const userId = userList.findIndex((user) => {
      return (
        user.email === form.email &&
        user.password === form.password &&
        user.phone === form.phone
      );
    });

    if (userList[userId]) return await delayRes(null, DELAY);

    const data = await delayRes<{
      sessionid: string;
      csrftoken: string;
      user: User;
    }>(
      {
        csrftoken: 'mockSignUp',
        sessionid: 'mockSignUp',
        user: {
          ...form,
          id: 999,
        },
      },
      DELAY,
    );

    cookies.set('csrftoken', data.csrftoken);
    cookies.set('sessionid', data.sessionid);

    return data;
  }

  async login(email: string, password: string) {
    const userId = userList.findIndex((user) => {
      return user.email === email && user.password === password;
    });

    if (!userList[userId]) return await delayRes(null, DELAY);

    const data = await delayRes(
      {
        csrftoken: userList[userId].csrftoken ?? 'mock',
        sessionid: userList[userId].sessionid ?? 'mock',
        user: userList[userId],
      },
      DELAY,
    );

    cookies.set('csrftoken', data.csrftoken);
    cookies.set('sessionid', data.sessionid);

    return data;
  }

  async logout() {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (userList[userId]) {
      cookies.remove('csrftoken');
      cookies.remove('sessionid');
    }
  }

  async auth() {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (!userList[userId]) return await delayRes(null, DELAY);

    const data = await delayRes(userList[userId], DELAY);

    return data;
  }

  async get<T>(apiName: ApiNames) {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (!userList[userId]) return await delayRes([], DELAY);

    const data = await delayRes([], DELAY);

    return data;
  }

  async getById<T>(apiName: ApiNames, id: number | null) {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (!userList[userId] || !id) return await delayRes(null, DELAY);

    const data = await delayRes(null, DELAY);

    return data;
  }

  async post<T>(apiName: ApiNames, dataBody: T) {
    const { data } = await axios.post<T>(`/api/v1/${apiName}/`, dataBody, {
      withCredentials: true,
      headers: {
        'X-CSRFToken': cookies.get('csrftoken'),
      },
    });

    return data;
  }

  async update<T>(apiName: ApiNames, id: number | null, dataBody: T) {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (!userList[userId] || !id) return await delayRes(null, DELAY);

    const data = await delayRes(null, DELAY);

    return data;
  }

  async delete<T>(apiName: ApiNames, id: number | null) {
    const userId = userList.findIndex((user) => {
      return (
        user.sessionid === cookies.get('sessionid') &&
        user.csrftoken === cookies.get('csrftoken')
      );
    });

    if (!userList[userId] || !id) return await delayRes(null, DELAY);

    const data = await delayRes(null, DELAY);

    return data;
  }
}
