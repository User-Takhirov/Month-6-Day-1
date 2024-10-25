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
      <form className="flex justify-center" onSubmit={handleSubmit(submit)}>
        <div className=" flex justify-center flex-col w-[200px] ">
          <input
            className="bg-red-500 py-[20px]"
            {...register("title")}
            type="text"
          />
          <input
            className="bg-blue-500  py-[20px]  text-white"
            {...register("description")}
            type="text"
          />
          <button type="submit" className="bg-green-500">
            Send
          </button>
        </div>
      </form>
    </>
  );
};
