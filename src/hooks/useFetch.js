import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const cache = useRef({});
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (!url) {
      return;
    }

    async function fetchData() {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setLoading(false);
    }

    if (cache.current[url]) {
      const data = cache.current[url];
      setData(data);
      setLoading(false);
    } else {
        fetchData();
    }
  }, [url]);

  return { data, loading };
};

export default useFetch;
