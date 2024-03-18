import { useState, useEffect } from 'react';

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`Api-Call`)
      .then(res => res.json())
      .then(res => setData(res[currency]))
      .catch(error => console.error('Error fetching data:', error));

  }, [currency]);

  return data;
}

export default useCurrencyInfo;
