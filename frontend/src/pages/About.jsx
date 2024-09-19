import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-6">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-8">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-10">
          At <strong>MarpsAfrica</strong>, we are committed to innovation, using technology to solve today’s challenges while preparing for the future. Our passion is to create transformative solutions that help businesses and individuals grow, thrive, and succeed in a rapidly evolving digital world.
        </p>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            To design and implement cutting-edge technology that empowers businesses to achieve their potential. We focus on delivering scalable, innovative solutions that challenge the status quo and drive growth.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            We envision a future where technology is seamlessly integrated into every part of life, enhancing experiences and simplifying complex processes. We aim to lead this transformation.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
          <ul className="text-lg text-gray-700 leading-relaxed list-disc list-inside">
            <li><strong>Innovation:</strong> Continuously pushing technological boundaries.</li>
            <li><strong>Integrity:</strong> Upholding trust, honesty, and transparency in all we do.</li>
            <li><strong>Customer Focus:</strong> Creating solutions that cater to the real needs of our clients.</li>
            <li><strong>Collaboration:</strong> Valuing teamwork and shared success.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-4">What We Do</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            <strong>MarpsAfrica</strong> specializes in cloud computing, AI-driven technologies, and custom software development. We empower businesses with the tools they need to stay ahead in the digital era.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
