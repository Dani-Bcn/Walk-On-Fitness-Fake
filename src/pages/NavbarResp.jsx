import React from "react";
import { animate, motion as m } from "framer-motion";
import {
    Link,
    Button,
    Element,
    Events,
    animateScroll as scroll,
    scrollSpy,
  } from "react-scroll";

export default function NavbarResp(props) {
  const { menuResp } = props;
  const {activeMenuResp} = props

  console.log(menuResp);

  return (
    <m.main
      animate={menuResp ?
         { x: 1400 } : { x: 0 }}
         transition={{
            duration:1,
            ease:"backInOut"
         }}
      className="fixed -ml-[1400px] w-screen h-screen overflow-hidden p-20 bg-[rgb(20,20,20)] z-[200]"
    >
      <div className=" relative w-full flex  flex-col gap-5  p-5">
        <h3 className="text-orange-400 font-bold border-b">MENÚ</h3>
        <ul className="flex flex-col text-white  gap-5">
          <div className="flex gap-2">
            <span> - </span>
            <Link
              activeClass="active"
              to="inicio"
              spy={true}
              smooth={true}
              duration={500}
            >
              <li  onClick={()=> activeMenuResp(!menuResp)}>INICIO</li>
            </Link>
          </div>
          <div 
         
          className="flex gap-2">
            <span> - </span>
            <Link
              activeClass="active"
              to="equipo"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li onClick={()=> activeMenuResp(!menuResp)}>EQUIPO</li>
            </Link>
          </div>
          <div className="flex gap-2">
            <span> - </span>
            <Link
              activeClass="active"
              to="servicios"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li  onClick={()=> activeMenuResp(!menuResp)}>SERVICIOS</li>
            </Link>
          </div>
          <div className="flex gap-2">
            <span> - </span>
            <Link
              activeClass="active"
              to="testimonios"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li  onClick={()=> activeMenuResp(!menuResp)}>TESTIMONIOS</li>
            </Link>
          </div>
          <div className="flex gap-2">
            <span> - </span>
            <Link
              activeClass="active"
              to="contacto"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              <li  onClick={()=> activeMenuResp(!menuResp)}>CONTACTO</li>
            </Link>
          </div>
        </ul>
      </div>
    </m.main>
  );
}
