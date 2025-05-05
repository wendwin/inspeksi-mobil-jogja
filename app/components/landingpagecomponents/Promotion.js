export default function Promotion(){
    return (
        <div className="md:flex w-full ">
          <div className="relative w-full md:w-1/2 md:h-[280]">
            <img src="/img/inspeksi-1.png" alt="" className="w-full h-full object-cover "/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/25  hover:bg-black/10">
              <h3 className="text-sm uppercase tracking-widest">Promotion</h3>
              <h2 className="text-1xl font-bold md:text-2xl">Know Your Car Better</h2>
            </div>
          </div>

          <div className="relative w-full md:w-1/2 md:h-[280]">
            <img src="/img/inspeksi-2.png" alt="" className="w-full h-full object-cover "/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/25 hover:bg-black/10">
              <h3 className="text-sm uppercase tracking-widest">Promotion</h3>
              <h2 className="text-1xl font-bold md:text-2xl">Check Before You Choose</h2>
              <div className="f">
              </div>
            </div>
          </div>
        </div>
    )
}