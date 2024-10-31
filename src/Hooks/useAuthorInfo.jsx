import { useEffect, useState } from "react";

function useAuthorInfo(authorKey) {
  const [authorInfo, setAuthorInfo] = useState({});

  useEffect(() => {
    async function getAuthorInfo() {
      try {
        const res = await fetch(`https://openlibrary.org${authorKey}.json`);
        const data = await res.json();

        setAuthorInfo(data);
      } catch (err) {
        console.log(err);
      }
    }
    getAuthorInfo();
  }, [authorKey]);

  return authorInfo;
}

export default useAuthorInfo;
