export default function Stats() {
  return (
          // silahkan lakukan perubhan bagian setelah hero dsini
    <section className="flex flex-wrap justify-center gap-5 md:gap-30 mx-auto w-250 -mt-5 z-100 text-center py-8 bg-black shadow">
      <div>
        <div className="text-3xl font-bold text-orange-600">500</div>
        <div className="text-sm">Inspeksi Selesai</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600">299</div>
        <div className="text-sm">Jumlah Pelanggan</div>
      </div>
      <div>
        <div className="text-3xl font-bold text-orange-600">150</div>
        <div className="text-sm">Rekan Dealer</div>
      </div>
    </section>
  );
}
