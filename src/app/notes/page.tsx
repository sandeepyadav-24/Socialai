import AllNotes from "@/component/AllNotes";
import LeftNavbar from "@/component/LeftNavbar";
import NotePad from "@/component/NotePad";
const Notes = () => {
  return (
    <div className="flex flex-col md:flex-row bg-[#F5F8FA]">
      <LeftNavbar />
      <AllNotes />
      <NotePad />
    </div>
  );
};
export default Notes;
