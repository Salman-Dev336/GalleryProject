import React, { useState } from "react";
import axios from "axios";

const App = () => {

  const [userData, setuserData] = useState([]);

  const getData = async() => {
    // console.log("data agaya hai");
    const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=30');
    // console.log(response.data);
    setuserData(response.data)
    
  };
  let printUserData = 'No user Data available';
  if(userData.length>0){
    printUserData = userData.map(function(e , index){
      return <div>
        <img src={e.download_url} alt="" />
      </div>

    })
  }
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
      <div>
        {printUserData}
      </div>
    </div>
  );
};

export default App;
