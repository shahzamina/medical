import React from 'react'
import { useForm, Controller } from "react-hook-form";
import CreatableSelect from "react-select/creatable";

const Rental = () => {
  const { register, handleSubmit, control, setValue, watch } = useForm();

  const customStyles = {
  control: (base, state) => ({
    ...base,
    border: `2px solid ${state.isFocused ? "#1E90FF" : "#0046A0"}`,
    boxShadow: state.isFocused ? "0 0 4px rgba(30,144,255,0.4)" : "none",
    backgroundColor: "white",
    color: "#0046A0",
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover": { borderColor: "#1E90FF" },
  }),
  input: (base) => ({ ...base, color: "#0046A0" }),
  placeholder: (base) => ({
    ...base,
    color: "#4A76C9",
    fontStyle: "italic",
  }),
  singleValue: (base) => ({ ...base, color: "#0046A0" }),
  menu: (base) => ({
    ...base,
    background: "white",
    borderRadius: 0,
    marginTop: 2,
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  }),
  option: (base, state) => ({
    ...base,
    textAlign: "left",
    padding: "12px 14px",
    background: state.isFocused
      ? "linear-gradient(to right, #00BFFF, #1E90FF, #104E8B)"
      : "transparent",
    color: state.isFocused ? "white" : "#0046A0",
    cursor: "pointer",
    transition: "all 0.3s ease",
  }),
  clearIndicator: (base) => ({
    ...base,
    color: "#1E90FF",
    "&:hover": { color: "#0077AA" },
  }),
  dropdownIndicator: (base) => ({
    ...base,
    color: "#1E90FF",
    "&:hover": { color: "#0077AA" },
  }),
};

    const onSubmit = (data) => console.log("Submitted Data:", data);
  return (
    <>
  <div className=' bg-gray-300 h-24'>

     </div>
    <div>
       <form
      onSubmit={handleSubmit(onSubmit)}
       className="relative max-w-2xl mx-auto bg-gradient-to-br from-[#001F3F] via-[#0077AA] to-[#001F3F] p-8 rounded-lg shadow-md space-y-4 my-5 overflow-hidden"
    >
         <div className="absolute inset-0 animate-[stars_20s_linear_infinite] [background-image:radial-gradient(#39FF14_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>
      {/* Input Fields */}
        <div className="relative z-10 space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <input
          {...register("firstName")}
          placeholder="First Name"
           className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />
        <input
          {...register("lastName")}
          placeholder="Last Name"
            className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />
      </div>

<div className="grid grid-cols-2 gap-4">
      <input
        {...register("companyName")}
        placeholder="Company Name"
         className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
      />

      <input
        {...register("email")}
        type="email"
        placeholder="Email"
          className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
      />
</div>
     
    <div className="grid grid-cols-2 gap-4">
        <input
          {...register("phoneNumber")}
          placeholder="Phone Number"
            className="bg-white border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none placeholder:text-[#0046A0]"
        />
      <div>
  <Controller
    name="rentalService"
    control={control}
    render={({ field }) => (
      <CreatableSelect
        {...field}
        placeholder="Choose Rental Services"
        options={[
          { value: "Multivendor Magnet Power Supply", label: "Multivendor Magnet Power Supply" },
          { value: "Coldhead Replacement Kit", label: "Coldhead Replacement Kit" },
          { value: "Coldhead Maintenance Kit", label: "Coldhead Maintenance Kit" },
          { value: "MRI-Compatible Tools", label: "MRI-Compatible Tools" },
          { value: "Helium Filling Kits", label: "Helium Filling Kits" },
        ]}
        styles={customStyles}
        isClearable
      />
    )}
  />
</div>

</div>


      <textarea
        {...register("partDescription")}
        placeholder="Comment"
        rows="3"
        className="bg-white mt-3 border-2 border-[#0046A0] rounded-lg p-3 focus:border-[#1E90FF] outline-none w-full placeholder:text-[#0046A0]"
      />

      {/* Manufacturer & Modality Selects */}
 


      <button
        type="submit"
        className="mt-3 w-60 bg-[#1E90FF] text-white font-semibold py-3 rounded-lg hover:bg-[#0046A0] transition-all"
      >
        Submit
      </button>

      </div>
    </form>
    </div>
      </>
  )
}

export default Rental
