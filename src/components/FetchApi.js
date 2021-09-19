import React, { useState, useEffect } from "react";

function FetchApi() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // you have to change the link to the link of the API you are fetching
      const res = await fetch(
        "https://hn.algolia.com/api/v1/search?query=react"
      );
      const json = await res.json();
      setData(json.hits);
    };
    fetchData();
  }, [setData]);

  return (
    <ul>
      {data.map((item) => (
        <li key={item.ObjectId}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
    </ul>
  );
}

export default FetchApi;
