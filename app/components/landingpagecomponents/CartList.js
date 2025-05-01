const cars = [
  {
    name: "MERCEDES BENZ CLA 200",
    image: "/car1.jpg",
    badge: "Available Now",
    discount: "-20%",
  },
  {
    name: "NISSAN XTRAIL 2018",
    image: "/car2.jpg",
    badge: "",
    discount: "-35%",
  },
  {
    name: "CHEVROLET TRAILBLAZER",
    image: "/car3.jpg",
    badge: "",
    discount: "-15%",
  },
  { name: "HYUNDAI TUCSON 2019", image: "/car4.jpg", badge: "", discount: "" },
  { name: "HONDA NEW JAZZ RS", image: "/car5.jpg", badge: "", discount: "" },
  { name: "TOYOTA ALL NEW CAMRY", image: "/car6.jpg", badge: "", discount: "" },
];

export default function CarList() {
  return (
          // lakukan pembuatan card mobil nya disni sesuiakn saja jika ada compoennt lain maka lakukan import statis(../ atau ./ )di bagian atas
    <section className="bg-gray-100 py-12 px-6">
      <h2 className="text-xl font-bold mb-6 text-center">New Car Model</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {cars.map((car, i) => (
          <div key={i} className="bg-white shadow rounded overflow-hidden">
            <img src={car.image} alt={car.name} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="font-semibold">{car.name}</h3>
              <div className="text-sm text-gray-500">{car.badge}</div>
              {car.discount && <div className="text-red-500 font-bold">{car.discount}</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="bg-orange-500 text-white px-6 py-2 rounded-full">View All Cars</button>
      </div>
    </section>
  );
}
