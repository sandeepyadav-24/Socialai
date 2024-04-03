import Editor from "./Editor";
const NoteWriting = () => {
  return (
    <div className="w-4/5 m-3 bg-[#F5F9FC] rounded-xl">
      <div className="flex flex-row justify-between">
        <div className="heading font-bold text-2xl p-3">New Draft</div>
        <button className="bg-blue-700 my-3 py-1 px-3 mr-5 text-white rounded-lg">
          Save
        </button>
      </div>

      <hr />
      <div className="overflow-y-auto max-h-[750px]">
        <Editor />
      </div>
    </div>
  );
};
export default NoteWriting;
