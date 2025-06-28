export default function Service({ onOpenModal }) {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-14 lg:px-8 mb-12 md:my-20">
            <div className="my-6 md:my-6">
                <p className="text-md font-bold md:text-xl">Layanan Kami</p>
                <div className="yellow-bar"></div>
            </div>
            {/* <div className="py-5 md:py-10 flex flex-wrap justify-center gap-7 md:gap-10" data-aos="fade-up">
                <div className="card bg-base-100 border-gray-300 border-1 rounded-xl p-1 shadow-lg max-w-40 mx-auto md:mx-0 md:max-w-2xs  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body  bg-white text-center   py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-2xl">Inspeksi Lengkap 150+ Titik</h2>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-60 md:max-h-60" src="/img/layanan1.png"alt="inspeksi_lengkap" />
                        <p className=" text-xs text-black my-3 md:text-base transform transition-all duration-200 group-hover:scale-105">Dari mesin, kaki-kaki, kelistrikan, hingga interior dan eksterior. Kami cek semuanya</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-gray-300 border-1 rounded-xl p-1 shadow-lg max-w-40 mx-auto md:mx-0 md:max-w-2xs  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body  bg-white text-center   py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-2xl">Laporan Digital & Foto Detail</h2>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-60 md:max-h-60" src="/img/layanan2.png"alt="laporan_foto" />
                        <p className=" text-xs text-black my-3 md:text-base transform transition-all duration-200 group-hover:scale-105">Dapatkan hasil pemeriksaan langsung di HP Anda—lengkap, jelas, dan transparan.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 border-gray-300 border-1 rounded-xl p-1 shadow-lg max-w-40 mx-auto md:mx-0 md:max-w-2xs  transform transition-all duration-200 hover:scale-105 group">
                    <div className="card-body  bg-white text-center   py-5 px-2 md:min-h-95">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-2xl">Bisa Datang ke Lokasi Mobil</h2>
                        <img className="mx-auto py-5 md:py-8 -mt-6 max-w-35 max-h-35 md:max-w-60 md:max-h-60" src="/img/layanan3.png"alt="lokasi" />
                        <p className=" text-xs text-black my-3 md:text-base transform transition-all duration-200 group-hover:scale-105">Mobilnya di rumah penjual? Tenang, tim kami bisa ke sana.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div> */}


            <div className="flex flex-wrap justify-center gap-6 md:gap-10 py-5 md:py-10" data-aos="fade-up">
                {/* Card 1 */}
                <div className="card bg-base-100 border border-gray-300 rounded-xl p-1 shadow-lg transform transition-all duration-200 hover:scale-105 group w-full sm:w-[80%] md:basis-[45%] lg:basis-[30%] max-w-sm">
                    <div className="card-body bg-white text-center py-5 px-4">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-xl">
                            Inspeksi Lengkap 150+ Titik
                        </h2>
                        <img className="mx-auto py-3 md:py-6 max-w-[100px] md:max-w-[150px]" src="/img/layanan1.png" alt="inspeksi_lengkap" />
                        <p className=" text-black my-2 text-base transform transition-all duration-200 group-hover:scale-105">
                            Dari mesin, kaki-kaki, kelistrikan, hingga interior dan eksterior. Kami cek semuanya
                        </p>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="card bg-base-100 border border-gray-300 rounded-xl p-1 shadow-lg transform transition-all duration-200 hover:scale-105 group w-full sm:w-[80%] md:basis-[45%] lg:basis-[30%] max-w-sm">
                    <div className="card-body bg-white text-center py-5 px-4">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-xl">
                            Laporan Digital & Foto Detail
                        </h2>
                        <img className="mx-auto py-3 md:py-6 max-w-[100px] md:max-w-[150px]" src="/img/layanan2.png" alt="laporan_foto" />
                        <p className=" text-black my-2 text-base transform transition-all duration-200 group-hover:scale-105">
                            Dapatkan hasil pemeriksaan langsung di HP Anda lengkap, jelas dan transparan.
                        </p>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="card bg-base-100 border border-gray-300 rounded-xl p-1 shadow-lg transform transition-all duration-200 hover:scale-105 group w-full sm:w-[80%] md:basis-[45%] lg:basis-[30%] max-w-sm">
                    <div className="card-body bg-white text-center py-5 px-4">
                        <h2 className="card-title text-black text-base py-2 font-medium capitalize md:text-xl">
                            Bisa Datang ke Lokasi Mobil
                        </h2>
                        <img className="mx-auto py-3 md:py-6 max-w-[100px] md:max-w-[150px]" src="/img/layanan3.png" alt="lokasi" />
                        <p className=" text-black my-2 text-base transform transition-all duration-200 group-hover:scale-105">
                            Mobilnya di rumah penjual? Tenang, tim kami bisa ke sana.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    );
}