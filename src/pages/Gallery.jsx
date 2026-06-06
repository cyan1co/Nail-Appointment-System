import nails1 from "../assets/nails1.png";
import nails2 from "../assets/nails2.png";
import nails3 from "../assets/nails3.png";
import nails4 from "../assets/nails4.png";
import nails5 from "../assets/nails5.png";
import nails6 from "../assets/nails6.png";
import nails7 from "../assets/nails7.png";
import nails8 from "../assets/nails8.png";
import nails9 from "../assets/nails9.png";
import nails10 from "../assets/nails10.png"; 

const galleryImages = [
  nails1,
  nails2,
  nails3,
  nails4,
  nails5,
  nails6,
  nails7,
  nails8,
  nails9,
  nails10
];

function Gallery() {

  const galleryImages = [
    nails1,
    nails2,
    nails3,
    nails4,
    nails5,
    nails6,
    nails7,
    nails8,
    nails9,
    nails10
  ];

  return (
    <section className="min-h-screen bg-pink-50 py-16">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-4">
        Nail Gallery
      </h1>

      <p className="text-center text-gray-500 mb-12">
        Some of our favorite designs
      </p>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-6">

        {galleryImages.map((image, index) => (

          <div
            key={index}
            className="
              overflow-hidden
              rounded-3xl
              shadow-lg
            "
          >

            <img
              src={image}
              alt={`Nail Design ${index + 1}`}
              className="
                w-full
                h-80
                object-cover
                hover:scale-110
                transition
                duration-500
              "
            />

          </div>

        ))}

      </div>

    </section>
  );
}

export default Gallery;