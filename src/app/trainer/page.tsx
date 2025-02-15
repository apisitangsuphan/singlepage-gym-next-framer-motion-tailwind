"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
interface DataUser {
  id: number;
  fname: string;
  lname: string;
  username: string;
  password: string;
  email: string;
  avatar: string;
}
function Trainer() {
  const [dataTrainerPerson, setDataTrainerPerson] = useState<DataUser[]>([]);

  const trainerData = async () => {
    try {
      const res = await axios.get(`https://www.melivecode.com/api/users/`);
      setDataTrainerPerson(res.data);
      console.log(dataTrainerPerson);
    } catch (error: any) {
      throw new Error("Cant Fetch Trainer Data from API using Axios",error);
    }
  };
  useEffect(() => {
    trainerData();
  }, [trainerData]);
  return (
    <div className="container mt-10 mx-auto">
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
        
      </div>
    </div>
  );
}

export default Trainer;
