export default function Service({ onOpenModal }) {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-14 lg:px-8 my-5 md:my-20">
            <div className="my-2 md:my-5">
                <p className="text-md font-bold md:text-xl">Layanan Kami</p>
                <div className="yellow-bar"></div>
            </div>
            <div className="py-5 md:py-10 flex flex-wrap justify-center gap-7 md:gap-7" data-aos="fade-up">
                <div className="card bg-base-100 shadow-lg max-w-70 mx-auto md:mx-0 md:max-w-75  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body border-gray-300 border-1 bg-white text-center rounded-xl py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-md py-2 font-medium uppercase md:text-xl">Reguler Car</h2>
                        <p className="text-black text-xs px-1 min-h-15 md:min-h-25 md:text-sm">City car, small sedan ( contoh : Honda Jazz, Toyota Avanza, Daihatsu Xenia ), dsb</p>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-50 md:max-h-50" src="/img/regulercar_layanankami.png"alt="regulercar" />
                        <p className="uppercase text-base text-amber-500 font-medium my-3 md:text-xl">Promo</p>
                        <p className="uppercase text-base text-gray-500 line-through font-medium md:text-xl">RP 439.900</p>
                        <p className="uppercase text-md text-black font-bold my-3 md:text-2xl transform transition-all duration-200 group-hover:scale-105">RP 399.000</p>
                        <button onClick={onOpenModal} className="uppercase rounded-lg bg-amber-500 p-3 font-medium text-sm text-black poin md:text-base transform transition-all duration-200 hover:scale-105 hover:bg-amber-900 hover:text-white cursor-pointer">Booking Sekarang</button>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-70 mx-auto md:mx-0 md:max-w-75  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body border-gray-300 border-1 bg-white text-center rounded-xl py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-md py-2 font-medium uppercase md:text-xl">Premium Car</h2>
                        <p className="text-black text-xs px-1 min-h-15 md:min-h-25 md:text-sm">Full - size sedan, SUV ( contoh : Mazda CX-5, Toyota Fortuner, Nissan X-Train, Honda Accord ), dsb</p>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-50 md:max-h-50" src="/img/premiumcar_layanankami.png"alt="premiumcar" />
                        <p className="uppercase text-base text-amber-500 font-medium my-3 md:text-xl">Promo</p>
                        <p className="uppercase text-base text-gray-500 line-through font-medium md:text-xl">RP 519.900</p>
                        <p className="uppercase text-md text-black font-bold my-3 md:text-2xl transform transition-all duration-200 group-hover:scale-105">RP 459.000</p>
                        <button onClick={onOpenModal} className="uppercase rounded-lg bg-amber-500 p-3 font-medium text-sm text-black poin md:text-base transform transition-all duration-200 hover:scale-105 hover:bg-amber-900 hover:text-white cursor-pointer">Booking Sekarang</button>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-70 mx-auto md:mx-0 md:max-w-75  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body border-gray-300 border-1 bg-white text-center rounded-xl py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-md py-2 font-medium uppercase md:text-xl">Luxury & Older Car</h2>
                        <p className="text-black text-xs px-1 min-h-15 md:min-h-25 md:text-sm">Mobil Eropa, Luxury MPV ( contoh: Toyota Alphard, Audi, BMW), Mobil usia 15 tahun ke atas), dsb</p>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-50 md:max-h-50" src="/img/luxurycar_layanankami.png"alt="luxurycar" />
                        <p className="uppercase text-base text-amber-500 font-medium my-3 md:text-xl">Promo</p>
                        <p className="uppercase text-base text-gray-500 line-through font-medium md:text-xl">RP 659.900</p>
                        <p className="uppercase text-md text-black font-bold my-3 md:text-2xl transform transition-all duration-200 group-hover:scale-105">RP 550.000</p>
                        <button onClick={onOpenModal} className="uppercase rounded-lg bg-amber-500 p-3 font-medium text-sm text-black poin md:text-base transform transition-all duration-200 hover:scale-105 hover:bg-amber-900 hover:text-white cursor-pointer">Booking Sekarang</button>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}