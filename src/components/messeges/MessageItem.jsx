import img1 from "../../images/images.png";

function MessageItem() {
  return (
    <div className="flex items-center gap-3 pb-3">
      <img className="w-9 h-9 rounded-full" src={img1} alt="" />
      <div>
        <h1 className="text-sm font-semibold">Jerry Alvarez</h1>
        <h2 className="text-xs">Lorem ipsum dolor</h2>
      </div>
    </div>
  );
}

export default MessageItem;
