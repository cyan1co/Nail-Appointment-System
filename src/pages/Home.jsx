import { Link } from "react-router-dom";
import heroimage from "../assets/heroimage.png";
import nails1 from "../assets/nails1.png";
import nails2 from "../assets/nails2.png";
import nails3 from "../assets/nails3.png";

function Home() {
  return (
    <>

      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroimage})`
        }}
      >
        <div className="min-h-screen bg-pink-400/40 flex items-center justify-center">

          <div className="text-center max-w-3xl px-6">

            <h1 className="text-6xl font-bold text-white mb-4">
              Kristy's Nailz
            </h1>

            <h2 className="text-2xl text-pink-100 mb-6">
              Aesthetic Nail Art in Dharan, Nepal
            </h2>

            <p className="text-lg text-white mb-8">
              Customizable Nails For Every Occasion - Book Your Appointment Today!
            </p>

            <div className="flex justify-center gap-4">

              <Link
                to="/booking"
                className="
                  bg-pink-500
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:bg-pink-600
                  transition
                "
              >
                Book Appointment
              </Link>

              <Link
                to="/services"
                className="
                  border-2
                  border-white
                  text-white
                  px-6
                  py-3
                  rounded-full
                  hover:bg-white
                  hover:text-pink-500
                  transition
                "
              >
                View Services
              </Link>

            </div>

          </div>

        </div>
      </section>

      {/* Featured Services */}
      <section className="bg-pink-50 py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
            Featured Services
          </h2>

          <p className="text-center text-gray-500 mb-12">
            Treat yourself to beautiful nails
          </p>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-pink-600 mb-3">
                Gel Nails
              </h3>

              <p className="text-gray-600">
                Long-lasting glossy nails with a flawless finish.
              </p>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-pink-600 mb-3">
                Nail Art
              </h3>

              <p className="text-gray-600">
                Creative and custom nail designs for every occasion.
              </p>

            </div>

            <div className="bg-white p-6 rounded-3xl shadow-lg hover:scale-105 transition">

              <h3 className="text-2xl font-bold text-pink-600 mb-3">
                Acrylic Extensions
              </h3>

              <p className="text-gray-600">
                Elegant extensions to enhance your natural beauty.
              </p>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-white py-20">

        <div className="max-w-6xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-center text-pink-600 mb-12">
            Recent Nail Designs
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {[nails1, nails2, nails3].map((image, index) => (
            
              <img
                key={index}
                src={image}
                alt="Nail Design"
                className="
                  h-80
                  w-full
                  object-cover
                  rounded-3xl
                  shadow-lg
                  hover:scale-105
                  transition
                "
              />
            
            ))}

          </div>
          
          <div className="text-center mt-10">
          
            <Link
              to="/gallery"
              className="text-pink-600 font-semibold hover:underline"
            >
              View Full Gallery →
            </Link>
          
          </div>
          
        </div>
          
      </section>

      {/* CTA Section */}
      <section className="bg-pink-100 py-20">

        <div className="text-center px-6">

          <h2 className="text-4xl font-bold text-pink-600 mb-4">
            Ready For Your Next Nail Appointment?
          </h2>

          <p className="text-gray-600 mb-8">
            Book today and let us create your perfect look ✨
          </p>

          <Link
            to="/booking"
            className="
              bg-pink-500
              text-white
              px-8
              py-4
              rounded-full
              hover:bg-pink-600
              transition
            "
          >
            Book Now
          </Link>

        </div>

      </section>

    </>
  );
}

export default Home;