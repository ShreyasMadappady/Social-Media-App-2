import MessageItem from "./MessageItem";

function MessageMain() {
  return (
    <div className=" bg-white rounded-2xl pt-3">
      <div className="flex justify-between px-3 pb-2">
        <h1 className="font-bold">Messages</h1>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          fill="#000000"
          viewBox="0 0 256 256"
          className="w-5"
        >
          <path d="M229.66,58.34l-32-32a8,8,0,0,0-11.32,0l-96,96A8,8,0,0,0,88,128v32a8,8,0,0,0,8,8h32a8,8,0,0,0,5.66-2.34l96-96A8,8,0,0,0,229.66,58.34ZM124.69,152H104V131.31l64-64L188.69,88ZM200,76.69,179.31,56,192,43.31,212.69,64ZM224,120v88a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V48A16,16,0,0,1,48,32h88a8,8,0,0,1,0,16H48V208H208V120a8,8,0,0,1,16,0Z"></path>
        </svg>
      </div>
      <input
        type="text"
        placeholder="Search Messages"
        className="rounded-full px-2 py-[3px] w-10/12 bg-gray-200 ml-5"
      />
      <div className="flex  pt-3 text-sm justify-between px-3">
        <h1 className="border-b-2 p-1 border-b-slate-400  font-semibold">
          Primary
        </h1>
        <h1 className="border-b-2 p-1  border-b-slate-400  font-semibold">
          General
        </h1>
        <h1 className="border-b-2 p-1  border-b-slate-400 font-semibold">
          Requestes
        </h1>
      </div>
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
      <MessageItem />
    </div>
  );
}

export default MessageMain;
