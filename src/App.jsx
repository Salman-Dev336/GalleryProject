import React from "react";

const App = () => {
  const getData = () => {
    console.log("data agaya hai");
  };
  return (
    <div className="bg-black h-screen text-white p-4">
      <button
        onClick={() => {
          getData();
        }}
        className="bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95 "
      >
        Get Data
      </button>
    </div>
  );
};

export default App;
