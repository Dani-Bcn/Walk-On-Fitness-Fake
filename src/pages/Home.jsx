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
import gsap from "gsap";
import { motion as m } from "framer-motion";
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Home() {
  useEffect(() => {
    gsap.to(".years", {
      innerText: 15,
      duration: 2,
      ease: "circ.out",
      snap: {
        innerText: 1,
      },
    });
    gsap.to(".clients", {
      innerText: 1000,
      delay: 0.5,
      duration: 2,
      ease: "circ.out",
      snap: {
        innerText: 5,
      },
    });
    gsap.to(".training", {
      innerText: 38000,
      delay: 1,
      duration: 2,
      ease: "circ.out",
      snap: {
        innerText: 5,
      },
    });
  }, []);

  const [buttonServices, setButtonServices] = useState(false);

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
    <main className=" inicio overflow-hidden w-screen bg-[rgb(20,20,20)] text-6xl flex flex-col gap-20 ">
      <img
        src={back_Img}
        alt="back-img"
        className="absolute object-cover w-screen brightness-50 "
      />
      <section className="w-screen p-20 h-[800px] mt-10 text-white z-[75] mx-auto grid justify-center items-center  grid-cols-2 grid-rows-4">
        <div className=" text-xl w-96 h-10 font-bold col-span-1 col-start-1 row-span-1 ">
          <h3>
            <span>PEQUEÑOS CAMBIOS, GRANDES RESULTADOS.</span>
          </h3>
        </div>
        <m.div className="overflow-hidden text-8xl w-[600px]  font-bold italic col-span-1 col-start-1 row-span-1 ">
          <m.h3
            animate={{
              y: [550, 0],
              transition: {
                duration: 1,
                ease: "circOut",
              },
            }}
            className="font-bold italic"
          >
            WALK ON <span>FITNESS</span>
          </m.h3>
        </m.div>
        <div className="w-[600px] text-white col-span-1 col-start-1 row-span-1 text-xl font-semibold ">
          <p>
            En Walk On Fitness, nos dedicamos a potenciar tu bienestar a través
            de programas integrales de entrenamiento, nutrición y fisioterapia.
            Descubre cómo podemos ayudarte a alcanzar tus objetivos de salud y
            forma física.
          </p>
        </div>
        <button
          onPointerOver={() => setButtonServices(true)}
          onPointerOut={() => setButtonServices(false)}
          className="w-40 rounded-md overflow-hidden h-16 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400  col-span-1 col-start-1 row-span-1  transiton-all duration-500 z-[200]"
        >
          <div className=" buttonServices flex  -ml-[175px] gap-40 ">
            <h3>Ver</h3>
            <h3>Servicios</h3>
          </div>
        </button>
        <div className=" flex flex-col w-full  justify-center  items-center col-span-2 col-start-2 row-start-1 text-7xl font-bold ">
          <span className="flex">
            <h2 className="years z-[200]"></h2>
            <h2 className="flex font-black ">+</h2>
          </span>
          <h2 className="text-3xl italic">AÑOS DE EXPERIENCIA</h2>
        </div>
        <div className=" flex flex-col justify-center items-center col-span-2 col-start-2 row-start-2 text-7xl font-bold ">
          <span className="flex">
            <h2 className="clients z-[200]"></h2>
            <h2 className="flex font-black ">+</h2>
          </span>
          <h2 className="text-3xl italic">CLIENTES SATISFECHOS</h2>
        </div>
        <div className=" flex flex-col justify-center items-center col-span-2 col-start-2 row-start-3 text-7xl font-bold ">
          <span className="flex">
            <h2 className="training z-[200]"></h2>
            <h2 className="flex font-black ">+</h2>
          </span>
          <h2 className="text-3xl italic">ENTRENAMIENTOS REALIZADOS</h2>
        </div>
      </section>
      <section className="flex h-screen px-10">
        <div className="w-full h-[200vh] text-white relative flex flex-col">
          <m.img
            initial={{
              x: -200,
              opacity: 0,
            }}
            whileInView={{
              x: [-200, 150],
              opacity: [0, 1],
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true, amount: 0.4 }}
            src={athletic_female}
            alt="img-female"
            className="absolute w-[450px] z-[75]"
          />
          <div className="flex justify-start italic">
            <div className="w-72 mt-40 z-[50]   ">
              <h3 className="italic font-bold"> Tu potencial es ilimitado</h3>
            </div>
            <m.img
              initial={{
                x: [200, 0],
                opacity: 0,
              }}
              whileInView={{
                x: [200, 0],
                opacity: [0, 1],
                transition: {
                  duration: 1,
                },
              }}
              viewport={{ once: true, amount: 0.8 }}
              src={bg}
              alt="img-bg"
              className="w-72 h-[450px] z-[25] "
            />
          </div>
          <div className="w-full h-52 bg-gradient-to-r from-slate-400"></div>
        </div>
        <div className=" w-[100vw] flex flex-col gap-10 text-xl italic  text-white">
          <h4 className="equipo ">NUESTRO EQUIPO</h4>
          <h2 className="text-5xl text-orange-400">
            TRANSFORMANDO VIDAS, FORJANDO RESULTADOS
          </h2>
          <p className="w-[600px] text-[0.9em]">
            En Walk On Fitness, nuestro equipo está compuesto por entrenadores
            altamente calificados, nutricionistas dedicados y fisioterapeutas
            expertos que trabajan juntos para ayudarte a alcanzar tus objetivos
            de salud y forma física. Con más de 15 años de experiencia combinada
            y habiendo atendido a más de 1,000 clientes satisfechos, estamos
            aquí para guiarte en cada paso del camino hacia una versión más
            saludable y en forma de ti mismo. Conoce a los profesionales que
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
      <section className="w-[95vw]  h-40 flex justify-around items-center">
        <div className="relative italic flex justify-center items-center">
          <h5 className="absolute ">05</h5>
          <p className="absolute z-[50] text-white text-3xl font-black italic">
            +15
            <br /> AÑOS DE EXPERIENCIA
          </p>
        </div>
        <div className="relative italic flex justify-around items-center">
          <h5 className="absolute ">20</h5>
          <p className="absolute z-[50] text-white text-3xl font-black italic">
            +10 ENTRENADORES CALIFICADOS
          </p>
        </div>
        <div className="relative italic flex justify-around items-center">
          <h5 className="absolute">10</h5>
          <p className="absolute z-[50] text-white text-3xl font-black italic">
            +50K CALORÍAS QUEMADAS
          </p>
        </div>
        <div className="relative italic flex justify-around items-center">
          <h5 className="absolute">500</h5>
          <p className="absolute z-[50] text-white text-3xl font-black italic">
            +1.000+ MIEMBROS FELICES
          </p>
        </div>
      </section>
      <section className="servicios w-screen flex flex-col ">
        <div className="flex w-full h-96">
          <div className="flex w-1/2 h-96 p-10 flex-col gap-20 text-white text-xl justify-center">
            <h4>SERVICIOS</h4>
            <h2 className="text-5xl text-orange-400 italic">
              EL ÉXITO ES UN DEPORTE DE EQUIPO
            </h2>
            <p>
              ¿Pensando en cambiar tus hábitos y ponerte en forma? Hazlo de la
              mejor manera con Walk On Fitness. Descubre todos nuestros
              servicios que tenemos para comenzar tu transformación física.
            </p>
          </div>
          <div className="flex ml-8 gap-5">
            <m.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{
                y: [200, 0],
                opacity: [0, 1],
                transition: {
                  ease: "circInOut",
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              onPointerOver={() => setAthleticWoman(true)}
              onPointerOut={() => setAthleticWoman(false)}
              className="relative w-full h-full  flex justify-center items-center text-xl text-orange-400 text-center overflow-hidden"
            >
              <img
                src={athletic_woman}
                alt="img-athletic"
                className=" w-72 h-96 object-cover brightness-75"
              />
              <div className="bg-athletic-woman absolute flex  w-full h-full bg-gradient-to-t justify-center items-center from-[rgb(20,20,20)] to-[rgba(20,20,20,0.5)]  z-[75]"></div>
              <p className="text-athletic-woman absolute w-[95%] h-full italic flex justify-center items-center font-bold z-[75]">
                LAS SESIONES SE DESARROLLAN DE FORMA PERSONAL, “ONE TO ONE”, UN
                CLIENTE CON UN ENTRENADOR. ESTE SERVICIO INCLUYE EL
                ASESORAMIENTO NUTRICIONAL.
              </p>
              <p className="absolute mt-80 italic text-white z-[75]">
                ENTRENAMIENTO PERSONAL
              </p>
            </m.div>
            <m.div
              initial={{ y: 200, opacity: 0 }}
              whileInView={{
                y: [200, 0],
                opacity: [0, 1],
                transition: {
                  ease: "circInOut",
                  duration: 0.5,
                },
              }}
              viewport={{ once: true, amount: 0.5 }}
              onPointerOver={() => setCoupleCross(true)}
              onPointerOut={() => setCoupleCross(false)}
              className="relative w-full h-full  flex justify-center items-center text-xl text-orange-400 text-center overflow-hidden"
            >
              <img
                src={couple_cross}
                alt="couple"
                className="w-72 h-96 object-cover brightness-75"
              />
              <div className="bg-couple-cross  absolute flex w-full h-full bg-gradient-to-t justify-center items-center from-[rgb(20,20,20)] to-[rgba(20,20,20,0.5)]  z-[75]"></div>
              <p className="text-couple-cross absolute w-[95%] h-full italic flex justify-center items-center font-bold z-[75]">
                LAS SESIONES SE DESARROLLAN CON UN GRUPO DE 4 PERSONAS Y UN
                ENTRENADOR. CADA PERSONA DESARROLLA SU PROGRAMA DE ENTRENAMIENTO
                INDIVIDUALIZADO.
              </p>
              <p className="absolute mt-80 italic text-white z-[75]">
                ENTRENAMIENTO SEMIPROFESIONAL
              </p>
            </m.div>
          </div>
        </div>
        <div className="w-screen flex my-10 mx-1">
          <m.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                ease: "circInOut",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            onPointerOver={() => setNutrition(true)}
            onPointerOut={() => setNutrition(false)}
            className="relative w-[25%] h-full  flex justify-center items-center text-xl text-orange-400 text-center overflow-hidden"
          >
            <img
              src={fliying_ingredients}
              alt="img-ingredients"
              className=" w-72 h-96 object-cover brightness-75"
            />
            <div className="bg-nutrition  absolute flex w-full h-full bg-gradient-to-t justify-center items-center from-[rgb(20,20,20)] to-[rgba(20,20,20,0.5)]  z-[75]"></div>
            <p className="text-nutrition w-60 absolute h-full flex justify-center italic items-center font-bold z-[75]">
              DIETA PERSONALIZADA, REALIZADA A PARTIR DE UNA VALORACIÓN DE
              ANALITICAS, SI SE DISPONE, ESTUDIOS DE COMPOSICIÓN CORPORAL.
            </p>
            <p className="absolute mt-80 italic text-white z-[75]">NUTRICIÓN</p>
          </m.div>
          <m.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                ease: "circInOut",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            onPointerOver={() => setYoungs(true)}
            onPointerOut={() => setYoungs(false)}
            className="relative w-[25%] h-full  flex justify-center items-center text-xl text-orange-400 text-center overflow-hidden"
          >
            <img
              src={cheerful_young}
              alt="cheerful"
              className="w-72 h-96 object-cover brightness-75"
            />
            <div className="bg-youngs  absolute flex w-full h-full bg-gradient-to-t justify-center items-center from-[rgb(20,20,20)] to-[rgba(20,20,20,0.5)]  z-[75]"></div>
            <p className="text-youngs w-60 absolute text-[0.8em] h-full flex justify-center italic items-center font-bold z-[75]">
              LOS BENEFICIOS DE LA ACTIVIDAD FÍSICA, INTEGRADA EN EL ÁMBITO
              LABORAL. LAS GRANDES COMPAÑIAS DESDE HACE DECADAS IMPLEMENTAN
              PROGRAMAS DE SALUD PARA SUS EMPLEADOS, CON EL FIN DE MEJORAR SU
              PRODUCTIVIDAD Y RETENER TALENTO..
            </p>
            <p className="absolute w-72 mt-80 font-bold italic text-white z-[75]">
              EMPRESAS SALUDABLES-CORPORATE WELLNESS
            </p>
          </m.div>
          <m.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                ease: "circInOut",
                duration: 0.5,
              },
            }}
            viewport={{ once: true, amount: 0.5 }}
            onPointerOver={() => setFisio(true)}
            onPointerOut={() => setFisio(false)}
            className="relative w-[25%] h-full  flex justify-center items-center text-xl text-orange-400 text-center overflow-hidden"
          >
            <img
              src={fisioterapia}
              alt="fisioterapia"
              className="w-72 h-96 object-cover brightness-75"
            />
            <div className="bg-fisio  absolute flex w-full h-full bg-gradient-to-t justify-center items-center from-[rgb(20,20,20)] to-[rgba(20,20,20,0.5)]  z-[75]"></div>
            <p className="text-fisio w-60 absolute text-3xl h-full flex justify-center italic items-center font-bold z-[75]">
              FISIOTERAPIA
            </p>
            <p className="absolute w-72 mt-80 font-bold italic text-white z-[75]">
              FISIOTERAPIA
            </p>
          </m.div>
          <div className="w-72 h-96 text-4xl italic object-cover text-orange-400 border-4 p-5 border-orange-400 ">
            <h2>COMIENZA HOY TU CAMBIO FÍSICO EN WALK ON FITNESS</h2>
            <button
              onPointerOver={() => setButtonComencemos(true)}
              onPointerOut={() => setButtonComencemos(false)}
              className="w-40 overflow-hidden h-10 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-[1rem] bg-orange-400 transiton-all duration-500 z-[200]"
            >
              <div className=" buttonComencemos flex w-[600px] -ml-[205px] gap-32 ">
                <h3>¡ADELANTE!</h3>
                <h3>¡COMENCEMOS!</h3>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className=" h-screen -ml-5 relative flex flex-col gap-20 justify-center items-center">      
        <h3 className="text-2xl text-orange-400">ASÍ ES CÓMO LO HACEMOS</h3>
        <h3 className="text-5xl text-white font-bold italic">
          ¿POR DONDE EMPEZAMOS?
        </h3>
        <p className="text-white text-xl">
          ¿Te interesa conocer el procedimiento para comenzar a trabajar?
          Descúbrelo aquí mismo.
        </p>
        <div className="w-screen flex justify-center gap-10 items-center font-normal text-white text-[0.25em]">
          <m.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-[400px] h-52 flex flex-col gap-5 hover:shadow-orange-400 hover:shadow-md hover:-mt-1 transition-all  rounded-xl justify-center items-center  border border-[rgba(255,255,255,0.15)]"
          >
            <h3 className="text-orange-400 text-3xl">ENTREVISTA PERSONAL</h3>
            <p className="text-center w-80">
              Dónde analizamos tus objetivos y motivaciones (perdida de peso,
              ganancia de masa muscular, prueba deportiva, oposiciones...) y
              conocemos tu posible historial de lesiones, asi como tu
              experiencia previa en el ámbito del entrenamiento.
            </p>
          </m.div>
          <m.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-[400px] h-52 flex flex-col gap-5  hover:shadow-orange-400 hover:shadow-md hover:-mt-1 transition-all  rounded-xl justify-center items-center  border border-[rgba(255,255,255,0.15)]"
          >
            <h3 className="text-orange-400 text-3xl"> VALORACIÓN FUNCIONAL</h3>
            <p className="text-center w-80">
              Defendemos la calidad de movimiento, “primero muévete bien,
              despues muévete mucho, Gray Cook” , con esta valoración conocemos
              los posibles desequilibrios, asimetrías, déficit de control motor
              o de fuerza.
            </p>
          </m.div>
          <m.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            whileInView={{
              y: [200, 0],
              opacity: [0, 1],
              transition: {
                duration: 0.5,
                ease: "backOut",
              },
            }}
            viewport={{ once: false, amount: 0.5 }}
            className="w-[400px] h-52 flex flex-col hover:shadow-orange-400 hover:shadow-md hover:-mt-1 transition-all  rounded-xl gap-5 justify-center items-center  border border-[rgba(255,255,255,0.15)]"
          >
            <h3 className="text-orange-400 text-3xl">ESTAMOS LISTOS</h3>
            <p className="text-center w-80 ">
              Bien de forma presencial o de forma on line, con toda la
              información prevía, habremos desarrollado una hoja de ruta, lo que
              llamamos programación, con la cual nos acercaremos a la
              consecución de tus metas.
            </p>
          </m.div>
        </div>
      </section>
      <section className=" z-[50] relative  w-screen h-screen p-20 overflow-hidden flex flex-col justify-center  text-white items-center">
        <m.img
          whileInView={{
            scale: [1, 3],
            transition: {
              duration: 550,
              repeat: Infinity,
            },
          }}
          src={confident}
          alt="confident"
          className="absolute flex brightness-50 "
        />

        <div className="w-screen testimonios  text-[0.9rem] h-96 flex flex-col gap-5 z-[50] p-10">
          <p className="text-orange-400 text-xl font-bold">TESTIMONIOS</p>
          <h4 className="text-4xl italic">LO QUE OPINAN NUESTROS CLIENTES.</h4>
          <div className=" comments w-96 h-52 p-5 gap-2  flex flex-col justify-center items-start bg-[#141414]">
            <p className="text-sm h-52">{comments[count].text}</p>
            <h3 className="text-orange-400 text-2xl">{comments[count].name}</h3>
          </div>
        </div>
      </section>
      <section className="w-screen h-screen flex ">
        <div className="w-1/2  p-10 text-[1.2rem] flex flex-col  text-white gap-10 ">
          <h3 className="test-1">CONTACTO</h3>
          <h2 className="text-5xl text-orange-400 italic">
            ¡COMENCEMOS EL ENTRENAMIENTO!
          </h2>
          <p>
            ¿Listo para comenzar una vida más saludable? Contáctanos hoy mismo
            para programar una consulta o para obtener más información sobre
            nuestros servicios. Estamos aquí para ayudarte.
          </p>
          <img
          src={bg2}
          alt="img-bg2"
          className="absolute w-[500px] brightness-[0.2] mt-80 -ml-5" 
        />
        </div>
        <div className=" contacto w-1/2  bg-gradient-to-b from-[rgb(50,50,50)] flex flex-col justify-center gap-20 text-xl m-10 p-10 overflow-hidden">
          <h2 className="text-orange-400 text-2xl italic">
            ENVIANOS UN CORREO DESDE AQUÍ
          </h2>
          <form className="flex flex-col gap-10">
            <input
              type="text"
              placeholder="Nombre"
              className="bg-[rgb(75,75,75)] -mt-10 p-2 border-2 border-b-orange-400 border-[rgb(75,75,75)]"
            />
            <input
              type="text"
              placeholder="Correo electrónico"
              className="bg-[rgb(75,75,75)] p-2 border-2  border-b-orange-400 border-[rgb(75,75,75)]"
            />
            <textarea
              type="text"
              placeholder="Mensaje"
              className="bg-[rgb(75,75,75)] border-2  border-b-orange-400 border-[rgb(75,75,75)]"
            />
            <button className="bg-orange-400 h-12 text-white hover:text-orange-400 hover:bg-white transition-all">
              Enviar
            </button>
          </form>
        </div>
      </section>
      <footer className=" w-screen h-screen p-10 flex justify-between gap-5">
        <div className="flex items-center">
          <img
            src={bg}
            className="absolute w-[33%] h-[86.5%] brightness-[0.8]"
          ></img>
             <h3 className="absolute w-96 italic p-5 text-6xl text-white font-bold">MOTIVACIÓN, TRABAJO Y RESULTADOS ASEGURADOS</h3>
          <div className="absolute w-[33%] h-[86.7%] bg-gradient-to-t from-[rgb(20,20,20)] z-[150]"></div>
        </div>
        <div className="w-[65.5%] flex text-white  bg-[rgb(40,40,40)] ">
          <img
            src={bg_black}
            className="absolute w-[66%] h-[86.5%]  brightness-[0.2]"
          ></img>
       
          <div className="absolute w-[66%] h-[86.7%] bg-gradient-to-t from-[rgb(20,20,20)]"></div>
          <div className="w-full text-xl justify-around z-[50] flex p-10">
            <div className="text-white ">
              <div className="w-full flex gap-5">
                <div className="w-72 flex flex-col gap-6 p-5 text-white">
                  <h3 className="text-orange-400 font-bold border-b">INFO</h3>
                  <p>Carrer Matas, 88, local 2, 08391 Tiana, Barcelona</p>
                  <p>(+34) 931 74 68 67</p>
                  <p>info@walkonfitness.es</p>
                  <h2 className="absolute mt-60 z-[50] text-2xl text-orange-400 ">REDES SOCIALES</h2>
                </div>
                <div className="flex flex-col gap-5 w-40 p-5">
                  <h3 className="text-orange-400  font-bold border-b">MENÚ</h3>
                  <ul className="flex flex-col gap-5">
                    <div className="flex gap-2"><span> - </span><li>Inicio</li></div>
                    <div className="flex gap-2"><span> - </span><li>Servicios</li></div>
                    <div className="flex gap-2"><span> - </span><li>Testimonios</li></div>
                    <div className="flex gap-2"><span> - </span><li>Contacto</li></div>
                  </ul>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 w-60 p-5 ">
              <h3 className="text-orange-400 font-bold border-b">HORARIO</h3>
              <p>Lun. – Viern.: 8.00 – 14.00 // 16:00 – 21:00</p>
            </div>
          </div>
       
        </div>
      </footer>
    </main>
  );
}
