import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { type ISourceOptions } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";

const CosmicCanvas = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options: ISourceOptions = useMemo(
    () => ({
      autoPlay: true,
      background: {
        color: {
          value: "#0a0a1a",
        },
        image: `radial-gradient(ellipse at 70% 20%, hsla(280, 40%, 30%, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 30% 80%, hsla(220, 45%, 30%, 0.6) 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, hsla(50, 50%, 20%, 0.4) 0%, transparent 70%)`,
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
      },
      fullScreen: {
        enable: true,
        zIndex: -1,
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "bubble",
          },
          onScroll: {
            enable: true,
            mode: "parallax",
          },
        },
        modes: {
          bubble: {
            distance: 200,
            size: 2.5,
            duration: 2,
            opacity: 1,
          },
          parallax: {
            enable: true,
            force: 5, // Increased force for a more noticeable effect
            smooth: 10,
          },
        },
      },
      particles: {
        color: {
          value: ["#ffffff", "#ffc371"],
        },
        links: {
          enable: false,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: "out",
          random: true,
          speed: 0.4, // Slightly increased speed
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 400, // Increased particle count
        },
        opacity: {
          value: { min: 0.1, max: 0.8 }, // Increased max opacity
          animation: {
            enable: true,
            speed: 2, // Increased speed for a stronger pulse
            sync: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 0.5, max: 2 }, // Increased max size
        },
        twinkle: {
          particles: {
            enable: true,
            frequency: 0.01, // Increased frequency for more twinkling
            opacity: 1,
          },
        },
      },
      pauseOnOutsideViewport: true,
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: {
                value: 200, // Reduced for mobile
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: false,
                },
              },
            },
          },
        },
      ],
    }),
    [],
  );

  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
      />
    );
  }

  return null;
};

export default CosmicCanvas;
