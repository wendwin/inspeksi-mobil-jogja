// File: pages ini adlaah halman yang di render CSR pertama kali aplikasi di jalankan
import Hero from "./components/landingpagecomponents/Hero";
import Stats from "./components/landingpagecomponents/Stats";
import CarList from "./components/landingpagecomponents/CartList";
import Trusted from "./components/landingpagecomponents/Trusted";
// jika ada compoenent baru maka lakukan import disini sesuikan nama folder dan filenya

export default function Home() {
  return (
    <main className="font-sans">
      {/* tambahkan class mellaui props disni class di dapat dri compoenent yang bersangkuatan */}
      <Hero />
      <Stats />
      <Trusted />
      <CarList />
    </main>
  );
}


// CATATAN: INGETTTT!!!!! KALAU CODING HARUS CLEANE CODE 
