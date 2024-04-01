import NotesList from "./NotesList";

const notes = [
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "React MEetup",
  "Swift learning",
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "REact MEetup",
  "Swift learning",
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "React MEetup",
  "Swift learning",
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "React MEetup",
  "Swift learning",
  "REact MEetup",
  "Swift learning",
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "React MEetup",
  "Swift learning",
  "MIcrosoft Notes",
  "Gurugram Office Visit",
  "College Schedule",
  "React MEetup",
  "Swift learning",
];
const AllNotes = () => {
  return (
    <div className="w-1/5 bg-white m-3 p-3 rounded-md max-h-screen">
      <div className="text-xl font-semibold">Notes</div>
      <div className="flex flex-col overflow-y-auto max-h-[750px]">
        <div className=" my-2">
          {notes.map((e, index) => {
            return <NotesList list={e} />;
          })}
        </div>
      </div>
    </div>
  );
};
export default AllNotes;
