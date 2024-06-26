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
        start: -25,
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

  const arryImg = [girls_having, couple_cross, confident];

  const [count, setCount] = useState(0);

  const funcInterval = () => {
    clearInterval(interval);
    setCount(count + 1);
    count === 2 ? setCount(0) : null;
  };

  const interval = setInterval(() => {
    funcInterval();
  }, 5000);

  useEffect(() => {
    gsap.to(".images", {
      scale: 1.3,
      duration: 14.5,
      ease: "none",
      repeat: Infinity,
    });
  }, []);

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

  return (
    <main className="absolute w-screen flex flex-col justify-center items-center  bg-[rgb(20,20,20)] text-white overflow-hidden">
      <section className="header w-[90vw] mt-20 p-5 flex flex-wrap items-center justify-around ">
        <div className="flex flex-col justify-between w-full h-full sm:w-1/2 ">
          <h3>PEQUEÑOS CAMBIOS, GRANDES RESULTADOS.</h3>
          <h2 className="italic">
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
          <div className=" flex flex-col justify-center text-center items-center font-bold ">
            <span className="flex">
              <h2 className="training z-[100]"></h2>
              <h2 className="flex font-black ">+</h2>
            </span>
            <h2 className="text-2xl italic">ENTRENAMIENTOS REALIZADOS</h2>
          </div>
        </div>
        <div className="w-full mt-5">
          <button className="w-32 mt-5 sm:-mt-96 rounded-md overflow-hidden h-10 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400   transiton-all duration-500 z-[75]">
            <div className=" buttonServices ">
              <h3 className="text-2xl -mt-1">Servicios</h3>
            </div>
          </button>
        </div>
      </section>
      <section className="w-[90vw] relative   flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <img
            src={athletic_female}
            alt="img-athletic"
            className="absolute w-96  object-cover z-50 mt-24 md:mt-0"
          />
          <h3 className="text-5xl font-bold italic text-center md:text-start">
            TU POTENCIAL ES ILIMITADO.
          </h3>
        </div>
        <div className="w-full flex flex-col justify-center gap-10 sm:w-1/2 mt-[525px] md:mt-0 text-center md:text-start">
          <h3 className="text-2xl font-bold ">NUESTRO EQUIPO.</h3>
          <span>
            <h2 className="text-4xl italic">
              TRANSFORMANDO VIDAS, FORJANDO RESULTADOS.
            </h2>
          </span>
          <p>
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
          <div className="w-full mt-5">
            <button className="w-48 mt-5 sm:-mt-96 rounded-md overflow-hidden h-10 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400   transiton-all duration-500 z-[75]">
              <div className=" buttonServices ">
                <h3 className="text-2xl -mt-1">Hazte miembro</h3>
              </div>
            </button>
          </div>
        </div>
      </section>
      <section className="xl:w-[90vw] text-center xl:text-start  text-2xl flex flex-wrap gap-32 mt-52 mb-32  md:gap-20 justify-center xl:justify-between items-center">
        <div className="w-60 font-medium">
          <h3>+15 AÑOS DE EXPERIENCIA</h3>
          <h5 className="absolute -mt-24">05</h5>
        </div>
        <div className="w-60 font-medium">
          <h3>+10 ENTRENADORES CALIFICADOS</h3>
          <h5 className="absolute -mt-24">20</h5>
        </div>
        <div className="w-60 font-medium">
          <h3>+50K CALORÍAS QUEMADAS</h3>
          <h5 className="absolute -mt-24">40</h5>
        </div>
        <div className="w-60 font-medium">
          <h3>+1.000+ MIEMBROS FELICES</h3>
          <h5 className="absolute -mt-24">500</h5>
        </div>
      </section>
      <section className="w-[95vw] flex">
        <div className="flex flex-wrap justify-center xl:justify-between p-5">
          <div className="w-full h-80 mb-10   flex flex-col  justify-between ">
            <h3 className="text-2xl font-bold ">SERVICIOS.</h3>
            <span>
              <h2 className="text-4xl italic">
                EL ÉXITO ES UN DEPORTE DE EQUIPO.
              </h2>
            </span>
            <p className="text-[1em] w-80 md:w-[400px]">
              ¿Pensando en cambiar tus hábitos y ponerte en forma? Hazlo de la
              mejor manera con Walk On Fitness. Descubre todos nuestros
              servicios que tenemos para comenzar tu transformación física.
            </p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-start gap-3 1/4 py-5">
            <div className="w-96 md:w-60 flex flex-col font-medium italic">
              <h3>
                ENTRENAMIENTO
                <br /> PERSONAL
              </h3>
              <img
                src={athletic_woman}
                alt="athletic_woman"
                className=" w-[85vw] h-96 object-cover"
              />
            </div>
            <div className="w-96 md:w-60 flex flex-col font-medium italic">
              <h3>
                ENTRENAMIENTO
                <br /> SEMIPROFESIONAL
              </h3>
              <img
                src={couple_cross}
                alt="athletic_woman"
                className="w-[85vw] h-96 object-cover"
              />
            </div>
            <div className="w-96 md:w-60 flex flex-col font-medium italic">
              <h3>
                NUTRICIÓN
                <br />
                <br />
              </h3>
              <img
                src={fliying_ingredients}
                alt="athletic_woman"
                className="w-[85vw] h-96 object-cover"
              />
            </div>
            <div className="w-96 md:w-60 flex flex-col font-medium italic">
              <h3>EMPRESAS SALUDABLES-CORPORATE WELLNESS</h3>
              <img
                src={cheerful_young}
                alt="athletic_woman"
                className="w-[85vw] h-96 object-cover"
              />
            </div>
            <div className="w-96 md:w-60 flex flex-col font-medium italic">
              <h3>
                FISIOTERAPIA
                <br />
                <br />
              </h3>
              <img
                src={img_fisioterapia}
                alt="athletic_woman"
                className="w-[85vw] h-96 object-cover"
              />
            </div>
            <div className="w-96 md:w-full h-60 flex flex-col font-medium italic py-10">
              <span>
                <h2 className="text-4xl">
                  COMIENZA HOY TU CAMBIO FÍSICO EN WALK ON FITNESS
                </h2>
              </span>
              <div className="w-full xl:mt-20 mt-10">
                <button className="w-48 mt-5 sm:-mt-96 rounded-md overflow-hidden h-10 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400   transiton-all duration-500 z-[75]">
                  <div className=" buttonServices ">
                    <h3 className="text-2xl -mt-1">¡Comencemos!</h3>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="w-[90vw] flex flex-col mt-10 md:text-start text-center">
        <div className="w-[90vw] h-72 flex gap-5 flex-col justify-center xl:justify-start xl:items-start items-center">
          <h3 className="text-2xl font-bold ">ASÍ ES COMO LO HACEMOS</h3>
          <span>
            <h2 className="italic text-5xl">¿POR DONDE EMPEZAMOS?</h2>
          </span>
          <p className="text-[1em] w-80 md:w-[400px]">
            ¿Te interesa conocer el procedimiento para comenzar a trabajar?
            Descúbrelo aquí mismo.
          </p>
        </div>
        <div className="w-full flex  justify-center flex-wrap">
          <div className="w-96 h-60 flex flex-col gap-5 justify-center items-center border border-slate-600 rounded-xl  hover:shadow-[0px_5px_10px] shadow-amber-700  m-2 p-5">
            <span>
              <h2 className="text-xl h-10">ENTREVISTA PERSONAL</h2>
            </span>
            <p className="h-40">
              Dónde analizamos tus objetivos y motivaciones (perdida de peso,
              ganancia de masa muscular, prueba deportiva, oposiciones...) y
              conocemos tu posible historial de lesiones, asi como tu
              experiencia previa en el ámbito del entrenamiento.
            </p>
          </div>
          <div className="w-96 h-60 flex flex-col  gap-5 justify-center items-center  border border-slate-600 rounded-xl  hover:shadow-[0px_5px_10px]  m-2 p-5">
            <span>
              <h2 className="text-xl h-10">VALORACIÓN FUNCIONAL</h2>
            </span>
            <p className="h-40">
              Defendemos la calidad de movimiento, “primero muévete bien,
              despues muévete mucho, Gray Cook” , con esta valoración conocemos
              los posibles desequilibrios, asimetrías, déficit de control motor
              o de fuerza.
            </p>
          </div>
          <div className="w-96 flex flex-col gap-5 justify-center items-center  h-60 border border-slate-600 rounded-xl  hover:shadow-[0px_5px_10px]  m-2 p-5">
            <span>
              <h2 className="text-xl h-10">ESTAMOS LISTOS</h2>
            </span>
            <p className="h-40">
              Bien de forma presencial o de forma on line, con toda la
              información prevía, habremos desarrollado una hoja de ruta, lo que
              llamamos programación, con la cual nos acercaremos a la
              consecución de tus metas.
            </p>
          </div>
        </div>
      </section>
      <section className="w-[90vw]  h-[600px] relative flex justify-center items-center my-20 bg-red-200 overflow-hidden">
        <img
          src={arryImg[count]}
          alt=""
          className="images w-72 md:w-full xl:w-full   h-[600px] object-cover absolute z-[10] brightness-[0.5]"
        />
        <div className="relative z-[50] w-10/12 h-96 flex flex-col items-center justify-center gap-5 ">
          <h3 className="text-3xl">TESTIMONIOS</h3>
          <span>
            <h2 className="w-full text-xl md:text-3xl text-center xl:text-5xl font-extrabold italic">
              LO QUE OPINAN NUESTROS CLIENTES
            </h2>
          </span>
          <div className="w-[10/12] md:w-1/2 h-96 bg-slate-800 p-5 flex text-start gap-5 flex-col items-start justify-center">
            <p className="text-[1em] ">{comments[count].text}</p>
            <span>
              <h3>{comments[count].name}</h3>
            </span>
          </div>
        </div>
      </section>
      <div className="w-[90vw] pb-10 flex flex-col gap-5">
        <h3>CONTACTO</h3>
        <span>
          <h2 className="text-xl xl:text-5xl italic">¡COMENCEMOS EL ENTRENAMIENTO!</h2>
        </span>
        <p>
          ¿Listo para comenzar una vida más saludable? Contáctanos hoy mismo
          para programar una consulta o para obtener más información sobre
          nuestros servicios. Estamos aquí para ayudarte.
        </p>
      </div>
      <section className="w-[90vw] xl:w-6/12 flex flex-col gap-5 md:p-20 p-5 bg-slate-600">
        <span>
          <h2 className="text-xl ">ENVIANOS UN CORREO DESDE AQUÍ</h2>
        </span>
        <form action="" className="text-black"></form>
        <input
          type="text"
          placeholder="Nombre"
          className="text-black shadow-md shadow-orange-600 bg-slate-500  rounded-b-md"
        />
        <input
          type="text"
          placeholder="Correo electrónico"
          className="text-black shadow-md shadow-orange-600 bg-slate-500   rounded-b-md"
        />
        <textarea
          type="text"
          className="text-black shadow-md shadow-orange-600 bg-slate-500   rounded-b-md"
          placeholder="Mensaje"
        />
        <div className="w-full mt-5">
          <button className="w-28 mt-5 sm:-mt-96 rounded-md overflow-hidden h-7 text-white hover:shadow-[0px_0px_25px] shadow-white hover:text-orange-400 hover:bg-white italic text-3xl bg-orange-400   transiton-all duration-500 z-[75]">
            <div>
              <h3 className="text-xl -mt-1">Enviar</h3>
            </div>
          </button>
        </div>
      </section>
      <section className="w-[90vw] h-screen  text-xl">
        <div>
          <div className="text-xl">
            <div>
              <span>
                <h2 className="text-xl">INFORMACIÓN</h2>
              </span>
              <p>Carrer Matas, 88, local 2, 08391 Tiana, Barcelona</p>
              <p>(+34) 931 74 68 67</p>
              <p>info@walkonfitness.es</p>
            </div>
            <span>
              <h2 className="text-xl">HORARIO</h2>
            </span>
            <p>Lun. – Viern.: 8.00 – 14.00 // 16:00 – 21:00</p>
          </div>
          <div></div>
        </div>
        <div></div>
      </section>
    </main>
  );
}
