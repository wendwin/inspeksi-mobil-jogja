'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Star, StarHalf, StarOff } from 'lucide-react'

export default function Testimoni() {
  return (
    <section className='max-w-7xl mx-auto px-4 md:px-14 lg:px-8 my-16 md:my-20'>
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
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3 text-base'>“Proses mudah & teknisinya detail banget. Worth every penny.”</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Arif</p>
                    <p className='text-xs'>Bekasi</p>
                </div>
            </div>
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3 text-base'>“Beruntung saya pakai CekAuto.id. Mobil terlihat bagus, tapi ternyata pernah tabrakan besar. Akhirnya batal beli. Terima kasih!” </p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Rina</p>
                    <p className='text-xs'>Jakarta</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3 text-base'>“Proses mudah & teknisinya detail banget. Worth every penny.”</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Arif</p>
                    <p className='text-xs'>Bekasi</p>
                </div>
            </div>
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3 text-base'>“Beruntung saya pakai CekAuto.id. Mobil terlihat bagus, tapi ternyata pernah tabrakan besar. Akhirnya batal beli. Terima kasih!” </p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Rina</p>
                    <p className='text-xs'>Jakarta</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='flex flex-wrap justify-center gap-5'>
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni1.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3'>“Proses mudah & teknisinya detail banget. Worth every penny.”</p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Arif</p>
                    <p className='text-xs'>Bekasi</p>
                </div>
            </div>
            <div className="relative flex flex-col min-h-[150px] md:max-w-120 max-w-70 justify-between p-5 bg-[#EEEEEE] rounded-lg shadow my-10">
                <div>
                    <div className='relative flex justify-between'>
                    <img className='w-10 md:w-15 -mt-10' src='/img/testimoni2.png' />
                    <img className='w-5 md:w-10 -mt-15' src='/img/kutip.svg' />
                    </div>
                    <p className='text-justify my-3'>“Beruntung saya pakai CekAuto.id. Mobil terlihat bagus, tapi ternyata pernah tabrakan besar. Akhirnya batal beli. Terima kasih!” </p>
                </div>
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-1 text-yellow-400 mb-2">
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    <Star className="w-5 h-5 fill-yellow-400" />
                    </div>
                    <p className='text-sm'>Rina</p>
                    <p className='text-xs'>Jakarta</p>
                </div>
            </div>
        </div>
      </SwiperSlide>
    </Swiper>
    </section>
  )
}
