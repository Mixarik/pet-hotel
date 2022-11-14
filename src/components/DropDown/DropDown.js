import React from "react";

const DropDown = () => {
  return (
    <div className="dropdown">
      <button
        className="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Кнопка выпадающего списка
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li className="dropdown-item">Действие</li>
        <li className="dropdown-item">Другое действие</li>
        <li className="dropdown-item">Что-то еще здесь</li>
      </ul>
    </div>
  );
};
export default DropDown
