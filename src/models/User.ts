export interface User {
  id: number;
  phone: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  user_name: string;
  sessionid?: string;
  csrftoken?: string;
}

export interface SignUpUser {
  phone: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  patronymic: string;
  user_name: string;
}
