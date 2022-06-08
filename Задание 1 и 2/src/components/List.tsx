import React, { useState } from "react";
import "./List.scss";

type iProps = {
  title: string;
  items: string[];
  block?: boolean;
};

export default function List({ title, items, block }: iProps) {
  const [show, setShow] = useState<boolean>(false);

  function handleOpen(e: React.MouseEvent<HTMLDivElement>) {
    setShow(!show);
  }

  const className = `
    list
    ${block ? "list__block" : ""}
    ${show ? "list__opened" : ""}
  `;

  return (
    <div onClick={handleOpen} className={className}>
      <div className="lisе-header">
        <p className="list-header__title">{title}</p>
      </div>
      {show && (
        <ul className="list-items">
          {items.map((item) => {
            return (
              <li
                className="list-items__item"
                onClick={() => console.log(item)}
                key={item}
              >
                {item}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
