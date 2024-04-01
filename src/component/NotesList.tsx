interface prop {
  list: string;
}
const NotesList = (props: prop) => {
  return (
    <div className="hover:bg-[#E4F1FC] py-1 my-1 px-2 rounded-md">
      {props.list}
    </div>
  );
};
export default NotesList;
