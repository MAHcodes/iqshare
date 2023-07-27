import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { useState } from "react";
import { DEFAULT_CONFIG } from "../config/axios";

interface IState {
  loading: boolean;
  error: string;
  response: AxiosResponse | null;
}

const useAxios = (config: AxiosRequestConfig) => {
  const [state, setState] = useState<IState>({
    loading: false,
    error: "",
    response: null,
  });

  const sendItBaby = async (data?: unknown) => {
    const source = axios.CancelToken.source();
    setState({
      error: "",
      response: null,
      loading: true,
    });
    try {
      const response = await axios.request({
        ...DEFAULT_CONFIG,
        data,
        ...config,
        cancelToken: source.token,
      });
      setState({
        loading: false,
        response,
        error: "",
      });
    } catch (e) {
      console.error(e);
      setState({
        error: (e as Error).message,
        response: null,
        loading: false,
      });
    }
    return source.cancel;
  };

  return { sendItBaby, ...state };
};

export default useAxios;
