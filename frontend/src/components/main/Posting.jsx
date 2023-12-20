import img1 from "../../images/images.png";
function Posting() {
  return (
    <div className="flex bg-white px-3 py-2 rounded-full gap-4 justify-between items-center ">
      <img className="w-9 h-9 rounded-full" src={img1} alt="" />
      <input className="" type="text" placeholder="Share your thoughts..." />
      <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
        Post
      </button>
    </div>
  );
}

export default Posting;
