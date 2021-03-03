const fetchMethod = method => async ({ body, uri }) => {
    const requestOptions = {
      method,
      ...((method === "POST" || "PATCH") &&
        body && { body: JSON.stringify(body) }),
      headers: {
        "Content-Type": "application/json"
      }
    };
  
    try {
      const fetchResponse = await fetch(uri, requestOptions);
      const data = await fetchResponse.json();
      return data;
    } catch (e) {
      return e;
    }
  };
  
  export const fetchGet = fetchMethod("GET");