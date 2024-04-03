import NotesList from "./NotesList";

const notes = [
  {
    title: "Microsoft Notes",
    des: "I have been there... ",
  },
  {
    title: "Gurugram Office Visit",
    des: "I have been there... ",
  },
  {
    title: "College Schedule",
    des: "I have been there... ",
  },
  {
    title: "React MEetup",
    des: "I have been there... ",
  },
  {
    title: "Swift learning",
    des: "I have been there... ",
  },
  {
    title: "Gurugram Office Visit",
    des: "I have been there... ",
  },
  {
    title: "College Schedule",
    des: "I have been there... ",
  },
  {
    title: "React MEetup",
    des: "I have been there... ",
  },
  {
    title: "Microsoft Notes",
    des: "I have been there... ",
  },
  {
    title: "Gurugram Office Visit",
    des: "I have been there... ",
  },
  {
    title: "College Schedule",
    des: "I have been there... ",
  },
  {
    title: "React MEetup",
    des: "I have been there... ",
  },
  {
    title: "Swift learning",
    des: "I have been there... ",
  },
  {
    title: "Gurugram Office Visit",
    des: "I have been there... ",
  },
  {
    title: "College Schedule",
    des: "I have been there... ",
  },
  {
    title: "React MEetup",
    des: "I have been there... ",
  },
];

const AllNotes = () => {
  return (
    <div className="w-1/5 bg-[#F5F9FC] m-3  rounded-xl h-[800px] ">
      <div className="text-2xl font-bold p-3 px-5 flex flex-row justify-between">
        <div>All Journal</div>
        <div>
          <svg
            className="w-8 h-8 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fill-rule="evenodd"
              d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-6.616l-2.88 2.592C8.537 20.461 7 19.776 7 18.477V17H5a2 2 0 0 1-2-2V6Zm4 2a1 1 0 0 0 0 2h5a1 1 0 1 0 0-2H7Zm8 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2Zm-8 3a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm5 0a1 1 0 1 0 0 2h5a1 1 0 1 0 0-2h-5Z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </div>
      <hr />
      <div className="flex flex-col overflow-y-auto max-h-[750px]">
        <div className=" ">
          {notes.map((e, index) => {
            return (
              <NotesList
                title={e.title}
                description={e.des}
                key={index}
                id={index}
              />
            );
          })}
        </div>
        <hr />
      </div>
    </div>
  );
};
export default AllNotes;
