import React from "react";
import { useForm } from "react-hook-form";
import { request } from "../../Config/requset";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  title: z.string().min(3, "at least 3 letters"),
  description: z.string().min(5, "Need to contain 5 "),
});

export const Form = ({ refetchCard }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });
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
        <div className=" flex justify-center mx-auto mt-[50px] w-[200px] gap-[20px] ">
          <div>
            <input
              className="bg-red-500 py-[20px] text-white pl-[20px] capitalize rounded-[10px] outline-none"
              {...register("title")}
              type="text"
            />
            {errors.title && (
              <p className="text-white text-[900] ">{errors.title.message}</p>
            )}
          </div>
          <div>
            <input
              className="bg-blue-500  py-[20px]  text-white pl-[20px] capitalize rounded-[10px] outline-none"
              {...register("description")}
              type="text"
            />
            {errors.description && (
              <p className="text-white text-[900] ">
                {errors.description.message}
              </p>
            )}
          </div>
        </div>
        <div className="text-center w-[422px] mx-auto">
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
