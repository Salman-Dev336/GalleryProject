import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [userData, setuserData] = useState([]);

  const getData = async() => {
    // console.log("data agaya hai");
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=100');
    console.log(response.data);
    setuserData(response.data);
    
  };
  let printUserData = 'No user Data available';
  if(userData.length>0){
    printUserData = userData.map(function(e , index){
      return <div>
        <div className="h-40 w-44 rounded-xl overflow-hidden">
        <img className="h-full w-full object-cover" src={e.download_url} alt="" />
      </div>
      <h2>{e.author}</h2>
      </div>
    })
  }
  return (
    <div className="bg-black h-screen overflow-auto text-white p-4">
      <button
        onClick={() => {
          getData();
        }}
        className="bg-green-600 text-white px-5 py-2 rounded mb-3 active:scale-95 "
      >
        Get Data
      </button>
      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>
    </div>
  );
};

export default App;
