import LeftNavbar from "@/component/LeftNavbar";
import NoteWriting from "@/component/NoteWriting";

const NewNotes = () => {
  return (
    <div className="flex flex-col md:flex-row bg-black">
      <LeftNavbar />
      <NoteWriting />
    </div>
  );
};

export default NewNotes;
