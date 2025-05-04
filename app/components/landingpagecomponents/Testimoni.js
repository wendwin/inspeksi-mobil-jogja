'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, StarHalf, StarOff } from 'lucide-react'

export default function Testimoni() {
  return (
    <section className='max-w-7xl mx-auto px-4 md:px-14 lg:px-8 my-5 md:my-20'>
        <div className="my-2 md:my-5">
            <p className="text-md font-bold md:text-xl">Testimoni</p>
            <div className="yellow-bar"></div>
        </div>

    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 5000 }}
      loop={true}
      className="my-5 md:my-15 md:max-w-290"
    >
      <SwiperSlide>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
                <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Awalnya saya ragu karena beli mobil bekas itu rawan tipu. Tapi setelah pakai jasa inspeksi ini, saya jadi lebih tenang. Laporannya lengkap banget, sampai dikasih estimasi biaya perbaikan! Akhirnya bisa beli mobil yang beneran layak pakai. Terima kasih tim inspeksi Jogja!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Rizky Ardiansyah</p>
                <p className='text-xs'>Pecinta Mobil Bekas</p>
            </div>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
            <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Saya nggak ngerti mesin sama sekali, takut ditipu showroom. Untung ada jasa inspeksi ini, teknisinya ramah, dijelasin pelan-pelan. Bahkan dikasih saran alternatif mobil lain yang lebih aman. Recommended banget buat yang awam kayak saya!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Nurul Septia</p>
                <p className='text-xs'>Pembeli Mobil Mewah</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
                <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Awalnya saya ragu karena beli mobil bekas itu rawan tipu. Tapi setelah pakai jasa inspeksi ini, saya jadi lebih tenang. Laporannya lengkap banget, sampai dikasih estimasi biaya perbaikan! Akhirnya bisa beli mobil yang beneran layak pakai. Terima kasih tim inspeksi Jogja!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Rizky Ardiansyah</p>
                <p className='text-xs'>Pecinta Mobil Bekas</p>
            </div>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
            <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Saya nggak ngerti mesin sama sekali, takut ditipu showroom. Untung ada jasa inspeksi ini, teknisinya ramah, dijelasin pelan-pelan. Bahkan dikasih saran alternatif mobil lain yang lebih aman. Recommended banget buat yang awam kayak saya!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Nurul Septia</p>
                <p className='text-xs'>Pembeli Mobil Mewah</p>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
                <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Awalnya saya ragu karena beli mobil bekas itu rawan tipu. Tapi setelah pakai jasa inspeksi ini, saya jadi lebih tenang. Laporannya lengkap banget, sampai dikasih estimasi biaya perbaikan! Akhirnya bisa beli mobil yang beneran layak pakai. Terima kasih tim inspeksi Jogja!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Rizky Ardiansyah</p>
                <p className='text-xs'>Pecinta Mobil Bekas</p>
            </div>
            <div className="relative p-5 max-w-70 mx-auto md:max-w-120 h-auto bg-[#EEEEEE] rounder-lg shadow my-10">
            <div className='relative flex justify-between'> 
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png'></img>
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg'></img>
                </div>
                <p className='text-justify my-3'>“Saya nggak ngerti mesin sama sekali, takut ditipu showroom. Untung ada jasa inspeksi ini, teknisinya ramah, dijelasin pelan-pelan. Bahkan dikasih saran alternatif mobil lain yang lebih aman. Recommended banget buat yang awam kayak saya!”</p>
                <div className="flex items-center gap-1 text-yellow-400 mb-3">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                </div>
                <p className='text-sm'>Nurul Septia</p>
                <p className='text-xs'>Pembeli Mobil Mewah</p>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}
