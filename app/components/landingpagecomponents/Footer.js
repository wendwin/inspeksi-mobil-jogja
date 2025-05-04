import { MapPin, Instagram, Facebook, Twitter } from 'lucide-react'

export default function Footer() {
    return (
      <section>
        {/* <footer className="container px-4 md:px-0 mx-auto mt-20 md:mt-50"> */}
        <footer className="max-w-7xl mx-auto px-4 md:px-14 lg:px-8 mt-20 md:mt-40">
            <div className="my-2 md:my-5">
                <p className="text-md font-bold md:text-xl">Kami Siap Membantu Anda</p>
                <div className="yellow-bar"></div>
            </div>
                <div className='flex flex-col md:flex-row justify-between my-5 md:my-10'>
                    <div className='md:w-105'>
                        <p className='text-sm md:text-lg font-bold'>Hubungi <span className="underline">08145623499</span></p>
                        <p className='text-xs md:text-base'>Konsultasi & Booking Inspeksi Mobil</p>
                        <p className='text-xs md:text-base'>Senin-Jumat: 08.00-18.00, Sabtu: 08.00-12.00</p>
                    </div>
                    <div className='md:w-105 mt-3 md:mt-0'>
                        <p className='text-sm md:text-lg font-bold'>Lokasi Kami</p>
                        <div className='md:flex'>
                            <MapPin className='w-10 hidden md:block'></MapPin>
                            <p className='text-xs md:text-base'>Jl. Karanglo No.3, Plumbon,  Kec. Banguntapan, Kabupaten Bantul, Daerah Istimewa Yogyakarta 55173</p>
                        </div>
                    </div>
                </div>
                {/*Sosmed */}
                <div className='flex gap-5 my-5 mb-5 md:mb-10'>
                    <a href=''><Instagram></Instagram></a>
                    <a href=''><Facebook></Facebook></a>
                    <a href=''><Twitter></Twitter></a>
                </div>
        </footer>
                <hr></hr>
                <p className='text-xs md:text-sm text-center mt-2 '>© Copyright 2025 by JIMJ. Developed by <span className='text-amber-500'>codelens.id</span></p>
        <img className='w-full object-cover' src='/img/footer.png'></img>
      </section>
    );
  }
  