import React from "react";
import { request } from "../../Config/requset";
import { toast } from "react-toastify";

export const Cards = ({ user, refetch }) => {
  const DeleteItem = () => {
    request.delete(`/todos/${user.id}`).then(() => {
      refetch();
      toast.success("Deleted successfully");
    });
  };
  return (
    <>
      <div className="container">
        <div className="border bg-white rounded-[20px] h-[134px] border-[red] py-[20px] mb-[10px] text-center">
          <h1>{user.title}</h1>
          <h2>{user.description}</h2>
          <button
            className="bg-red-500 py-[10px] px-[10px]"
            onClick={DeleteItem}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
