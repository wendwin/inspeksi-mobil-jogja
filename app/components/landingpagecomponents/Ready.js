export default function Ready( {onOpenModal} ){
    return (
        <div className=" mx-auto my-20 lg:my-28 md:flex justify-between items-center" data-aos="fade-up">
            <div className="p-5 md:p-0 md:px-15 md:max-w-2xl">
                <h1 className=" text-2xl text-[#192459] md:text-4xl font-semibold">Siap Beli Mobil Bekas Tanpa Rasa Was-Was?</h1>
                <p className="text-[#FDB913] my-5">Pesan inspeksi hari ini dan pastikan mobil incaran Anda benar-benar layak!</p>
                <div className="flex justify-center md:justify-start md:flex-none">
                    <button onClick={onOpenModal} className=" py-3 px-5 bg-[#FDB913] rounded-lg my-10 md:my-0 text-white hover:bg-[#C8910C] transform transition-all transition-200">
                        Mulai Inspeksi Sekarang
                    </button>
                </div>
            </div>
            <div className="flex md:flex-none justify-end items-end">
                <img src="img/ready.png" alt="siap_beli_mobil" className="max-w-80 md:max-w-2xl"></img>
            </div>
        </div>
    );
}