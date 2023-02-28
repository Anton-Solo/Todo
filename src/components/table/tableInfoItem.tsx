import { useState } from "react";
import { useCustomDispatch } from "../../hooks/useStore";
import { changeStatus } from "../../store/slices/todoSlice";

export const TableInfoItem = ({
  id,
  title,
  description,
  status,
}: {
  id: string;
  title: string;
  description: string;
  status: boolean;
}) => {
  const dispatch = useCustomDispatch();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <ul className="table-info">
        <li onClick={() => setOpenModal(true)}>{id}</li>
        <li>{title}</li>
        <li>
          {description?.length > 50
            ? `${description?.slice(0, 50)}...`
            : description}
        </li>
        <li>
          <input
            type="checkbox"
            checked={status}
            onChange={(e) => {
              e.stopPropagation();
              dispatch(changeStatus({ id, status: !status }));
            }}
          />
        </li>
      </ul>

      {openModal ? (
        <div className="modal-overlay">
          <div className="modal">
            <h2>{title}</h2>
            <div className="modal-descr">
              <h5>Description:</h5>
              {description}
            </div>
            <div className="modal-status">
              <h5>Status:</h5>
              <input
                type="checkbox"
                checked={status}
                onChange={() => dispatch(changeStatus({ id, status: !status }))}
              />
            </div>
            <button onClick={() => setOpenModal(false)}>Close</button>
          </div>
        </div>
      ) : null}
    </>
  );
};
