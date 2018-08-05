//@flow

import React from "react";

const BooksList = ({ lang, tags, item, location, history }) => {
  return (
    <li>
      {lang === "ru" ? (
        <div>
          <p>{item.titleRU}</p>
          <p>{item.authorsRU}</p>
          <p>{item.length}</p>
          <p>{item.lang}</p>
          <p>
            {item.tag.map(itemElem => (
              <span key={`tag-${itemElem}`}>
                {tags.find(tagElem => tagElem.id === itemElem).titleRU}
              </span>
            ))}
          </p>
        </div>
      ) : (
        <div>
          <p>{item.titleEN}</p>
          <p>{item.authorsEN}</p>
          <p>{item.length}</p>
          <p>{item.lang}</p>
          <p>
            {item.tag.map(itemElem => (
              <span key={`tag-${itemElem}`}>
                {tags.find(tagElem => tagElem.id === itemElem).titleEN}
              </span>
            ))}
          </p>
        </div>
      )}
    </li>
  );
};

export default BooksList;
