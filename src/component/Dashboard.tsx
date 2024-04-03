import Banner from "./Banner";
const Dashboard = () => {
  return (
    <div className="bg-[#F5F9FC] md:w-4/5 h-[800px] m-2 rounded-xl">
      <div className=" text-2xl font-bold p-3 ">Dashboard</div>
      <hr />
      <div className="p-5">
        <Banner />
      </div>
    </div>
  );
};
export default Dashboard;
