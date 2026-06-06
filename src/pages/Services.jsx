import { Sparkles } from "lucide-react";

function Services() {

  const services = [
    {
      name: "Gel Nails",
      price: "Rs 1500",
      description: "Long-lasting glossy nails."
    },
    {
      name: "Acrylic Extensions",
      price: "Rs 2500",
      description: "Elegant nail extensions."
    },
    {
      name: "Nail Art",
      price: "Rs 1000",
      description: "Custom creative designs."
    },
    {
      name: "Manicure",
      price: "Rs 800",
      description: "Pamper and care for your hands."
    },
    {
      name: "Pedicure",
      price: "Rs 1200",
      description: "Relaxing foot treatment."
    }
  ];

  return (
    <section className="min-h-screen bg-pink-50 py-16">

      <h1 className="text-5xl font-bold text-center text-pink-600 mb-12">
        Our Services
      </h1>

      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">

        {services.map((service, index) => (

          <div
            key={index}
            className="
              bg-white
              rounded-3xl
              shadow-lg
              p-6
              hover:scale-105
              transition
            "
          >

            <Sparkles className="text-pink-500 mb-4" />

            <h2 className="text-2xl font-bold text-pink-600">
              {service.name}
            </h2>

            <p className="text-gray-500 mt-2">
              {service.description}
            </p>

            <p className="text-xl font-semibold mt-4">
              {service.price}
            </p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Services;