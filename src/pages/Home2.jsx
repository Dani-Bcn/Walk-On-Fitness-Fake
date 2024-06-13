import React, { useEffect, useState } from "react";
import gsap from "gsap";
import { motion as m } from "framer-motion";
import { ScrollTrigger } from "gsap/all";
import back_Img from "/assets/home-back.jpg";

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
            stgart:"center center",
            stop:1500,
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
            stgart:"center 500",
            stop:50,
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
            stgart:"center center",
            stop:1500,
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
  return (
    <main className="relative text-white flex flex-col items-center bg-[rgb(20,20,20)] ">
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
          <div className="w-10/12  text-white  text-xl font-semibold ">
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
    </main>
  );
};
