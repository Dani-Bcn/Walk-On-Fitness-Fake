import React from 'react'

export default function Header_Counts() {
  return (
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
  )
}
