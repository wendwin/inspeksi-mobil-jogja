import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebookF } from "react-icons/fa";     {
  /* Jika ada penambahan ikon maka tambahkan disini jangan import ulang*/
}

export default function Hero() {
  return (
    <section
      className="relative text-white bg-cover bg-bottom max-h[100px"
      style={{ backgroundImage: "url(/img/streat.png)" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/20 z-0 pointer-events-none" />

      {/* Navbar
      <div className="relative z-3 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-sm">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12">
          <img
            src="/img/logo.png"
            alt="Logo"
            className="w-16 h-16 object-contain"
          />
          <div className="flex items-start gap-2">
            <MapPinIcon className="h-4 w-4 mt-1" />
            <div className="flex flex-col leading-tight">
              <span>Jl. Contoh No.123, Sleman</span>
              <span>Yogyakarta</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <PhoneIcon className="h-4 w-4 mt-1" />
            <div className="flex flex-col leading-tight">
              <span>0812-3456-7890</span>
              <span>0812-3456-7890</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-5 h-5 hover:text-orange-400" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-5 h-5 hover:text-orange-400" />
          </a>
        </div>
      </div>
       */}
      <div className="z-10 flex flex-col md:flex-row items-center">
        {/*Foto*/}
        <img className="-scale-x-90 md:w-260 object-cover md:-ml-40 md:-mb-10 md:mt-20 drop-shadow-md order-last md:order-first" src="/img/Car1_homepage.png"></img>
        <div className="md:max-w-140 max-w-70 order-first md:order-last text-justify md:text-start pt-20 md:pt-0">
          <p className="text-lg text-[#192459] md:text-3xl font-bold drop-shadow-md">Beli mobil bekas? Biar kami bantu cekin dulu!</p>
          <p className="text-base text-white md:text-xl my-3 drop-shadow-md">Inspeksi Mobil Jogja hadir untuk bantu kamu cek kondisi mobil secara menyeluruh. Mulai dari bodi, mesin, interior, sampai dokumen. Percayakan pada <span className="font-bold">Jasa Inspeksi  Jogja</span>, Harga Mulai dari :</p>
          <p className="text-lg text-white md:text-3xl font-bold my-3 md:my-4 drop-shadow-md">Rp 399.900</p>
          <button className="p-2 md:p-3 bg-blue-500 rounded-lg transform transition-all duration-200 hover:scale-105 hover:bg-blue-900 drop-shadow-md">Hubungi Sekarang</button>
        </div>
      </div>
        <div className="relative mt-2 -bottom-15 mb-30 md:mb-40 rounded-lg flex flex-wrap justify-center gap-5 md:gap-30 mx-auto  md:w-250 text-center py-8 bg-white shadow-md border-1 border-gray-200">
        <div>
          <div className="text-xl md:text-3xl font-bold text-orange-600">500</div>
          <div className="text-sm md:text-xl text-black ">Inspeksi Selesai</div>
        </div>
        <div>
          <div className="text-xl md:text-3xl font-bold text-orange-600">299</div>
          <div className="text-sm md:text-xl text-black ">Jumlah Pelanggan</div>
        </div>
        <div>
          <div className="text-xl md:text-3xl font-bold text-orange-600">150</div>
          <div className="text-sm md:text-xl text-black ">Rekan Dealer</div>
        </div>
      </div>
    </section>
  );
}
