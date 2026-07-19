import { useState, useEffect } from "react";

export function useBlink() {
  const [blink, setBlink] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 1000);
    return () => clearInterval(id);
  }, []);
  return blink;
}
