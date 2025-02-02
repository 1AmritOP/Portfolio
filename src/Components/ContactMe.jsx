import React from "react";

const ContactMe = () => {
  return (
    <>
      <div className="mt-16 max-md:flex-col max-md:min-h-[65vh]  w-full h-[80vh] flex items-center justify-between gap-4 py-10 px-12">
        <div className="max-md:w-full w-1/2">
          <button
            className="  bg-indigo-600 bg-opacity-20 text-purple px-3 py-1 text-lg border-purple border-solid
                         uppercase font-semibold rounded-full border-[1px]"
          >
            Contact
          </button>
          <h1 className=" font-bold text-6xl my-2">Got a problem to Solve?</h1>
          {/* <h1 className=' font-bold text-6xl mb-2'>
                    to solve?
                </h1> */}
          <p className="text-slate-500">
            Get your space suit ready and tell me your ideas to develop
            <span> your dream website.</span>
          </p>
        </div>

        <div className=" max-md:w-full w-1/2">
          <h1>Name</h1>
          <input
            type="text"
            required
            className=" my-2 rounded-xl w-full h-14 bg-slate-500 focus:shadow-3xl focus:outline focus:outline-purple focus:outline-2 focus:shadow-purple p-3  "
          />

          <h1>Email</h1>
          <input
            type="email"
            required
            className=" my-2 rounded-xl w-full h-14 bg-slate-500 focus:shadow-3xl focus:outline focus:outline-purple focus:outline-2 focus:shadow-purple p-3  "
          />

          <h1>Massage</h1>
          <textarea
            name=""
            id=""
            className=" my-2 rounded-xl w-full h-20 bg-slate-500 focus:shadow-3xl focus:outline focus:outline-purple focus:outline-2 focus:shadow-purple p-3  "
          ></textarea>

          {/* <button className="btn btn-outline btn-primary px-8">Hire - Me</button> */}
          <button className="flex items-center bg-purple  gap-1 px-4 py-2 cursor-pointer   tracking-widest rounded-md hover:bg-indigo-400  duration-300 hover:gap-2 hover:translate-x-3">
            Hire Me
            <svg
              class="w-5 h-5"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                stroke-linejoin="round"
                stroke-linecap="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
