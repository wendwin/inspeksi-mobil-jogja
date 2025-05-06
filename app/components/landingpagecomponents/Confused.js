export default function Confused(){
    const handleSubmitToWhatsApp = () => {
        const message = `Halo, saya ingin memesan jasa inspeksi mobil `;
    
        const phoneNumber = '62895380067457';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
      
        window.open(whatsappUrl, '_blank');
    };

    return (
      <div className="max-w-7xl mx-auto px-4 md:px-14 lg:px-8 my-20 lg:my-28 md:flex justify-evenly items-center md:gap-18">
        <div>
          <h1 className="text-xl font-bold text-[#192459] mb-1 md:text-2xl lg:text-3xl">
            Masih bingung atau ragu?
          </h1>
          <h5 className="text-base font-semibold text-[#192459] md:text-lg lg:text-xl">
            Tenang, tim kami siap diajak ngobrol! Konsultasi santai dulu aja,
            GRATIS!
          </h5>
          <div className="mt-5 flex gap-2 mb-3 ">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="md:text-sm lg:text-[16px] ">
              Bisa tanya apa aja soal mobil incaran kamu
            </p>
          </div>
          <div className="mt-3 flex gap-2 mb-3 ">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
        <div className="max-w-7xl mx-auto px-4 md:px-14 lg:px-8 my-20 lg:my-28 md:flex justify-evenly items-center md:gap-18">
            <div data-aos="fade-right">
                <h1 className="text-xl font-bold text-[#192459] mb-1 md:text-2xl lg:text-3xl">Masih bingung atau ragu?</h1>
                <h5 className="text-base font-semibold text-[#192459] md:text-lg lg:text-xl">Tenang, tim kami siap diajak ngobrol! Konsultasi santai dulu aja, GRATIS!</h5>
                <div className="mt-5 flex gap-2 mb-3 ">
                    <div className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className="md:text-sm lg:text-[16px] ">Bisa tanya apa aja soal mobil incaran kamu</p>
                </div>
                <div className="mt-3 flex gap-2 mb-3 ">
                    <div className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p p className="md:text-sm lg:text-[16px]">Langsung ditangani oleh teknisi berpengalaman, bukan admin biasa</p>
                </div>
                <div className="flex gap-2 mb-3 ">
                    <div className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className="md:text-sm lg:text-[16px]">Dibantu analisa risiko beli mobil tertentus</p>
                </div>
                <div className="flex gap-2 mb-3 ">
                    <div className="text-green-500">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </div>
                    <p className="md:text-sm lg:text-[16px]">Cocok buat kamu yang masih cari-cari mobil, belum yakin mau beli</p>
                </div>
                <div className="mt-15 flex justify-center">
                    <button onClick={handleSubmitToWhatsApp} className="py-2 px-6 rounded-full bg-[#FDB913] font-semibold cursor-pointer hover:bg-[#C8910C]">Konsultasi Sekarang</button>
                </div>
            </div>
            <div className="mt-16 md:mt-0" data-aos="fade-left">
                <img src="/img/car_confused.png" alt=""/>
>>>>>>> fa8940b0f207be872d013e1affcd89334a56e4be
            </div>
            <p p className="md:text-sm lg:text-[16px]">
              Langsung ditangani oleh teknisi berpengalaman, bukan admin biasa
            </p>
          </div>
          <div className="flex gap-2 mb-3 ">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="md:text-sm lg:text-[16px]">
              Dibantu analisa risiko beli mobil tertentus
            </p>
          </div>
          <div className="flex gap-2 mb-3 ">
            <div className="text-green-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-6"
              >
                <path
                  strokeLinecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <p className="md:text-sm lg:text-[16px]">
              Cocok buat kamu yang masih cari-cari mobil, belum yakin mau beli
            </p>
          </div>
          <div className="mt-15 flex justify-center">
            <button
              onClick={handleSubmitToWhatsApp}
              className="py-2 px-6 rounded-full bg-[#FDB913] font-semibold cursor-pointer hover:bg-[#C8910C]"
            >
              Konsultasi Sekarang
            </button>
          </div>
        </div>
        <div className="mt-16 md:mt-0">
          <img src="/img/car_confused.png" alt="" />
        </div>
      </div>
    );
}