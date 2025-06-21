export default function Gallery() {
  const images = [
    'https://tse1.mm.bing.net/th?id=OIP.AZ7UZG2H5Oq993ZciEZ1pQHaEK&pid=Api&P=0&h=180',
    'https://tse1.mm.bing.net/th?id=OIP.qLCAkQEhY36yOeyL6D-uQQHaDw&pid=Api&P=0&h=180',
    'https://static.vecteezy.com/system/resources/previews/002/297/055/large_2x/green-golf-field-background-free-vector.jpg',
    'https://tse3.mm.bing.net/th?id=OIP.coxw4Gvj9orIhKiAozv0NQHaFk&pid=Api&P=0&h=180',
    'https://tse3.mm.bing.net/th?id=OIP.jYGkAQLoOHkQ1DujFLwiBwHaE8&pid=Api&P=0&h=180',
    'https://wallpapercave.com/wp/wp9157654.jpg'
  ];

  return (
    <div className="bg-gray-500 h-screen w-screen">
    <div className="p-10 max-w-6xl mx-auto ">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-900">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <img key={idx} src={src} alt={`gallery-${idx}`} className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300 h-55 w-75 object-cover" />
        ))}
      </div>
    </div>
    </div>
  );
}