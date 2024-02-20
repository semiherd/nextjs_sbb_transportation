'use client'

import { useEffect, useRef } from "react";

const useDebounce = (callback:(e: React.ChangeEvent<HTMLInputElement>) => void, delay:number) => {

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const debouncedCallback = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      callback(e);
    }, delay);
  }; 

  return debouncedCallback;
}

export { useDebounce }