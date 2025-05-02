export default function Trusted() {
    return (
        <section className="container mx-auto my-5">
            <p className="text-lg my-5 bg-white text-black text-center font-bold md:text-2xl md:my-20">Jasa Inspeksi Jogja Paling Terpercaya</p>
            <div className="flex flex-col justify-center md:flex-row gap-10">
                <div className="card bg-base-100 shadow-lg max-w-50 my-5 mx-auto md:max-w-75 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:h-100">
                        <h2 className="card-title text-white text-lg py-2 font-bold md:text-xl">Teknisi Berpengalaman</h2>
                        <img className="mx-auto py-5 md:py-10" src="/img/teknisi.svg"alt="teknisi" />
                        <p className="text-white text-sm md:text-base">Dikerjakan oleh teknisi profesional dengan latar belakang bengkel resmi dan pengalaman puluhan inspeksi.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-50 my-5 mx-auto md:max-w-75 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:h-100">
                        <h2 className="card-title text-white text-lg py-2 font-bold md:text-xl">Pemeriksaan Menyeluruh</h2>
                        <img className="mx-auto py-5 md:py-10" src="/img/pemeriksaan.svg"alt="pemeriksaan" />
                        <p className="text-white text-sm md:text-base">Cek lebih dari 150+ titik kendaraan, mulai dari mesin, bodi, interior, kaki-kaki, hingga legalitas dokumen.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
                <div className="card bg-base-100 shadow-lg max-w-50 my-5 mx-auto md:max-w-75 ">
                    <div className="card-body bg-primary-color text-center rounded-xl py-5 px-2 md:h-100">
                        <h2 className="card-title text-white text-lg py-2 font-bold md:text-xl">Laporan Lengkap & Transparan</h2>
                        <img className="mx-auto py-5 md:py-10" src="/img/laporan.svg"alt="laporan" />
                        <p className="text-white text-sm md:text-base">Dapatkan laporan tertulis + dokumentasi foto kondisi mobil, disertai rekomendasi jujur tanpa ditutup-tutupi.</p>
                        <div className="card-actions justify-end">
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}