import Image from "next/image";
import { FC } from "react";
import deleteIcon from "@/public/banana rum.svg";

const Todo: FC = () => {
  return (
    <>
      <main className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="flex flex-col w-[50vw] h-[75vh] bg-lime-200 rounded-[30px]">
          {/* Todos */}
          <ul className="flex flex-col w-full">
            <li className="flex items-center w-full min-h-[50px] bg-red-200 rounded-2xl mb-[15px] p-[10px]">
              <button className="flex items-start w-[30px] h-full">
                <Image alt="Delete" src={deleteIcon} width={30} height={30} />
              </button>
              <span className="font-thin text-[18px] text-wrap w-[calc(100%-50px)] ml-[15px]">
                Make an app
              </span>
            </li>
            <li className="flex items-center w-full min-h-[50px] bg-red-200 rounded-2xl mb-[15px] p-[10px]">
              <button className="flex items-start w-[30px] h-full">
                <Image alt="Delete" src={deleteIcon} width={30} height={30} />
              </button>
              <span className="font-thin text-[18px] text-wrap w-[calc(100%-50px)] ml-[15px]">
                Make an app
              </span>
            </li>
            <li className="flex items-center w-full min-h-[50px] bg-red-200 rounded-2xl mb-[15px] p-[10px]">
              <button className="flex items-start w-[30px] h-full">
                <Image alt="Delete" src={deleteIcon} width={30} height={30} />
              </button>
              <span className="font-thin text-[18px] text-wrap w-[calc(100%-50px)] ml-[15px]">
                Make an app
              </span>
            </li>
          </ul>
          {/* Input */}
        </div>
      </main>
    </>
  );
};

export default Todo;
