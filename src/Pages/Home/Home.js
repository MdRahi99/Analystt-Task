import React, { useEffect, useState } from "react";
import Details from "./Details";

const Home = () => {

const [info, setInfo] = useState([]);

const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if (!response.ok) {
      throw new Error('Data could not be fetched!')
    } else {
      return response.json()
    }
  }
  useEffect(() => {
    fetchData()
      .then((res) => {
        setInfo(res)
        console.log(res)
      })
      .catch((e) => {
        console.log(e.message)
      })
  }, [])

  return <div className="my-12 mx-20 lg:mx-40">
    {info.map(data=><Details key={data.id} data={data}></Details>)}
  </div>;
};

export default Home;
