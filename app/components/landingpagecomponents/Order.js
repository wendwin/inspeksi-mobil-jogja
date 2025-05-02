export default function Order(){
    return (
        <div className="bg-[#192459]">
            <div className="pt-3 md:flex md:items-center  md:max-w-5xl md:mx-auto">
                <div className="my-6 px-4 mx-auto md:order-2 ">
                    <h1 className="mb-5 text-center text-xl md:text-2xl md:mb-8 font-semibold text-white">Cara Memesan Jasa Inspeksi Jogja</h1>
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <img src="/img/booking_icon.png" alt="booking-icon" className="w-15 h-15"/>
                        <div className="text-white">
                            <h5 className="text-base font-semibold mb-1">Booking Inspeksi</h5>
                            <p className="text-sm">Pelanggan mengisi formulir atau menghubungi tim untuk menjadwalkan inspeksi sesuai lokasi dan waktu yang diinginkan</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <img src="/img/inspeksi_icon.png" alt="" className="w-15 h-15"/>
                        <div className="text-white">
                            <h5 className="text-base font-semibold mb-1">Pelaksanaan Inspeksi</h5>
                            <p className="text-sm">Pelanggan mengisi formulir atau menghubungi tim untuk menjadwalkan inspeksi sesuai lokasi dan waktu yang diinginkan</p>
                        </div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-6">
                        <img src="/img/report_icon.png" alt="" className="w-15 h-15"/>
                        <div className=" text-white">
                            <h5 className="text-base font-semibold mb-1">Laporan Dikirim</h5>
                            <p className="text-sm">Hasil inspeksi lengkap dikirim ke pelanggan melalui WhatsApp atau email, disertai foto dan rekomendasi teknis.</p>
                        </div>
                    </div>
                    <a href="#">
                        <div className="mt-12 flex justify-center">
                            <button className="py-2 px-6 rounded-full bg-[#FDB913] font-semibold cursor-pointer hover:bg-[#C8910C]">Pesan Sekarang</button>
                        </div>
                    </a>
                </div>       
                <div className="max-w-md md:flex-2/4 md:order-1">
                    <img className="block mx-auto" src="/img/inspector1_homepage.png" alt=""/>
                </div>    
            </div>
        </div>
    );
}