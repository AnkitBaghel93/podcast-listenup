import React from "react";
import { motion } from "framer-motion";


const Home = () => {
  return (
    <div className="min-h-screen bg-green-50 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col items-center">
      {/* Heading Section */}
      <motion.div
        className="text-center mt-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <h1 className="text-5xl md:text-6xl font-bold text-green-900 leading-tight mt-4">
          Create & Listen To The <br />
          <span className="inline-block mt-2">P</span>
          <span className="inline-block align-middle mb-2">
            <img
              src="https://cdn-icons-png.flaticon.com/128/2113/2113324.png"
              alt="o"
              className="w-14 h-14 inline-block mx-1 my-1"
            />
          </span>
          <span className="inline-block">dcast</span>
        </h1>
      </motion.div>

   {/* Information Section */}
      <div className="mt-12 flex flex-col md:flex-col items-center gap-8 w-full max-w-4xl">
        
        {/* Text Content - Placed in Two Columns */}
        <div className="flex flex-col md:flex-row justify-between w-full">
          {/* Left Paragraph */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700">
              Listen to the most popular podcasts on just one platform —  
              <b className="text-green-800"> ListenUp</b>
            </p>
          </div>

          {/* Right Paragraph */}
          <div className="md:w-1/2 text-left">
            <p className="text-lg text-gray-700">
              Our app contains more than <b className="text-green-800">1000+</b> podcasts for you 🎧.
              Explore and enjoy diverse content from top creators worldwide!
            </p>
          </div>
        </div>

        {/* Centered Button at the Bottom */}
        <div className="flex justify-center w-full mt-2">
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-green-700 transition-all mb-5">
            Login to Listen
          </button>
        </div>

      </div>


    </div>
  );
};

export default Home;
