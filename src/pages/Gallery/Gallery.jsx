import React from 'react';

const cars = [
    {
        id: 1,
        name: 'Car Model 1',
        year: '2022',
        imageUrl: "/car.png",
        price: '$30,000',
    },
    {
        id: 2,
        name: 'Car Model 2',
        year: '2021',
        imageUrl: "/car-red.png",
        price: '$25,000',
    },
    {
        id: 3,
        name: 'Car Model 3',
        year: '2020',
        imageUrl: "/car-blue.png",
        price: '$20,000',
    },
];

const Gallery = () => {
    return (
        <section className="pb-10 bg-gray-300 " id='gallery'>

            <div className="title py-10 my-10 flex items-center justify-center">
                <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

                </div>
                <h2 className='font-bold text-3xl mx-3'>Our Gallery</h2>
                <div className="red-line w-[70px] h-[7px] bg-red-600 mt-2">

                </div>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-8">
                {cars.map(car => (
                    <div key={car.id} className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
                        <div className='h-[300px]'>
                            <img src={car.imageUrl} alt={car.name} className="w-full h-57 object-cover bg-white" />

                        </div>
                        <div className="absolute bottom-0 left-0 bg-black bg-opacity-75 text-white w-full p-4">
                            <h3 className="text-lg font-bold">{car.name}</h3>
                            <p className="text-lg text-gray-400">Year: {car.year}</p>
                            <p className="text-sm">{car.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Gallery;  