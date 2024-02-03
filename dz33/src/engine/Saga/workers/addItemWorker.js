import { v4 as uuidv4 } from "uuid";
import { put, select } from "redux-saga/effects";
import { add } from "../../Redux/Slices/todoSlice";

export default function* addItemWorker(action) {
  const { event, input } = action.payload;
  event.preventDefault();
  if (input.current.value.trim() === "") {
    alert("Enter a value!");
    return;
  }
  yield put(add({ text: input.current.value, id: uuidv4() }));
  const items = yield select((state) => state.todo);
  localStorage.setItem("todo", JSON.stringify(items));
  yield (input.current.value = "");
}
