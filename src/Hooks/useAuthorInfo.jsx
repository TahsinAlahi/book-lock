import { useEffect, useState } from "react";

function useAuthorInfo(authorKey) {
  const [authorInfo, setAuthorInfo] = useState();

  useEffect(() => {
    async function getAuthorInfo() {
      const res = await fetch(`https://openlibrary.org${authorKey}.json`);
      const data = await res.json();
      setAuthorInfo(data);
    }
    getAuthorInfo();
  }, []);

  return authorInfo;
}

export default useAuthorInfo;
