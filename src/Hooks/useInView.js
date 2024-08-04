import { useEffect, useState } from 'react';

const useInView = (options) => {
  const [isInView, setIsInView] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (ref) {
      const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        options
      );

      observer.observe(ref);

      return () => {
        if (ref) {
          observer.unobserve(ref);
        }
      };
    }
  }, [ref, options]);

  return [setRef, isInView];
};

export default useInView;