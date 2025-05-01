import { PhoneIcon, MapPinIcon } from "@heroicons/react/24/outline";
import { FaInstagram, FaFacebookF } from "react-icons/fa";     {
  /* Jika ada penambahan ikon maka tambahkan disini jangan import ulang*/
}

export default function Hero() {
  return (
    <section
      className="relative text-white bg-cover bg-center max-h[80px"
      style={{ backgroundImage: "url(/img/streat.png)" }}
    >
      {/* Overlay hitam transparan */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Header */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 text-sm">
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

      {/* Bagian Bulatan */}
      <div className="w-full flex justify-end">
        <div className="relative w-64 h-64 mx-auto flex items-center justify-center translate-x-[100px] translate-y-20">
          <div className="absolute w-full h-full rounded-full bg-white opacity-20 z-0" />
          <div className="absolute w-[85%] h-[85%] rounded-full bg-yellow-300 opacity-30 z-0" />
          <div className="relative bg-orange-500 w-56 h-56 rounded-full shadow-lg flex flex-col justify-center items-center text-white text-center px-4 z-10">
            <div className="text-sm">Harga mulai dari</div>
            <div className="text-2xl font-bold">Rp 500.000</div>
            <p className="mt-2 text-xs">
              Ingin tahu kondisi mobil impianmu?
              <br />
              Kami bantu inspeksi mobil bekas agar Anda lebih yakin saat
              membeli.
            </p>
            <a
              href="https://wa.me/08XXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="mt-4 bg-white text-orange-600 font-semibold px-2 py-1 rounded-full">
                Contact WA
              </button>
            </a>
          </div>
        </div>
      </div>

      {/* Bagian Mobil*/}
      <div className="relative z-10 flex justify-center px-6">
        <img
          src="/img/car1.png"
          alt="Mobil"
          className="w-[250px] md:w-[450px] mr-40"
        />
      </div>
    </section>
  );
}
