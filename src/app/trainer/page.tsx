"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { li } from "framer-motion/client";

interface DataUser {
  id: number;
  fname: string;
  lname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
}
function trainer() {
  const [dataTrainerPerson, setDataTrainerPerson] = useState<DataUser[]>([]);

  const trainerData = async () => {
    try {
      const res = await axios.get(`https://www.melivecode.com/api/users/`);
      setDataTrainerPerson(res.data);
      console.log(dataTrainerPerson);
    } catch (err: unknown) {
      throw new Error("Cant Fetch Trainer Data from API using Axios");
    }
  };
  useEffect(() => {
    trainerData();
  }, []);
  return (
    <div className="container mt-10 mx-auto justify-center">
      <h1 className="text-4xl">Trainer Data</h1>
      <div className="my-10 grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 overflow-none ">
        {dataTrainerPerson?.map((item: DataUser, index: number) => (
          <div
            key={index}
            className="flex justify-center sm:flex-cols-1 sm:block items-center space-x-2 border-2 rounded-3xl bg-primary/90"
          >
            <img
              className="w-[80%] h-[80%] rounded-sm p-10 mx-auto"
              src={item.avatar}
              alt={item.username}
            />
            <div className=" pb-10 px-10">
              <h2 className="text-xl font-semibold">
                {item.fname} {item.lname}
              </h2>
              <p>{item.username}</p>
            </div>
          </div>
        ))}
        {/* {dataTrainerPerson?.map((item:DataUser,index:number) =>(
            <li key={index}>
              <div className="flex items-center space-x-2">
                <img className="w-10 h-10 rounded-full" src={item.avatar} alt={item.username} />
                <div>
                  <h2>{item.fname} {item.lname}</h2>
                  <p>{item.username}</p>
                </div>
              </div>
            </li>
          ))} */}
      </div>
    </div>
  );
}

export default trainer;
