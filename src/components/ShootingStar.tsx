import { useEffect, useState, useRef } from 'react';
import './ShootingStar.css';

const ShootingStar = () => {
  const [stars, setStars] = useState<React.ReactNode[]>([]);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    const createStar = () => {
      const newStar = (
        <div
          key={Date.now()}
          className="shooting-star"
          style={{
            top: `${Math.random() * 100}vh`,
            left: `${Math.random() * 60 - 10}vw`, // Starts between -10vw and 50vw
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
      setStars(prevStars => [...prevStars.slice(-6), newStar]); // Keep max 7 stars
    };

    intervalRef.current = setInterval(createStar, 2500); // Create a new star every 2.5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div className="shooting-star-container">{stars}</div>;
};

export default ShootingStar;
