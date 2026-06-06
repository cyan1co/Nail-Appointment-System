import { useState } from "react";
import { CalendarDays, User, Trash2 } from "lucide-react";

function Bookings() {

  const [bookings, setBookings] = useState(
    JSON.parse(localStorage.getItem("bookings")) || []
  );

  const [searchTerm, setSearchTerm] = useState("");

  const [selectedService, setSelectedService] = useState("All");

  const filteredBookings = bookings.filter((booking) => {

    const matchesSearch =
      booking.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

    const matchesService =
      selectedService === "All" ||
      booking.service === selectedService;

    return matchesSearch && matchesService;

  });

  const deleteBooking = (indexToDelete) => {

    const updatedBookings = bookings.filter(
      (_, index) => index !== indexToDelete
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  const totalBookings = filteredBookings.length;

  return (
    <section className="min-h-screen bg-pink-50 py-16">

      <div className="max-w-5xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-10">
          Appointment Dashboard
        </h1>

        <div className="mb-8">

          <input
            type="text"
            placeholder="Search by customer name..."
            value={searchTerm}
            onChange={(e) =>
              setSearchTerm(e.target.value)
            }
            className="
              w-full
              bg-white
              rounded-2xl
              shadow-md
              p-4
              border
              border-pink-200
              focus:outline-none
              focus:ring-2
              focus:ring-pink-400
            "
          />

        </div>

        <select
          value={selectedService}
          onChange={(e) =>
            setSelectedService(e.target.value)
          }
          className="w-full bg-white rounded-2xl shadow-md p-4 border border-pink-200 mb-10 focus:outline-none">
          <option>All</option>
          <option>Gel Nails</option>
          <option>Acrylic Extensions</option>
          <option>Nail Art</option>
          <option>Manicure</option>
          <option>Pedicure</option>
        </select>

        {/* Statistics Card */}
        <div className="bg-white rounded-3xl shadow-lg p-6 mb-10 text-center">

          <CalendarDays
            size={40}
            className="mx-auto text-pink-500 mb-3"
          />

          <h2 className="text-lg text-gray-500">
            Total Appointments
          </h2>

          <p className="text-5xl font-bold text-pink-600">
            {totalBookings}
          </p>

        </div>

        {filteredBookings.length === 0 ? (

          <div className="bg-white rounded-3xl shadow-lg p-8 text-center">

            <p className="text-gray-500 text-lg">
              No appointments booked yet.
            </p>

          </div>

        ) : (

          <div className="grid gap-6">

            {filteredBookings.map((booking, index) => (

              <div
                key={index}
                className="
                  bg-white
                  rounded-3xl
                  shadow-lg
                  p-6
                  hover:shadow-xl
                  transition
                "
              >

                <div className="flex items-center gap-2 mb-4">

                  <User className="text-pink-500" />

                  <h2 className="text-2xl font-bold text-pink-600">
                    {booking.name}
                  </h2>

                </div>

                <div className="space-y-2 text-gray-700">

                  <p>
                    <strong>Email:</strong> {booking.email}
                  </p>

                  <p>
                    <strong>Phone:</strong> {booking.phone}
                  </p>

                  <p>
                    <strong>Service:</strong> {booking.service}
                  </p>

                  <p>
                    <strong>Date:</strong> {booking.date}
                  </p>

                  <p>
                    <strong>Time:</strong> {booking.time}
                  </p>

                </div>

                <button
                  onClick={() => deleteBooking(index)}
                  className="
                    mt-6
                    bg-red-400
                    text-white
                    px-5
                    py-2
                    rounded-xl
                    hover:bg-red-500
                    transition
                    flex
                    items-center
                    gap-2
                  "
                >
                  <Trash2 size={18} />
                  Cancel Appointment
                </button>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}

export default Bookings;