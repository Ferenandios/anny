import Image from "next/image";
import { FC } from "react";
import deleteIcon from "@/public/banana rum.svg";
import addIcon from "@/public/gymbag.svg";

const Todo: FC = () => {
  return (
    <>
      <main className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="flex flex-col w-[50vw] h-[75vh] rounded-[30px]">
          {/* Todos */}
          <ul className="flex flex-col w-full h-[calc(100%-80px)] overflow-scroll px-[30px]">
            <li className="flex items-center w-full min-h-[50px] bg-gray-200 rounded-2xl mb-[15px] p-[10px]">
              <button className="flex items-start w-[30px] h-full">
                <Image alt="Delete" src={deleteIcon} width={30} height={30} />
              </button>
              <span className="font-thin text-[18px] text-wrap w-[calc(100%-50px)] ml-[15px]">
                Make an app
              </span>
            </li>
          </ul>
          {/* Input */}
          <div className="flex items-center w-full h-[80px] px-[10px]">
            <button className="flex justify-center items-center w-[50px] h-[50px] bg-gray-200 rounded-2xl">
              <Image alt="Add" src={addIcon} width={30} height={30} />
            </button>
            <div className="flex justify-center items-center w-full h-[50px] bg-gray-200 rounded-2xl ml-[10px]">
              <input
                className="w-[calc(100%-50px)] h-[30px] border-b-2 border-gray-400"
                type="text"
              />
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Todo;
