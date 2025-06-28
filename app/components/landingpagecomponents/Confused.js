export default function Confused() {

  return (
    // <div className="max-w-6xl mx-auto px-4 md:px-14 lg:px-8 my-20 lg:my-28 md:flex justify-evenly items-center md:gap-18" data-aos="fade-up">
    //     <div className="relative mb-5 md:mb-0 mt-25 md:mt-0">
    //       <div className="px-5 p-7 bg-amber-400 text-base md:text-xl font-semibold absolute -top-10 md:-left-10 sm:left-10 ">Tim Ahli di Balik CekAuto.id</div>
    //       <img src="img/timahli.png" className="max-w-xs mx-auto md:mx-o md:max-w-lg"></img>
    //     </div>
    //     <div>
    //       <p className="text-justify text-sm md:text-lg p-5">
    //         Kami terdiri dari mekanik berpengalaman, insinyur otomotif, dan pecinta mobil yang berdedikasi membantu Anda membeli mobil bekas dengan penuh keyakinan. Tanpa afiliasi dengan showroom mana pun, kami menjunjung tinggi objektivitas demi kepentingan Anda.
    //       </p>
    //     </div>
    // </div>

    <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-12 my-24 md:my-24 flex flex-col md:flex-row items-center justify-between gap-10" data-aos="fade-up">
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <div className="px-6 py-4 bg-amber-400 text-base md:text-xl font-semibold absolute -top-8 left-0 md:-left-10 sm:left-10">
          Tim Ahli di Balik CekAuto.id
        </div>
        <img
          src="img/timahli.png"
          alt="Tim Ahli"
          className="max-w-xs md:max-w-md w-full mx-auto md:mx-0"
        />
      </div>

      <div className="w-full md:w-1/2">
        <p className="text-base md:text-lg text-justify px-2 md:px-0">
          Kami terdiri dari mekanik berpengalaman, insinyur otomotif, dan pecinta mobil yang berdedikasi membantu Anda membeli mobil bekas dengan penuh keyakinan. Tanpa afiliasi dengan showroom mana pun, kami menjunjung tinggi objektivitas demi kepentingan Anda.
        </p>
      </div>
    </div>

  );
}    