import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [userData, setuserData] = useState([]);
  const [idx, setidx] = useState(1);

  const getData = async () => {
    // console.log("data agaya hai");
    const response = await axios.get(`https://picsum.photos/v2/list?page=${idx}&limit=21`
    );
    console.log(response.data);
    setuserData(response.data);
  };
  useEffect(function () {
    getData();
  }, [idx]);

  let printUserData = (
    <h3 className="text-gray-400 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"> Loading...</h3>
  );
  if (userData.length > 0) {
    printUserData = userData.map(function (e, index) {
      return (
        <div key={index}>
          <a href={e.url} target="_blank">
            <div className="h-40 w-44 rounded-xl overflow-hidden">
              <img
                className="h-full w-full object-cover"
                src={e.download_url}
                alt=""
              />
            </div>
            <h2 className="font-normal ">{e.author}</h2>
          </a>
        </div>
      );
    });
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      {/* <h1 className="fixed bg-amber-400 text-black px-2 py-1 rounded">{idx}</h1> */}
      {/* <button
        onClick={() => {
          getData();
        }}
        className="bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95 "
      >
        Get Data
      </button> */}
      <div className="flex flex-wrap m-10 gap-4">{printUserData}</div>
      <div className="flex justify-center items-center p-10 gap-4 ">
        <button
        style={{opacity: idx== 1? 0.5 : 1}}
          onClick={() => {
            if (idx > 1) {
              setidx(idx - 1);
              setuserData([]);
            }
          }}
          className="bg-amber-400 text-sm active:scale-95 text-black rounded px-4 py-2 font-bold"
        >
          Prev
        </button>
        <h2 className="bg-gray-900 px-4 py-2 rounded-xl text-sm">Page {idx}</h2>
        <button
          onClick={() => {
            setidx(idx + 1);
            setuserData([]);
            
          }}
          className="bg-amber-400 text-sm active:scale-95 text-black  rounded px-4 py-2 font-bold"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
