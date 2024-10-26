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

  const EditItem = () => {
    const EditTitle = prompt("can change your title");
    const EditDes = prompt("can change your description");
    request
      .put(`/todos/${user.id}`, {
        title: EditTitle,
        description: EditDes,
      })
      .then(() => {
        refetch();
        toast.success("Edited successfully");
      })
      .catch(() => {
        toast.error("Edit failed");
      });
  };
  return (
    <>
      <div className="container">
        <div className="border bg-white rounded-[20px] h-[134px] border-[red] py-[20px] mb-[10px] text-center">
          <h1>{user.title}</h1>
          <h2>{user.description}</h2>
          <div className="flex gap-[10px] items-center justify-center mt-[10px] ">
            <button
              className="bg-red-500 py-[10px] px-[10px] rounded-[10px] text-white"
              onClick={DeleteItem}
            >
              Delete
            </button>
            <button
              onClick={EditItem}
              className="bg-yellow-500 py-[10px] px-[10px] text-white rounded-[10px] "
            >
              Edit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
