import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [idx, setidx] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${idx}&limit=10`
    );

    setuserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [idx]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white px-6 py-10">
      
      <h1 className="text-4xl font-bold text-center mb-10 tracking-wide">
        Image Gallery
      </h1>

      {/* Images */}
      <div className="flex flex-wrap justify-center gap-6">
        {userData.length > 0 ? (
          userData.map((e, index) => {
            return (
              <a
                key={index}
                href={e.url}
                target="_blank"
                className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 w-64"
              >
                <div className="h-52 overflow-hidden">
                  <img
                    className="h-full w-full object-cover"
                    src={e.download_url}
                    alt=""
                  />
                </div>

                <div className="p-4">
                  <h2 className="text-lg font-semibold truncate">
                    {e.author}
                  </h2>

                  <p className="text-gray-400 text-sm mt-1">
                    Click to view image
                  </p>
                </div>
              </a>
            );
          })
        ) : (
          <div className="flex justify-center items-center h-[50vh] w-full">
            <div className="h-14 w-14 border-4 border-amber-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-5 mt-14">
        <button
          disabled={idx === 1}
          onClick={() => {
            if (idx > 1) {
              setidx(idx - 1);
              setuserData([]);
            }
          }}
          className={`px-6 py-2 rounded-xl font-semibold transition-all duration-200
          ${
            idx === 1
              ? "bg-gray-700 cursor-not-allowed"
              : "bg-amber-400 text-black hover:scale-95"
          }`}
        >
          Prev
        </button>

        <div className="bg-gray-800 px-6 py-2 rounded-xl text-lg font-medium shadow-md">
          Page {idx}
        </div>

        <button
          onClick={() => {
            setidx(idx + 1);
            setuserData([]);
          }}
          className="bg-amber-400 text-black px-6 py-2 rounded-xl font-semibold hover:scale-95 transition-all duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;