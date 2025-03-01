import { useCallback } from "react";

export default function useShowText() {
  const showText = useCallback((text: string) => {
    alert(text);
  }, []);

  return showText;
}
