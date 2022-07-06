import { useEffect, useRef, useState } from 'react';
import type from 'lottie-web';

export const Animation = ({ style }) => {
  const ref = useRef(null);
  const [lottie, setLottie] = useState(null);

  useEffect(() => {
    import('lottie-web').then((Lottie) => setLottie(Lottie.default));
  }, []);

  useEffect(() => {
    if (lottie && ref.current) {
      const animation = lottie.loadAnimation({
        container: ref.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        // path to your animation file, place it inside public folder
        path: '/morphing-furniture.json',
      });

      return () => animation.destroy();
    }
  }, [lottie]);

  return <div style={style} ref={ref} />;
};
