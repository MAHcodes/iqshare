import axios, { AxiosRequestConfig } from "axios";
import { useState } from "react";

const useAxios = (config: AxiosRequestConfig) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState(null);

  const sendItBaby = async () => {
    const source = axios.CancelToken.source();
    setLoading(true);
    try {
      const response = await axios.request({
        cancelToken: source.token,
        method: "GET",
        baseURL: "https:localhost:5001",
        headers: {
          Accept: "text/plain",
          "Content-Type": "application/json",
        },
        ...config,
      });
      setData(response?.data);
      setError("");
    } catch (e) {
      console.error(e);
      setError((e as Error).message);
      setData(null);
    } finally {
      setLoading(false);
    }
    return source.cancel;
  };

  return { loading, error, data, sendItBaby };
};

export default useAxios;
