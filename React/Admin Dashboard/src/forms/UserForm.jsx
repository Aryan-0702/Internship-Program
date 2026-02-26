import React from "react";
import { useForm } from "react-hook-form";

export default function UserForm({ onAdd }){

  const {
    register,
    handleSubmit,
    formState:{errors},
    reset
  } = useForm();

  const onSubmit = data=>{
    onAdd(data);   // send data to parent
    reset();
  };

  return(
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white p-6 rounded shadow space-y-4"
    >

      <input
        placeholder="Name"
        className="w-full border p-2 rounded"
        {...register("name",{required:"Name required"})}
      />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <input
        placeholder="Email"
        className="w-full border p-2 rounded"
        {...register("email",{required:"Email required"})}
      />
      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  )
}