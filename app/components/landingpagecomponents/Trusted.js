export default function Trusted() {
    return (
        <section className=" my-5 md:mb-25">
            <p className="text-lg my-5 bg-white text-black text-center font-bold md:text-2xl md:my-20">Jasa Inspeksi Jogja Paling Terpercaya</p>
            <div className="md:mx-0 flex flex-wrap justify-center my-10 md:my-0 gap-5 md:gap-12">
                <div className="card bg-base-100 shadow-lg max-w-40 md:my-5 md:max-w-70 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85">
                        <h2 className="card-title text-white md:min-h-19 text-sm py-2 font-bold md:text-xl">Teknisi Berpengalaman</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20" src="/img/teknisi.svg"alt="teknisi" />
                        <p className="text-white text-xs md:text-base">Dikerjakan oleh teknisi profesional dengan latar belakang bengkel resmi dan pengalaman puluhan inspeksi.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-40 md:my-5 md:max-w-70 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85">
                        <h2 className="card-title text-white text-sm md:min-h-19 py-2 font-bold md:text-xl">Pemeriksaan Menyeluruh</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20 " src="/img/pemeriksaan.svg"alt="pemeriksaan" />
                        <p className="text-white text-xs md:text-base">Cek lebih dari 150+ titik kendaraan, mulai dari mesin, bodi, interior, kaki-kaki, hingga legalitas dokumen.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-40 md:my-5 md:max-w-70 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:px-4 md:min-h-85">
                        <h2 className="card-title text-white text-sm py-2 md:min-h-19 font-bold md:text-xl">Laporan Lengkap & Transparan</h2>
                        <img className="mx-auto py-5 max-w-15 md:py-5 md:max-w-20" src="/img/laporan.svg"alt="laporan" />
                        <p className="text-white text-xs md:text-base">Dapatkan laporan tertulis + dokumentasi foto kondisi mobil, disertai rekomendasi jujur tanpa ditutup-tutupi.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}