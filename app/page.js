// File: pages ini adlaah halman yang di render CSR pertama kali aplikasi di jalankan
'use client'
import Hero from "./components/landingpagecomponents/Hero";
import Order from "./components/landingpagecomponents/Order";
import Trusted from "./components/landingpagecomponents/Trusted";
import Service from "./components/landingpagecomponents/Service";
import Testimoni from "./components/landingpagecomponents/Testimoni";
import Mitra from "./components/landingpagecomponents/Mitra";
import Footer from "./components/landingpagecomponents/Footer";
import Promotion from "./components/landingpagecomponents/Promotion";
import Modal from "./components/landingpagecomponents/Modal";
import { useState, useEffect } from "react";
import ImgCollection from "./components/landingpagecomponents/ImgCollection";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Confused from "./components/landingpagecomponents/Confused";
import Ready from "./components/landingpagecomponents/Ready";
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import CountNumber from "./components/landingpagecomponents/CountNumber";


// jika ada compoenent baru maka lakukan import disini sesuikan nama folder dan filenya

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWhatsApp, setShowWhatsApp] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      AOS.init();
      AOS.refresh();
    }
  }, []);
  


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowWhatsApp(true);
      } else {
        setShowWhatsApp(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup listener saat unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <main className="font-sans">
      {/* tambahkan class mellaui props disni class di dapat dri compoenent yang bersangkuatan */}
      <Hero />
      <CountNumber/>
      <Trusted />
      <Service onOpenModal={() => setIsModalOpen(true)} />
      <Order onOpenModal={() => setIsModalOpen(true)}/>
      <Confused/>
      <Promotion/>
      <Testimoni />
      <Ready onOpenModal={() => setIsModalOpen(true)}/>
      <Mitra />
      <ImgCollection/>
      <Footer />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>

      {showWhatsApp && !isModalOpen &&(
      <FloatingWhatsApp 
        phoneNumber="62895380067457"
        accountName="Jasa Inspeksi Jogja"
        statusMessage="Biasanya membalas dalam 1 jam"
        chatMessage="Halo! Ada yang bisa kami bantu?"
        placeholder="Ketik pesan..."
        avatar="/img/user_icon.jpg"
        allowEsc={false}
        allowClickAway={false} />
      )}
    </main>
  );
}


// CATATAN: INGETTTT!!!!! KALAU CODING HARUS CLEANE CODE 
