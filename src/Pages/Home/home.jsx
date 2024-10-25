import React from "react";
import { Form } from "../../Components/Form";
import { useEffect } from "react";
import { request } from "../../Config/requset";
import { Cards } from "../../Components/Cards";

export const Home = () => {
  const [data, setData] = React.useState([]);
  const getData = () => {
    request.get("/todos").then((res) => setData(res.data));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <Form refetchCard={getData} />
        <div className="mt-[100px] grid grid-cols-3 items-center  gap-[20px] ">
          {data.map((item) => (
            <Cards key={item.id} refetch={getData} user={item} />
          ))}
        </div>
      </div>
    </>
  );
};
