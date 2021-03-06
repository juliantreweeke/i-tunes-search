function storageFactory(getStorage) {
    const isSupported = () => {
      try {
        const key = 'test_key';
        getStorage().setItem(key, key);
        getStorage().removeItem(key);
        return true;
      } catch (e) {
        return false;
      }
    };
  
    function getItem(name) {
      if (isSupported()) {
        return getStorage().getItem(name);
      }
      return null;
    }
  
    function removeItem(name) {
      if (isSupported()) {
        return getStorage().removeItem(name);
      }
      return null;
    }
  
    function setItem(name, value) {
      if (isSupported()) {
        return getStorage().setItem(name, value);
      }
      return null;
    }
  
    return {
      getItem,
      removeItem,
      setItem,
    };
  }
  
  export const sessionStore = storageFactory(() => sessionStorage);
  