import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";
import React, { useCallback } from "react";


const ParticlesContainer = () => {
  // init
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => { }, []);

  return <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded}
    className="w-full h-full absolute translate-z-0"
    options={{

      // fullScreen: {enabled: false},
      // background: {
      //   color: {
      //     value: ""
      //   }
      // },
      // fpsLimit: 120,
      // interactivity: {
      //   events: {
      //     onClick: {
      //       enable: false,
      //       mode: "push"
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: "repulse"
      //     },
      //     resize : true
      //   },
      //   modes: {
      //     push: {
      //       quantity: 90
      //     },
      //     repulse: {
      //       distance: 200,
      //       duration: 0.4
      //     }
      //   }
      // },
      // particles: {
      //   color: {
      //     value: "#e68e2e"
      //   },
      //   links: {
      //     color: "#f5d393",
      //     distance: 150,
      //     enable: true,
      //     opacity: 0.5,
      //     width: 1
      //   },
      //   collisions: {
      //     enable: true
      //   },
      //   move: {
      //     direction: "none",
      //     enabled: true,
      //     outModes: {
      //       default: "bounce"
      //     },
      //     random: false,
      //     speed: 1,
      //     straight: false
      //   },
      //   number: {
      //     density: {
      //       enabled: true,
      //       area: 800
      //     },
      //     value: 80
      //   },
      //   opacity: {
      //     value: 0.5
      //   },
      //   shape: {
      //     type: "circle"
      //   },
      //   size: {
      //     value: {min: 1, max: 5}
      //   }
      // },
      // detectRetina: true

      
      // added from https://github.com/
      "particles": {
        "number": {
          "value": 160,
          "density": {
            "enable": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "speed": 4,
            "size_min": 0.3
          }
        },
        "line_linked": {
          "enable": false
        },
        "move": {
          "random": true,
          "speed": 1,
          "direction": "top",
          "out_mode": "out"
        }
      },
      "interactivity": {
        "events": {
          "onhover": {
            "enable": true,
            "mode": "bubble"
          },
          "onclick": {
            "enable": true,
            "mode": "repulse"
          }
        },
        "modes": {
          "bubble": {
            "distance": 250,
            "duration": 2,
            "size": 0,
            "opacity": 0
          },
          "repulse": {
            "distance": 400,
            "duration": 4
          }
        }
      }


    }} />
};

export default ParticlesContainer;