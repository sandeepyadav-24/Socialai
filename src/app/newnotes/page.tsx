import LeftNavbar from "@/component/LeftNavbar";
import NoteWriting from "@/component/NoteWriting";

const NewNotes = () => {
  return (
    <div className="flex flex-row bg-[#F5F8FA]">
      <LeftNavbar />
      <NoteWriting />
    </div>
  );
};

export default NewNotes;
