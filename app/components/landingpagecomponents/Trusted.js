export default function Trusted() {
    return (
        <section className="mt-24 mb-20  md:mb-18 lg:mt-28">
            <p className="text-lg my-5 bg-white text-[#192459] text-center font-bold md:text-2xl md:my-15">Mengapa CekAuto.id?</p>
            <div className="max-w-6xl mx-auto mb-10 p-5">
                <h2 className="text-lg md:text-2xl font-semibold text-black mb-2">Jangan Sampai Salah Beli Mobil Bekas.</h2>
                <p className="text-justify">Di balik bodi mulus, bisa tersembunyi banyak masalah. Dengan tim mekanik berpengalaman, <span className="font-bold">CekAuto.id</span> membantu Anda mengetahui kondisi sebenarnya mobil incaran Anda — sebelum menyesal kemudian.</p>
            </div>
            <div className="md:mx-0 flex flex-wrap justify-center mt-10 md:my-0 gap-5 md:gap-12" data-aos="fade-up">
                <div className="card bg-base-100 shadow-lg max-w-40 lg:my-5 md:max-w-70 ">
                    <div className="card-body bg-[#192459] text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85 transform transition-all duration-200 hover:scale-105 hover:bg-blue-900">
                        <h2 className="card-title text-white md:min-h-19 text-sm py-2 font-bold md:text-xl">Inspeksi Mobil Menyeluruh & Akurat</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20" src="/img/teknisi.svg"alt="teknisi" />
                        <p className="text-white text-xs md:text-base">Cek Mesin, Transmisi, Kaki-Kaki, Interior, hingga Riwayat Tabrakan</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-40 lg:my-5 md:max-w-70 ">
                    <div className="card-body bg-[#192459] text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85 transform transition-all duration-200 hover:scale-105 hover:bg-blue-900">
                        <h2 className="card-title text-white text-sm md:min-h-19 py-2 font-bold md:text-xl">Laporan Digital Lengkap dengan Bukti Visual</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20 " src="/img/laporan.svg"alt="laporan" />
                        <p className="text-white text-xs md:text-base">Laporan Digital Lengkap + Foto</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-40 lg:my-5 md:max-w-70 ">
                    <div className="card-body bg-[#192459] text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85 transform transition-all duration-200 hover:scale-105 hover:bg-blue-900">
                        <h2 className="card-title text-white text-sm py-2 md:min-h-19 font-bold md:text-xl">Inspeksi Fleksibel, Langsung di Lokasi Anda</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20" src="/img/pemeriksaan.svg"alt="pemeriksaan" />
                        <p className="text-white text-xs md:text-base">Bebas Titik Buta – Kami inspeksi di tempat Anda atau penjual</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}