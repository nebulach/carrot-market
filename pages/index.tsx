import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="bg-slate-400 py-10 px-5 flex flex-col space-y-5 group">
      <div className="bg-white p-10 rounded-3xl shadow-2xl">
        <div className="text-2xl font-bold">Select Item</div>
        <ul>
          {[1, 2, 3, 4, 5].map((i) => (
            <div
              key={i}
              className="flex justify-between mb-1 odd:bg-slate-400 even:bg-cyan-300"
            >
              <span className=" text-gray-400">Grey Chair</span>
              <span className=" font-bold">$10</span>
            </div>
          ))}
        </ul>

        <div className="flex justify-between my-1">
          <span className=" text-gray-400">Tooly Talbe</span>
          <span className="font-bold">$8</span>
        </div>
        <div className="flex justify-between border-t-2 border-dashed group-hover:bg-black">
          <span>Total</span>
          <span className="font-bold">$9</span>
        </div>
        <div className=" bg-blue-500 rounded-lg text-center text-white mt-5 w-1/2 mx-auto py-2 hover:bg-black hover:text-red-600">
          Checkout
        </div>
      </div>
      <div className="bg-white p-10 rounded-3xl"></div>
      <div className="bg-white p-10 rounded-3xl"></div>
      <div className="bg-white p-10 rounded-3xl"></div>
      <div>
        <details>
          <summary>what is my fav. food</summary>
          <span>김치</span>
        </details>
      </div>
    </div>
  );
};

export default Home;
