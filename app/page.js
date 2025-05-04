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
import { useState } from "react";
// import 'flowbite/dist/flowbite.css';


// jika ada compoenent baru maka lakukan import disini sesuikan nama folder dan filenya

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="font-sans">
      {/* tambahkan class mellaui props disni class di dapat dri compoenent yang bersangkuatan */}
      <Hero />
      <Trusted />
      <Service />
      <Order onOpenModal={() => setIsModalOpen(true)}/>
      <Promotion/>
      <Testimoni />
      <Mitra />
      <Footer />
      <Modal open={isModalOpen} onClose={() => setIsModalOpen(false)}/>
    </main>
  );
}


// CATATAN: INGETTTT!!!!! KALAU CODING HARUS CLEANE CODE 
