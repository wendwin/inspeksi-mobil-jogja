export default function ImgCollection(){
    return (
        <div className="grid grid-cols-4 md:gap-2 my-16">
            <div className="col-span-2 w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar1.jpg" alt="img-car-1" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar2.jpg" alt="img-car-2" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar3.jpg" alt="img-car-3" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar5.jpg" alt="img-car-4" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="col-span-2 w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar4.jpg" alt="img-car-5" className="w-full h-full object-cover object-center"/>
            </div>
            <div className="w-full h-48 md:h-64 lg:h-72">
              <img src="/img/wpcar6.png" alt="img-car-6" className="w-full h-full object-cover object-center"/>
            </div>
        </div>

    )
}