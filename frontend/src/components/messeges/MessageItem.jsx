import img1 from "../../images/images.png";

function MessageItem() {
  return (
    <div className="flex items-center gap-3 py-3 px-3  hover:bg-gray-200">
      <img className="w-9 h-9 rounded-full" src={img1} alt="" />
      <div>
        <h1 className="text-sm font-bold">Shreyas M S</h1>
        <h2 className="text-xs text-slate-400">Lorem ipsum dolor</h2>
      </div>
    </div>
  );
}

export default MessageItem;
