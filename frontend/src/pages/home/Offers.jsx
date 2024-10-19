import React from 'react';

function Offers() {
  return (
    <section className=" my-10 md:w-[80vw] mx-auto min-h-[90vh]  flex flex-col justify-between">
      <div className="container mx-auto px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 ">
        <div>
          <h3 className="text-lg lg:text-xl text-[#37B6FF] font-semibold mb-1 lg:mb-2">
            What We're Offering
          </h3>
          <h2 className="text-2xl lg:text-3xl font-bold leading-tight">
            Dealing in All Professional IT Services
          </h2>
        </div>
        <div>
          <p className="pt-2 lg:pt-4 text-gray-700 text-sm lg:text-base">
            One fundamental aspect of IT services is infrastructure management. This involves the design, implementation, and maintenance of hardware, software, networks, and servers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-0 mt-6 lg:mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        {/** Card Components */}
        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/development.svg" alt="Development Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">Development</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/webicon.svg" alt="Web Design Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">Web Design</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We create vibrant, intuitive, and minimalist web experiences.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/crm-icon.svg" alt="CRM Solutions Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">CRM Solutions</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We enhance customer experiences for success.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/commerce.svg" alt="E-commerce Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">E-commerce</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We have the best team for your shopping websites.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/It-support-icon-5-2.svg" alt="IT Support Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">IT Support</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We offer expert assistance for your IT issues.
          </p>
        </div>

        <div className="bg-white text-gray-800 p-3 lg:p-4 rounded-lg shadow-lg flex flex-col space-y-2 lg:space-y-3">
          <img src="/svgs/It-support-icon-5-2.svg" alt="AI Integration Icon" className="h-8 lg:h-10 w-8 lg:w-10" />
          <h2 className="text-lg lg:text-xl font-semibold">AI Integration</h2>
          <p className="text-gray-600 text-sm lg:text-base">
            We offer expert assistance for your IT issues.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Offers;
