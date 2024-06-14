import React, { useEffect, useState } from "react";
import back_Img from "/assets/home-back.jpg";
import athletic_female from "/assets/athletic-female.png";
import athletic_woman from "/assets/athletic-woman.jpg";
import couple_cross from "/assets/couple-cross.jpg";
import cheerful_young from "/assets/cheerful-young.jpg";
import fliying_ingredients from "/assets/flying-ingredients.jpg";
import girls_having from "/assets/girls-having.jpg";
import fit_man from "/assets/confident-fit-man.jpg";
import confident from "/assets/confident-fit-man.jpg";
import fisioterapia from "/assets/fisioterapia.jpg";
import bg2 from "/assets/bg2.png";
import bg from "/assets/bg.png";
import bg_black from "/assets/bg.jpg";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

export const Home2 = (props) => {
  const [buttonServices, setButtonServices] = useState(false);
 gsap.registerPlugin(ScrollTrigger)

  buttonServices
    ? gsap.to(".buttonServices", {
        x: 235,
      })
    : gsap.to(".buttonServices", {
        x: 0,
      });

  useEffect(() => {
    gsap.to(".years", {
        scrollTrigger:{
            trigger:".years",
            start:-0.49,
            stop:500,
        },
      innerText: 15,
      duration: 2,
      ease: "circ.out",
      snap: {
        innerText: 1,
      },
    });
    gsap.to(".clients", {
        scrollTrigger:{
            trigger:".clients",
            start:-0.49,
            stop:500,
        },
      innerText: 1000,
      delay: 0.5,
      duration: 1,
      ease: "circ.out",
      snap: {
        innerText: 5,
      },
    });
    gsap.to(".training", {
        scrollTrigger:{
            trigger:".training",
            start:-0.49,
            stop:500,
        },
      innerText: 38000,
      delay: 1,
      duration: 1,
      ease: "circ.out",
      snap: {
        innerText: 5,
      },
    });
  }, []);

  buttonServices
    ? gsap.to(".buttonServices", {
        x: 235,
      })
    : gsap.to(".buttonServices", {
        x: 0,
      });

  const [buttonMembers, setButtonMembers] = useState(false);

  buttonMembers
    ? gsap.to(".buttonMembers", {
        x: 235,
      })
    : gsap.to(".buttonMembers", {
        x: 0,
      });

  const [buttonComencemos, setButtonComencemos] = useState(false);

  buttonComencemos
    ? gsap.to(".buttonComencemos", {
        x: 235,
      })
    : gsap.to(".buttonComencemos", {
        x: 0,
      });

  const [athleticWoman, setAthleticWoman] = useState(false);
  const [coupleCross, setCoupleCross] = useState(false);

  useEffect(() => {
    athleticWoman
      ? gsap.to(".bg-athletic-woman", {
          y: 0,
          ease: "circ.out",
        })
      : gsap.to(".bg-athletic-woman", {
          y: 500,
          ease: "circ.out",
        });
    athleticWoman
      ? gsap.to(".text-athletic-woman", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
        })
      : gsap.to(".text-athletic-woman", {
          y: 100,
          opacity: 0,
          ease: "circ.out",
        });
  }, [athleticWoman]);

  useEffect(() => {
    coupleCross
      ? gsap.to(".bg-couple-cross", {
          y: 0,
          ease: "circ.out",
        })
      : gsap.to(".bg-couple-cross", {
          y: 500,
          ease: "circ.out",
        });
    coupleCross
      ? gsap.to(".text-couple-cross", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
        })
      : gsap.to(".text-couple-cross", {
          y: 100,
          opacity: 0,
          ease: "circ.out",
        });
  }, [coupleCross]);

  const [nutrition, setNutrition] = useState(false);

  useEffect(() => {
    nutrition
      ? gsap.to(".bg-nutrition", {
          y: 0,
          ease: "circ.out",
        })
      : gsap.to(".bg-nutrition", {
          y: 500,
          ease: "circ.out",
        });
    nutrition
      ? gsap.to(".text-nutrition", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
        })
      : gsap.to(".text-nutrition", {
          y: 100,
          opacity: 0,
          ease: "circ.out",
        });
  }, [nutrition]);
  const [youngs, setYoungs] = useState(false);

  useEffect(() => {
    youngs
      ? gsap.to(".bg-youngs", {
          y: 0,
          ease: "circ.out",
        })
      : gsap.to(".bg-youngs", {
          y: 500,
          ease: "circ.out",
        });
    youngs
      ? gsap.to(".text-youngs", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
        })
      : gsap.to(".text-youngs", {
          y: 100,
          opacity: 0,
          ease: "circ.out",
        });
  }, [youngs]);

  const [fisio, setFisio] = useState(false);

  useEffect(() => {
    fisio
      ? gsap.to(".bg-fisio", {
          y: 0,
          ease: "circ.out",
        })
      : gsap.to(".bg-fisio", {
          y: 500,
          ease: "circ.out",
        });
    fisio
      ? gsap.to(".text-fisio", {
          y: 0,
          opacity: 1,
          ease: "circ.out",
        })
      : gsap.to(".text-fisio", {
          y: 100,
          opacity: 0,
          ease: "circ.out",
        });
  }, [fisio]);

  const comments = [
    {
      name: "RAUL PC",
      text: "Hace unos meses empecé a entrenar con Fran y los resultados no pueden ser mejores. Por primera vez siento que realmente avanzo. Fran es un profesional del deporte y la salud que te corrige, te explica y te lleva a los objetivos deseados. Gracias 💪",
    },
    {
      name: "MIGUEL LOZANO",
      text: "He entrenado durante años con muchos profesionales y Fran y su equipo son sin duda de lo mejor que puedes encontrar. No sólo desde un conocimiento profundo del entrenamiento deportivo si no también en psicología deportiva y motivación. Buena planificación y variedad de entrenamientos adaptados a tus necesidades. Sin duda unos profesionales",
    },
    {
      name: "RAQUEL LINARES",
      text: "Mi experiencia con Walk on y con Fran como entrenador esta siendo muy buena , nunca habia sido constante con el deporte y lo estoy consiguiendo, gracias a los entrenos específicos, teniendo en cuenta las necesidades individuales con la sabiduría y profesionalidad que lo caracteriza . ",
    },
  ];

  const [count, setCount] = useState(0);

  const interval = () => {
    setCount(count + 1);
    count === 2 ? setCount(0) : null;
    clearInterval(iner);
  };

  const iner = setInterval(() => {
    interval();
  }, 5000);

  return (
    <main className="relative text-white flex flex-col items-center bg-[rgb(20,20,20)] overflow-hidden">
      <img
        src={back_Img}
        alt="img-back"
        className="absolute object-cover brightness-[0.3] blur-[2.5px]"
      />
      <section className="box relative w-[90vw] flex justify-center  gap-10 items-center mt-32 p-3 ">
        <m.div className="wrapper-box flex flex-col gap-10  overflow-hidden text-8xl  font-bold italic  ">
        <h3 className="text-xl mt-5">
            <span>PEQUEÑOS CAMBIOS, GRANDES RESULTADOS.</span>
          </h3>
          <div className="overflow-hidden">
          <m.h3
            animate={{
              y: [550, 0],
              transition: {
                duration: 1,
                ease: "circOut",
              },
            }}
            className="font-bold italic text-white "
          >
            WALK ON <span>FITNESS</span>
          </m.h3>
          </div>
          <div className="w-10/12 text-white  text-xl font-semibold ">
            <p>
              En Walk On Fitness, nos dedicamos a potenciar tu bienestar a
              través de programas integrales de entrenamiento, nutrición y
              fisioterapia. Descubre cómo podemos ayudarte a alcanzar tus
              objetivos de salud y forma física.
            </p>
          </div>
          

          <button
            onPointerOver={() => setButtonServices(true)}
            onPointerOut={() => setButtonServices(false)}
            className="w-40 rounded-md overflow-hidden h-16 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400   transiton-all duration-500 z-[200]"
          >
            <div className=" buttonServices flex -ml-[175px] gap-40 ">
              <h3>Ver</h3>
              <h3>Servicios</h3>
            </div>
          </button>
        </m.div>
        <div className=" w-screen gap-14 h-[500px] flex flex-col  justify-start ">
          <div className=" flex flex-col  justify-center  items-center  text-6xl font-bold ">
            <span className="flex">
              <h2 className="years z-[200]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic">AÑOS DE EXPERIENCIA</h2>
          </div>
          <div className=" flex flex-col justify-center items-center text-7xl font-bold ">
            <span className="flex">
              <h2 className="clients z-[200]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic text-center">
              CLIENTES SATISFECHOS
            </h2>
          </div>
          <div className=" flex flex-col justify-center text-center items-center  text-7xl font-bold ">
            <span className="flex">
              <h2 className="training z-[200]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic">ENTRENAMIENTOS REALIZADOS</h2>
          </div>
        </div>
      </section>
      <section className="cnt-woman flex  w-[90vw]  gap-20 mt-20 z-[50]">
        <div className="w-full h-[100vh] text-white relative flex flex-col">
          <m.img
            initial={{
              x: 0,
              opacity: 0,
            }}
           whileInView={{
              x: [0, 150],
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.4 }}
            src={athletic_female}
            alt="img-female"
            className=" img-woman absolute w-[450px] z-[75]"
          />
          <div className="flex justify-start italic text-6xl">
             <div className="w-72 mt-40 z-[50]   ">
              <h3 className=" tupotencial italic font-bold w-60"> Tu potencial es ilimitado</h3>
            </div> 
            <m.img
              initial={{
                x: [200, 50],
                opacity: 0,
              }}
              whileInView={{
                x: [200, 50],
                opacity: [0, 1],
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              src={bg}
              alt="img-bg"
              className=" w-72 h-[450px] z-[25] "
            />
          </div>
         
        </div>
        <div className=" nuestroequipo w-[100vw]  flex flex-col gap-10 text-xl italic  text-white">
        <div className="absolute w-full flex  h-52 bg-gradient-to-r from-slate-400"></div>
          <h4 className="equipo relative ">NUESTRO EQUIPO</h4>
          <h2 className="relative text-5xl text-orange-400">
            TRANSFORMANDO VIDAS, FORJANDO RESULTADOS
          </h2>
          <p className="w-[600px] text-[0.9em]">
            En Walk On Fitness, nuestro equipo está compuesto por entrenadores
            altamente calificados, nutricionistas dedicados y fisioterapeutas
            expertos que trabajan juntos para ayudarte a alcanzar tus objetivos
            de salud y forma física. Con más de 15 años de experiencia combinada
            y habiendo atendido a más de 1,000 clientes satisfechos, estamos
            aquí para guiarte en cada paso del camino hacia una versión más
            saludable y en forma de ti mismo. <br/>Conoce a los profesionales que
            están listos para desbloquear tu potencial ilimitado y llevarte más
            allá de tus límites. ¡Únete a nuestro equipo y descubre la
            diferencia que podemos hacer juntos!
          </p>
          <button
            onPointerOver={() => setButtonMembers(true)}
            onPointerOut={() => setButtonMembers(false)}
            className="w-52 rounded-md overflow-hidden h-16 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-2xl bg-orange-400   transiton-all duration-500 z-[200]"
          >
            <div className="buttonMembers flex w-[600px] -ml-[155px] gap-32 ">
              <h3>Go!!!</h3>
              <h3>Hazte miembro</h3>
            </div>
          </button>
        </div>
      </section>
     
    </main>
  );
};
