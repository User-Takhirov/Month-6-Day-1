import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../Config/requset";
import { toast } from "react-toastify";

export const Form = ({ refetchCard }) => {
  const { register, handleSubmit, reset } = useForm();
  const submit = (data) => {
    request.post(`/todos`, data).then(() => {
      toast.success("Successfully added", {
        position: "top-right",
      });
      refetchCard();
    });
    reset();
  };
  return (
    <>
      <form className=" mx-auto justify-center" onSubmit={handleSubmit(submit)}>
        <div className=" flex justify-center mx-auto mt-[50px] w-[200px] ">
          <input
            className="bg-red-500 py-[20px] text-white pl-[20px] capitalize rounded-[10px] outline-none"
            {...register("title")}
            type="text"
          />
          <input
            className="bg-blue-500  py-[20px]  text-white pl-[20px] capitalize rounded-[10px] outline-none"
            {...register("description")}
            type="text"
          />
        </div>
        <div className="text-center w-[402px] mx-auto">
          <button
            type="submit"
            className="bg-green-500 text-white py-[20px] w-[100%] rounded-[10px] mt-[10px]"
          >
            Send
          </button>
        </div>
      </form>
    </>
  );
};
