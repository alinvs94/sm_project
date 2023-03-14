import axios from "axios";
import { useEffect, useState } from "react";

export function useAxios(link) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(link).then((response) => {
      setData((prevState) => {
        return (prevState = response.data);
      });
    });
  }, [link]);

  return data;
}
