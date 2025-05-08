import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
{
  /* Jika ada penambahan ikon maka tambahkan disini jangan import ulang*/
}

export default function Hero() {
  const handleSubmitToWhatsApp = () => {
    const message = `Halo, saya ingin memesan jasa inspeksi mobil `;

    const phoneNumber = '62895380067457';
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, '_blank');
  };
  
  return (
    // <section
    //   className="relative text-white bg-cover bg-bottom max-h[100px"
    //   style={{ backgroundImage: "url(/img/streat.png)" }}
    // >
    //   <div className="absolute inset-0 bg-black/30 pointer-events-none" />
    //   <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-sm">
    //     <div className="flex items-center gap-4 mt-5 md:mt-0">
    //       <img
    //         src="/img/logo.png"
    //         alt="Logo"
    //         className="w-20 h-20  lg:w-24 lg:h-24 object-contain"
    //       />
    //       <div>
    //         <h1 className="font-semibold text-xl md:text-[16px] lg:text-lg">Jasa Inspeksi Jogja</h1>
    //       </div>
    //     </div>

    //     <div className="hidden md:flex justify-between gap-8 mt-4 md:mt-0 ">
    //       <div className="flex items-center gap-2">
    //         <PhoneIcon className="h-4 w-4 mt-1" />
    //         <div>
    //           <span>+62 814-5623-4999</span>
    //         </div>
    //       </div>
    //       <div>|</div>
    //       <div className="flex gap-3">
    //         <a
    //           href="https://instagram.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaInstagram className="w-5 h-5 hover:text-orange-400" />
    //         </a>
    //         <a
    //           href="https://facebook.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //         >
    //           <FaFacebookF className="w-5 h-5 hover:text-orange-400" />
    //         </a>
    //       </div>
    //     </div>
    //   </nav>

    //   <div className="relative z-10 px-4 mt-18 md:mt-10 md:flex md:px-18 items-end lg:items-center gap-6">
    //     <div className="text-center mb-10 md:text-start md:max-w-1/2 lg:p-10">
    //       <h1 className="text-lg text-[#ffffff] font-bold md:text-lg lg:text-3xl lg:mb-1">Beli mobil bekas? </h1>
    //       <h1 className="text-lg text-[#ffffff] font-bold md:text-lg lg:text-3xl mb-2 lg:mb-5">Biar kami bantu cekin dulu!</h1>
    //       <div className="text-center md:text-start lg:max-w-[350]">
    //         <p className="text-sm text-[#f4f4f4] lg:text-base mb-4 md:text-white">Inspeksi Mobil Jogja hadir untuk bantu kamu, cek kondisi mobil secara menyeluruh. Mulai dari bodi, mesin, interior, sampai dokumen. <br/>Harga Mulai dari: </p>
    //       </div>
    //       <h1 className="text-xl text-white font-bold my-4 lg:text-[28px]">Rp 399.900</h1>
    //       <button onClick={handleSubmitToWhatsApp} className="px-4 py-3 md:px-3 md:py-2 mt-2 bg-blue-500 rounded-lg transform transition-all duration-200 hover:scale-105 hover:bg-blue-900 drop-shadow-md text-sm md:text-base font-semibold cursor-pointer">
    //         Hubungi Sekarang
    //       </button>
    //     </div>
    //     <div className="order-first">
    //       <img
    //         className="-scale-x-100"
    //         src="/img/Car1_homepage.png"
    //       />
    //     </div>
    //   </div>

    //   <div className="relative mt-2 -bottom-15 mb-30 md:mb-40 rounded-lg flex flex-wrap justify-evenly gap-5 md:gap-30 mx-auto  md:max-w-250 text-center py-8 bg-white shadow-md border-1 border-gray-200">
    //     <div>
    //       <div className="text-xl md:text-3xl font-bold text-orange-600">
    //         500
    //       </div>
    //       <div className="text-sm md:text-lg text-black ">Inspeksi Selesai</div>
    //     </div>
    //     <div>
    //       <div className="text-xl md:text-3xl font-bold text-orange-600">
    //         299
    //       </div>
    //       <div className="text-sm md:text-lg text-black ">Jumlah Pelanggan</div>
    //     </div>
    //     <div>
    //       <div className="text-xl md:text-3xl font-bold text-orange-600">
    //         150
    //       </div>
    //       <div className="text-sm md:text-lg text-black ">Rekan Dealer</div>
    //     </div>
    //   </div>

    // </section>
    <section
      className="relative text-white bg-cover bg-bottom-left h-screen"
      style={{ backgroundImage: "url(/img/hero2.png)" }} 
    >
      <div className="absolute inset-0 bg-black/25">
        <nav className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-sm">
          <div className="flex items-center gap-4 mt-5 md:mt-0">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-20 h-20  lg:w-24 lg:h-24 object-contain"
          />
          <div>
            <h1 className="font-semibold text-xl md:text-[16px] lg:text-lg text-white">Jasa Inspeksi Jogja</h1>
          </div>
          </div>
          <div className="hidden md:flex justify-between gap-8 mt-4 md:mt-0 text-white">
          <div className="flex items-center  gap-2">
            <PhoneIcon className="h-4 w-4" />
            <div>
              <span className="font-semibold">+62 814-5623-4999</span>
            </div>
          </div>
          <div>|</div>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="w-5 h-5 text-white hover:text-[#1c296a] " />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF className="w-5 h-5 text-white hover:text-[#1c296a]" />
            </a>
          </div>
          </div>
        </nav>

        {/* <div className="relative z-10 px-4 py-14 md:mt-10 md:px-18"> */}
        <div className="relative z-10 px-4 py-14 md:mt-10 md:-mb-10 md:px-18 lg:mt-0 lg:-mb-10">
          <div className="text-center ">
            <h1 className="text-xl md:text-3xl text-white font-bold  lg:mb-1">Beli mobil bekas? </h1>
            <h1 className="text-xl text-white font-bold md:text-3xl mb-2 md:mb-5">Biar kami bantu cekin dulu!</h1>
            <p className="text-lg text-[#f4f4f4] font-semibold md:text-xl mb-4">Harga Mulai dari:</p>
            <h1 className="text-xl md:text-2xl text-white font-bold my-4 lg:text-2xl">Rp 399.900</h1>
            <button onClick={handleSubmitToWhatsApp} className="px-4 py-3 md:px-3 md:py-2 mt-2 bg-blue-500 rounded-lg transform transition-all duration-200 hover:scale-105 hover:bg-blue-900 drop-shadow-md text-sm md:text-base font-semibold cursor-pointer">
              Hubungi Sekarang
            </button>
          </div>
        </div>
        <div className="absolute -bottom-10 md:-bottom-5 left-1/2 transform -translate-x-1/2 flex flex-wrap justify-evenly gap-4 text-center p-5  w-full md:p-5 md:gap-30 md:max-w-250 md:rounded-lg  bg-white shadow-md border border-gray-200">
          <div>
            <div className="text-xl md:text-3xl font-bold text-orange-600">
              500
            </div>
            <div className="text-sm md:text-lg text-black ">Inspeksi Selesai</div>
          </div>
          <div>
            <div className="text-xl md:text-3xl font-bold text-orange-600">
              299
            </div>
            <div className="text-sm md:text-lg text-black ">Jumlah Pelanggan</div>
          </div>
          <div>
            <div className="text-xl md:text-3xl font-bold text-orange-600">
              150
            </div>
            <div className="text-sm md:text-lg text-black ">Rekan Dealer</div>
          </div>
        </div>
      </div>
    </section>
  );
}
