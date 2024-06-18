import { useForm } from "react-hook-form";

function Form() {
  const { register, handleSubmit } = useForm();
  function onSubmit(data) {
    console.log(data);
  }

  function onError(errors) {
    console.log(errors);
  }
  return (
    <div className="space-y-3 md:space-y-6 my-4 flex flex-col justify-center items-center sm:max-w-[40rem] md:max-w-[50rem] mx-auto px-3 md:px-6">
      <h2 className="font-semibold text-3xl">Connect with us</h2>
      <p className="text-center">
        Share your details for customer assistance, business &amp; partnership
        enquiries. Our team will get back to you shortly.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit, onError)}
        className="px-2 my-2 md:px-12 w-full flex flex-col justify-center"
      >
        <div>
          <input
            className="input"
            type="text"
            id="name"
            {...register("name")}
            placeholder="Name *"
            required=""
          />
        </div>

        <div>
          <input
            className="input"
            type="text"
            name="email"
            id="email"
            {...register("email")}
            placeholder="Email"
          />
        </div>

        <div>
          <input
            className="input"
            type="text"
            placeholder="Mobile Number *"
            required=""
            id="MobileNumber"
            {...register("mobileNumber")}
          />
        </div>

        <div>
          <input
            className="input"
            type="text"
            placeholder="Company Name"
            id="companyName"
            {...register("companyName")}
          />
        </div>

        <div>
          <textarea
            className="input"
            placeholder="Message"
            id="message"
            {...register("message")}
          ></textarea>
        </div>

        <button
          className="bg-sky-400 text-xl text-white rounded-md py-2 px-7 font-semibold mx-auto width"
          type="submit"
        >
          Send
        </button>
      </form>
    </div>
  );
}

export default Form;
