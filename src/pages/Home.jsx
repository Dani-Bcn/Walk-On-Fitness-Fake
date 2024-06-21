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
import img_fisioterapia from "/assets/fisioterapia.jpg";
import bg2 from "/assets/bg2.png";
import bg from "/assets/bg.png";
import ScrollTrigger from "gsap/src/ScrollTrigger";
import bg_black from "/assets/bg.jpg";
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

export default function Home() {

  useEffect(() => {
    gsap.to(".years", {
      scrollTrigger: {
        trigger: ".years",
        start: -0.49,
        stop: 500,
      },
      innerText: 15,
      duration: 2,
      ease: "circ.out",
      snap: {
        innerText: 1,
      },
    });
    gsap.to(".clients", {
      scrollTrigger: {
        trigger: ".clients",
        start: -0.49,
        stop: 500,
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
      scrollTrigger: {
        trigger: ".training",
        start: -0.49,
        stop: 500,
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
    <main className="absolute w-screen flex flex-col justify-center items-center  bg-[rgb(20,20,20)] text-white overflow-hidden">
      <section className="w-[90vw] text-center md:text-start mt-20 p-5 flex flex-wrap items-center justify-around ">
        <div className="flex flex-col justify-between w-full h-full sm:w-1/2 ">
          <h3>PEQUEÑOS CAMBIOS, GRANDES RESULTADOS.</h3>
          <h2 className="italic" >
            <span>WALK ON</span> FITNESS
          </h2>
          <p>
            En Walk On Fitness, nos dedicamos a potenciar tu bienestar a través
            de programas integrales de entrenamiento, nutrición y fisioterapia.
            Descubre cómo podemos ayudarte a alcanzar tus objetivos de salud y
            forma física.
          </p>
        </div>
        <div className=" w-1/2  flex flex-col  justify-start ">
          <div className="flex flex-col  justify-center  items-center  font-bold ">
            <span className="flex">
              <h2 className="years z-[100]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic text-center">AÑOS DE EXPERIENCIA</h2>
          </div>
          <div className=" flex flex-col justify-center items-center  font-bold ">
            <span className="flex">
              <h2 className="clients z-[150]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic text-center">
              CLIENTES SATISFECHOS
            </h2>
          </div>
          <div className=" flex flex-col justify-center text-center items-center  font-bold ">
            <span className="flex">
              <h2 className="training z-[100]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic">ENTRENAMIENTOS REALIZADOS</h2>
          </div>
        </div>
      </section>
    </main>
  );
}
