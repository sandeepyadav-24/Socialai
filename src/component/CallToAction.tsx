const CallToAction = () => {
  return (
    <div className="flex flex-col md:flex-row md:mx-20 mx-5 my-10">
      <div className="md:w-3/5 px-10 py-20">
        <h1 className="text-4xl font-bold px-5">
          Experience the future of{" "}
          <span className="font-poppins font-sans  tracking-wider bg-gradient-to-b from-transparent to-yellow-200">
            legal practice
          </span>{" "}
          with
          <span className="font-poppins font-sans  tracking-wider bg-gradient-to-b from-transparent to-yellow-200">
            Juri.Ai
          </span>
        </h1>
        <h1 className="my-3">
          Sign up now to unlock the full potential of AI-driven legal solutions
          and elevate your legal practice to new heights
        </h1>
        <button className="text-white bg-[#284AF2] px-10 py-2 rounded-3xl my-5">
          Sign Up
        </button>
      </div>
      <div className="md:w-2/5 ">
        <div className="bg-[#E2EFFD] rounded-lg px-3 py-10 my-20 ">
          <div className="font-semibold text-3xl">How much time you save?</div>
          <div>
            2 hour <span>per Day</span>
          </div>
          <div>* Based on average results</div>
        </div>
      </div>
    </div>
  );
};
export default CallToAction;
