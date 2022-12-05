import {useEffect, useState} from "react";

const createTokenProvider = (tokenStorageKey) => {

  const storageKey = tokenStorageKey || 'LNU_EVENTS_TOKEN'

    let _token = localStorage.getItem(storageKey) || null;

    const getToken = () => _token;

    const isLoggedIn = () => !!_token;

    let observers = [];

    const subscribe = observer => observers.push(observer);

    const unsubscribe = observer => {
      observers = observers.filter(o => o !== observer);
    }

    const notify = () => {
      const isLogged = isLoggedIn();
      observers.forEach(o => o(isLogged));
    }

    const setToken = token => {
      if (token) {
          localStorage.setItem(storageKey, token);
      } else {
          localStorage.removeItem(storageKey);
      }
      _token = token;
      notify();
  };

    return {
        getToken,
        isLoggedIn,
        setToken,
        subscribe,
        unsubscribe,
    };
};

export const createAuthProvider = (axiosInstance, tokenStorageKey) => {

  const tokenProvider = createTokenProvider(tokenStorageKey);

  const login = (newTokens) => {
    tokenProvider.setToken(newTokens);
  };

  const logout = () => {
    tokenProvider.setToken(null);
  };

  const authGet = async (url, config)=> {
    const token = tokenProvider.getToken();

    config = config || {};

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    };

    return axiosInstance(url, config);
  };

  const authPost = async (url, data, config) => {
    const token = tokenProvider.getToken();

    config = config || {};

    config.headers = {
        ...config.headers,
        Authorization: `Bearer ${token}`,
    };

    return axiosInstance.post(url, data, config)
  };

  const useAuth = () => {
    const [isLogged, setIsLogged] = useState(tokenProvider.isLoggedIn());

    useEffect(() => {
        const listener = (newIsLogged) => {
            setIsLogged(newIsLogged);
        };

        tokenProvider.subscribe(listener);
        return () => {
            tokenProvider.unsubscribe(listener);
        };
    }, []);

    return [isLogged];
  };

  return {
    useAuth,
    authGet,
    authPost,
    login,
    logout
  }
};
