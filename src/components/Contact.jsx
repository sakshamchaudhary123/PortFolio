import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit =async (data) => {
    const userInfo = {
        name: data.name,
        email: data.email,
        message: data.message,
    }
    try{
        await axios.post("https://getform.io/f/brolklla", userInfo)
        toast.success("Message sent successfully")
    }catch(error){
        console.log(error)
        toast.error("Something went wrong")
    }
  }

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span className="text-green-600 underline font-semibold">
          Please fill out the form to contact me.
        </span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            // method="POST"
            // action="https://getform.io/f/brolklla"
            className="bg-slate-200 w-96 px-8 py-6 rounded-xl "
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Full Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                name="name"
                id="name"
                placeholder="Enter your full name"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
              {errors.name && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Email Address</label>
              <input
                {...register("email", { required: true })}
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email address"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline "
              />
              {errors.email && <span>This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700">Message</label>
              <textarea
                {...register("message", { required: true })}
                type="text"
                name="message"
                id="message"
                placeholder="Enter your message here"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
              {errors.message && <span>This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <hr className=" border-gray-400 my-2" />
    </>
  );
}

export default Contact;
