import axios from 'axios'
import {createAuthProvider} from "./auth";

const apiURL  = process.env.API_URL || 'http://localhost:3000/api/'

export const ax = axios.create({
  baseURL: apiURL
})

export const {useAuth, authGet, authPost, login, logout} = createAuthProvider(ax);


export const signIn = (email, password) => ax.post(
  'auth/sign-in',
  {email, password});

export const signUp = user => ax.post(
  'auth/sign-up',
  user
);