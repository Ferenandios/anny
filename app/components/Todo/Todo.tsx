"use client";

import Image from "next/image";
import { FC, useRef, useState, KeyboardEvent } from "react";
import deleteIcon from "@/public/banana rum.svg";
import addIcon from "@/public/gymbag.svg";
import clsx from "clsx";

interface ITodo {
  id: number;
  text: string;
  isLucky: boolean;
}

const Todo: FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [todos, setTodos] = useState<ITodo[]>([
    { id: 0, text: "Make an app!", isLucky: true },
    { id: 1, text: "Learn TypeScript", isLucky: false },
    { id: 2, text: "Drink coffee", isLucky: false },
  ]);
  // Delete todo from the state by todo.id
  const deleteTodo = (currentId: number) => {
    const removeIndex: number = todos.map((todo) => todo.id).indexOf(currentId);
    if (removeIndex !== -1) {
      const newTodos = [...todos];
      newTodos.splice(removeIndex, 1);
      setTodos(newTodos);
    }
  };
  // Add todo to the state Button
  const addTodo = () => {
    const inputValue: string = inputRef.current?.value.trim() || "";
    if (inputValue === "") return;
    const newTodo: ITodo = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      text: inputValue,
      isLucky: getRandomNumber() === 3,
    };
    setTodos([...todos, newTodo]);
    // Clear the input
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  // Add todo to the state by 'Enter'
  const handlePress = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== "Enter") return;
    addTodo();
  };
  // RNG for Todo background
  const getRandomNumber: () => number = () => {
    const range = 10; // 0 — 10
    return Math.floor(Math.random() * (range + 1));
  };

  return (
    <>
      {/* flex justify-center items-center w-[100vw] h-[100vh]
      Объяснение стилей: Здесь я юзаю флексы с указанием ширины и высоты
      равной 100 проц экрана браузера, чтобы отцентрировать туду-список
      на странице
      */}
      <main className="flex justify-center items-center w-[100vw] h-[100vh]">
        <div className="flex flex-col w-[50vw] h-[75vh] rounded-[30px]">
          {/* Todos */}

          {/* h-[calc(100%-80px)]
          Объяснение стилей: Я хотел сделать заданные ширину и высоту так,
          чтобы при изменении ширины экрана кнопка удаления тудушки
          оставалась 30 пикселей а сам текст сужался 
          */}

          <div className="w-full h-[calc(100%-80px)] overflow-scroll px-[30px]">
            {todos.length ? (
              <ul className="flex flex-col w-full h-full">
                {todos.map((todo) => (
                  <li
                    key={todo.id}
                    className={clsx(
                      `flex items-center w-full min-h-[50px] ${
                        todo.isLucky ? "bg-yellow-200" : "bg-gray-200"
                      } rounded-2xl mb-[15px] p-[10px]`
                    )}
                  >
                    <button
                      onClick={() => deleteTodo(todo.id)}
                      className="cursor-pointer flex items-start w-[30px] h-full"
                    >
                      <Image
                        alt="Delete"
                        src={deleteIcon}
                        width={30}
                        height={30}
                      />
                    </button>
                    <span className="font-thin text-[18px] text-wrap w-[calc(100%-50px)] ml-[15px]">
                      {todo.text}
                    </span>
                  </li>
                ))}
              </ul>
            ) : (
              <h3 className="flex justify-center mt-[30px] opacity-40">
                There&apos;s no desires!
              </h3>
            )}
          </div>
          {/* Input */}

          {/* flex justify-center items-center w-[50px] h-[50px] bg-gray-200 rounded-2xl
          Объяснение стилей: Тут если присмотрется, то можно изи разглядеть тэг button вокруг image, который
          задает прост немного пространства вокруг картинки и офк центрирует картинку (чтобы красиво было).
          Также у инпута такая же дивка вокруг, чтобы парень на инпуте был более замечен (ну мне так дизайн
          прост больше нравки)
          */}

          <div className="flex items-center w-full h-[80px] px-[10px]">
            <button
              onClick={() => addTodo()}
              className="cursor-pointer flex justify-center items-center w-[50px] h-[50px] bg-gray-200 rounded-2xl"
            >
              <Image alt="Add" src={addIcon} width={30} height={30} />
            </button>
            <div className="flex justify-center items-center w-full h-[50px] bg-gray-200 rounded-2xl ml-[10px]">
              <input
                ref={inputRef}
                onKeyDown={handlePress}
                placeholder={"Enter a new Desire!"}
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
