
const services = [
  {
    title: 'Frontend Development',
    description: 'Building responsive, interactive, and high-performance web interfaces using React, Tailwind CSS, and modern frontend tools.',
    icon: '💻',
  },
  {
    title: 'UI/UX Design',
    description: 'Designing clean and user-centric interfaces that provide a seamless experience across all devices.',
    icon: '🎨',
  },
  {
    title: 'Responsive Web Design',
    description: 'Ensuring your websites look great and function flawlessly on all screen sizes, from mobile to desktop.',
    icon: '📱',
  },
];

const ServicePage = () => {
  return (
    <section
      id="services"
      className="min-h-screen px-4 md:px-10 py-16 bg-white dark:bg-black text-gray-900 dark:text-white"
    >
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-gradient">Services</span>
      </h2>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-sm">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicePage;

