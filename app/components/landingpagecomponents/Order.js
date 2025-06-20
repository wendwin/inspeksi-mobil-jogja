export default function Order({ onOpenModal }){
    return (
        <div className="bg-[#192459]">
            <div className="py-10 md:flex md:items-center text-start  md:max-w-5xl md:mx-auto">
                <div className="my-6 px-4 mx-auto md:order-2 ">
                    <h1 className="mb-5 text-center text-xl md:text-2xl md:mb-8 font-semibold text-white">3 Langkah Mudah  Memesan Jasa Inspeksi </h1>
                    <div className="flex md:justify-start justify-center items-center gap-4 mb-6">
                        <img src="/img/report_icon.png" alt="booking-icon" className="w-15 h-15"/>
                        <div className="text-white">
                            <h5 className="text-base font-semibold mb-1">Pilih Paket & Isi Formulir</h5>
                            <p className="text-sm">Tentukan lokasi & waktu inspeksi.</p>
                        </div>
                    </div>
                    <div className="flex md:justify-start justify-center items-center gap-4 mb-6">
                        <img src="/img/inspeksi_icon.png" alt="" className="w-15 h-15"/>
                        <div className="text-white">
                            <h5 className="text-base font-semibold mb-1">Tim Kami Datang ke Lokasi</h5>
                            <p className="text-sm">Mekanik ahli memeriksa 150+ titik penting mobil Anda.</p>
                        </div>
                    </div>
                    <div className="flex md:justify-start justify-center items-center gap-4 mb-6">
                        <img src="/img/stats-report.svg" alt="" className="w-15 h-15 "/>
                        <div className=" text-white">
                            <h5 className="text-base font-semibold mb-1">Terima Laporan Lengkap</h5>
                            <p className="text-sm">Hasil inspeksi dikirim via email & WhatsApp – jujur, rinci, & mudah dipahami.</p>
                        </div>
                    </div>
                    <a href="#">
                        <div className="mt-12 flex justify-center">
                            <button onClick={onOpenModal} className="py-2 px-6 rounded-full bg-[#FDB913] font-semibold cursor-pointer hover:bg-[#C8910C]">Pesan Sekarang</button>
                        </div>
                    </a>
                </div>       
                <div className="max-w-md md:flex-2/4 md:order-1">
                    <img className="block mx-auto w-4/5 md:w-full" src="/img/inspector1_homepage.webp" alt="" />
                </div>    
            </div>
        </div>
    );
}