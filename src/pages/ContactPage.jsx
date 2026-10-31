import { Mail, Phone, MapPin } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 px-6 py-20 text-gray-800 dark:text-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-10">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Phone className="mt-1 text-blue-500" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-700 dark:text-gray-300">+91 8709764265</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="mt-1 text-green-500" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-700 dark:text-gray-300">vaibhavkr87097@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="mt-1 text-red-500" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-700 dark:text-gray-300">Kolkata, West Bengal</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form className="space-y-6 bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 mt-1 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 dark:text-gray-100"
                placeholder="Your message"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
