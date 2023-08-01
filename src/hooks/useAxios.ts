import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  CancelTokenSource,
} from "axios";
import { useState } from "react";

interface IState {
  loading: boolean;
  error: string;
  response: AxiosResponse | null;
  source: CancelTokenSource | null;
}

const useAxios = (axiosConfig?: AxiosRequestConfig) => {
  const [state, setState] = useState<IState>({
    loading: false,
    error: "",
    response: null,
    source: null,
  });

  const sendItBaby = async (requestConfig?: AxiosRequestConfig) => {
    const source = axios.CancelToken.source();
    setState({
      error: "",
      response: null,
      loading: true,
      source: source,
    });
    try {
      const response = await axios.request({
        ...axiosConfig,
        ...requestConfig,
        cancelToken: source.token,
      });
      setState({
        source: null,
        loading: false,
        response,
        error: "",
      });
    } catch (e) {
      console.error(e);
      setState({
        source: null,
        error: (e as Error).message,
        response: null,
        loading: false,
      });
    }
  };

  const ok = state.response?.status === 200;
  const success = ok && state.response?.data.message;

  return { sendItBaby, ok, success, ...state };
};

export default useAxios;
