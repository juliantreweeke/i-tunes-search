import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const cache = useRef({});
  
  const [fetchedData, setFetchedData] = useState([]);
  const [fetchLoading, setFetchLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  useEffect(() => {
    if (!url) {
      return;
    }

    async function fetchData() {
      setFetchLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setFetchedData(data);
        setFetchLoading(false);
      } catch (error) {
        setFetchError(error);
        setFetchLoading(false);
      }
    }

    if (cache.current[url]) {
      const data = cache.current[url];
      setFetchedData(data);
      setFetchLoading(false);
    } else {
        fetchData();
    }
  }, [url]);

  return { fetchError, fetchedData, fetchLoading };
};

export default useFetch;
