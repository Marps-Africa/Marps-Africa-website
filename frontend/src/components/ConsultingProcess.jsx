import React from 'react';

const ConsultingProcess = () => {
  return (
    <section className='mx-2 pb-8'>
        <div className="md:w-[80vw] mx-auto flex flex-col lg:flex-row justify-between items-start p-10  bg-white">
            {/* Left Section - Main Content */}
            <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
            <h3 className="text-xl text-blue-600 font-semibold mb-2">Consultation</h3>
            <h1 className="text-gray-800 text-4xl font-bold">Best pathway to our clients.</h1>
            <p className="text-gray-600 mt-4 text-lg">
                Our consulting process begins with a thorough assessment of your current IT infrastructure,
                workflows, and pain points.
            </p>

            {/* Service Features */}
            <ul className="mt-8 space-y-3 text-lg">
                <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">✔</span>
                <span className="text-gray-700">24/7 Full Service Support</span>
                </li>
                <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">✔</span>
                <span className="text-gray-700">Immediate Response</span>
                </li>
                <li className="flex items-center">
                <span className="text-blue-600 text-xl mr-2">✔</span>
                <span className="text-gray-700">Easy to Approach us</span>
                </li>
            </ul>
            </div>

            {/* Right Section - Roadmap */}
            <div className="w-full lg:w-1/2 relative">
            {/* Dotted Line */}
            <div className="absolute left-4 top-6 bottom-0 w-1 border-l-2 border-dotted border-blue-200"></div>

            {/* Step 1 */}
            <div className="flex items-start mb-10 pl-12">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                01
                </div>
                <div className="ml-6 bg-blue-50 p-4 rounded-lg shadow-md w-full">
                <h3 className="text-lg font-semibold text-gray-800">Discovery and Analysis</h3>
                <p className="text-gray-600 mt-2">
                    Perform an analysis of the client’s existing IT systems.
                </p>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start mb-10 pl-12">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                02
                </div>
                <div className="ml-6 bg-blue-50 p-4 rounded-lg shadow-md w-full">
                <h3 className="text-lg font-semibold text-gray-800">Tailored Solutions</h3>
                <p className="text-gray-600 mt-2">
                    Develop IT solutions based on the analysis phase.
                </p>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start pl-12">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-100 text-blue-600 rounded-full text-lg font-bold">
                03
                </div>
                <div className="ml-6 bg-blue-50 p-4 rounded-lg shadow-md w-full">
                <h3 className="text-lg font-semibold text-gray-800">Deployment and Support</h3>
                <p className="text-gray-600 mt-2">
                    Regularly communicate with our client to address any concerns.
                </p>
                </div>
            </div>
            </div>
        </div>
    </section>
   
  );
};

export default ConsultingProcess;
