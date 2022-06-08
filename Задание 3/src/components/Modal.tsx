import React from "react";

//redux
import type { RootState } from "../store/store";
import { useAppDispatch } from "../store/hooks";
import { useSelector } from "react-redux";
import {
  updateBody,
  updateTitle,
  defaultState,
} from "../store/slices/modalSlice";
import { updatePost } from "../store/slices/postsSlice";

export default function Modal() {
  const { title, id, body } = useSelector((state: RootState) => state.modal);
  const dispatch = useAppDispatch();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (title !== "" && id !== null && body !== "") {
      dispatch(updatePost({ body, title, id }));
      dispatch(defaultState());
    } else {
      alert("Введите текст");
    }
  }

  function handleReset() {
    dispatch(defaultState());
  }

  return (
    <div
      onClick={handleReset}
      className="fixed top-0 left-0 right-0 h-screen w-screen  z-10 bg-neutral-500/50 flex justify-center items-center "
    >
      <form
        onClick={(e) => e.stopPropagation()}
        onSubmit={handleSubmit}
        onReset={handleReset}
        className="flex flex-col bg-white p-5 rounded-xl w-1/2"
      >
        <label htmlFor="title" className="text-lg">
          Title:
        </label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => dispatch(updateTitle({ title: e.target.value }))}
          className="bg-slate-50 p-2 mb-5 rounded"
        />
        <label htmlFor="body" className="text-lg">
          Body:
        </label>
        <textarea
          name="body"
          value={body}
          onChange={(e) => dispatch(updateBody({ body: e.target.value }))}
          className="bg-slate-50 h-56 p-2 mb-5 resize-none rounded focus:outline-0"
        />
        <div className="flex space-x-5 justify-center">
          <button
            type="submit"
            className="bg-sky-400 text-white p-2 rounded hover:bg-sky-500"
          >
            Сохранить
          </button>
          <button
            type="reset"
            className="bg-red-400 text-white p-2 rounded hover:bg-red-500"
          >
            Отменить
          </button>
        </div>
      </form>
    </div>
  );
}
