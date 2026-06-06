import { Phone, Mail, MapPin, Camera } from "lucide-react";

function Contact() {
  return (
    <section className="min-h-screen bg-pink-50 py-16">

      <div className="max-w-4xl mx-auto px-6">

        <h1 className="text-5xl font-bold text-center text-pink-600 mb-12">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">

          {/* Contact Information Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <div className="flex items-center gap-3 mb-6">
              <Phone className="text-pink-500" />
              <p>9812345678</p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <Mail className="text-pink-500" />
              <p>kristysnailz@gmail.com</p>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-pink-500" />
              <p>Dharan, Nepal</p>
            </div>

            <div className="flex items-center gap-3">
              <Camera className="text-pink-500" />

              <a
                href="https://instagram.com/kristys_nailz"
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-600 hover:text-pink-800 hover:underline"
              >
                @kristys_nailz
              </a>

            </div>

          </div>

          {/* Opening Hours Card */}
          <div className="bg-white p-8 rounded-3xl shadow-lg">

            <h2 className="text-2xl font-bold text-pink-600 mb-6">
              Opening Hours
            </h2>

            <div className="space-y-3 text-gray-700">

              <p>
                Sunday - Thursday: 10:00 AM - 7:00 PM
              </p>

              <p>
                Friday: 10:00 AM - 5:00 PM
              </p>

              <p>
                Saturday: Closed
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;