import { useState } from "react";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    date: "",
    time: ""
  });

  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  existingBookings.push(formData);

  localStorage.setItem(
  "bookings",
  JSON.stringify(existingBookings)
  );  

    setSuccess(true);

    setFormData({
      name: "",
      phone: "",
      email: "",
      service: "",
      date: "",
      time: ""
    });
  };

  const servicePrices = {
    "Gel Nails": 1500,
    "Acrylic Extensions": 2500,
    "Nail Art": 1000,
    "Manicure": 800,
    "Pedicure": 1200,
  };

  return (
    <section className="min-h-screen bg-pink-50 py-16">

      <div className="max-w-2xl mx-auto bg-white rounded-3xl shadow-lg p-8">

        <h1 className="text-4xl font-bold text-pink-600 text-center mb-8">
          Book Appointment
        </h1>

        {success && (
          <div className="bg-green-100 text-green-700 p-4 rounded-xl mb-4">
            Appointment booked successfully!
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          />

          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          >
            <option value="">
              Select Service
            </option>

            <option value="Gel Nails">
              Gel Nails
            </option>

            <option value="Acrylic Extensions">
              Acrylic Extensions
            </option>

            <option value="Nail Art">
              Nail Art
            </option>

            <option value="Manicure">
              Manicure
            </option>

            <option value="Pedicure">
              Pedicure
            </option>
          </select>

          {formData.service && (
            <div className="bg-pink-100 p-4 rounded-xl text-pink-700 font-medium">
              Estimated Price: Rs {servicePrices[formData.service]}
            </div>
          )}

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            min={new Date().toISOString().split("T")[0]}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            className="w-full border border-pink-400 focus:ring-2 focus:ring-pink-500 focus:outline-none rounded-xl p-3"
            required
          />

          <button
            type="submit"
            className="
              w-full
              bg-pink-500
              text-white
              py-3
              rounded-xl
              hover:bg-pink-600
              transition
            "
          >
            Book Appointment
          </button>

        </form>

      </div>

    </section>
  );
}

export default Booking;