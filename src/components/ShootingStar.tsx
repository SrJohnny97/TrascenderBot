import { useEffect, useState, useRef } => 'react';
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
            left: `-400px`, // Start off-screen
            animationDuration: `${Math.random() * 3 + 2}s`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
      setStars(prevStars => [...prevStars.slice(-19), newStar]); // Keep max 20 stars
    };

    intervalRef.current = setInterval(createStar, 500); // Create a new star every 0.5 seconds

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  return <div className="shooting-star-container">{stars}</div>;
};

export default ShootingStar;
