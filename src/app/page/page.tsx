import Dashboard from "@/component/Dashboard";
import LeftNavbar from "@/component/LeftNavbar";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row ">
      <LeftNavbar />
      <Dashboard />
    </div>
  );
};
export default Home;
