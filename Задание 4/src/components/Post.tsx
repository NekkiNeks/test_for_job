//redux
import { useAppDispatch } from "../store/hooks";
import { deletePost } from "../store/slices/postsSlice";
import {
  updateId,
  updateBody,
  updateTitle,
  updateShow,
} from "../store/slices/modalSlice";

//devExtreme
import Button from "devextreme-react/button";
import notify from "devextreme/ui/notify";

//types
import type { iPost } from "../types/types";
interface iProps extends iPost {}

export default function Post({ title, body, id }: iProps) {
  const dispatch = useAppDispatch();

  function handleDelete() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Вы уверены что хотите удалить пост?")) {
      dispatch(deletePost({ id }));
      notify("Post was deleted!", "success");
    }
  }

  function handleChange() {
    dispatch(updateId({ id }));
    dispatch(updateBody({ body }));
    dispatch(updateTitle({ title }));
    dispatch(updateShow({ show: true }));
  }

  return (
    <div className="w-54 mb-8 bg-stone-50 p-5 rounded-md drop-shadow-md">
      <h2 className="text-xl mb-5">{title}</h2>
      <p className="mb-5">{body}</p>
      <div className="flex space-x-4">
        <Button text="Change" type="default" onClick={handleChange} />
        <Button text="Delete" type="danger" onClick={handleDelete} />
      </div>
    </div>
  );
}
