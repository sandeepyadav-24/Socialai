import LeftNavbar from "@/component/LeftNavbar";
import PromptBox from "@/component/PromptBox";

const WriteWithAi = () => {
  return (
    <div className="flex flex-row bg-black">
      <LeftNavbar />
      <PromptBox />
    </div>
  );
};
export default WriteWithAi;
