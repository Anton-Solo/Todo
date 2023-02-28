import { useEffect, useState } from "react";
import { useCustomDispatch, useCustomSelector } from "../../hooks/useStore";
import { todoInputs } from "../../store/selectors";
import {
  addTodo,
  changeDescription,
  changeTitle,
} from "../../store/slices/todoSlice";
import "./header.scss";
import { v4 as uuidv4 } from "uuid";

export const Header = () => {
  const dispatch = useCustomDispatch();
  const todoObj = useCustomSelector(todoInputs);
  const [errorTrigger, setErrorTrigger] = useState(false);
  const [titleError, setTitleError] = useState(false);
  const [descrError, setDescrError] = useState(false);

  const createTodo = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (todoObj?.title?.length > 0 && todoObj?.description?.length > 0) {
      dispatch(
        addTodo({
          id: uuidv4(),
          title: todoObj?.title,
          description: todoObj?.description,
          status: false,
        })
      );
      dispatch(changeTitle(""));
      dispatch(changeDescription(""));
      setErrorTrigger(false);
    } else {
      setErrorTrigger(true);
    }
  };

  useEffect(() => {
    if (errorTrigger) {
      if (todoObj?.title?.length === 0) {
        setTitleError(true);
      } else {
        setTitleError(false);
      }

      if (todoObj?.description?.length === 0) {
        setDescrError(true);
      } else {
        setDescrError(false);
      }
    }
  }, [todoObj?.title, todoObj?.description, errorTrigger]);

  return (
    <div className="header">
      <form>
        <div className="header-item">
          <label htmlFor="title">Title</label>
          <input
            style={{ borderColor: titleError ? "red" : "" }}
            type="text"
            id="title"
            value={todoObj?.title}
            onChange={(e) => {
              e.preventDefault();
              dispatch(changeTitle(e.target.value));
            }}
          />
          {titleError ? <span>This field is empty</span> : false}
        </div>
        <div className="header-item">
          <label htmlFor="descr">Description</label>
          <input
            style={{ borderColor: descrError ? "red" : "" }}
            type="text"
            id="descr"
            value={todoObj?.description}
            onChange={(e) => {
              e.preventDefault();
              dispatch(changeDescription(e.target.value));
            }}
          />
          {descrError ? <span>This field is empty</span> : false}
        </div>
        <button onClick={(e) => createTodo(e)}>Create</button>
      </form>
    </div>
  );
};
