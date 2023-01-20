import React, { useRef } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { Link } from "react-router-dom";

import Spinner from "../spinner/Spinner";
import "./listOfFilms.scss";
import { useQuery } from "@apollo/client";
import { FIND_ALL_MOVIES } from "../../gql/queries";

const ListOfFilms = (props) => {
  let counter = 10;
  const { loading, data, refetch } = useQuery(FIND_ALL_MOVIES, {
    variables: { query: { skip: 0, take: counter } },
  });

  const itemRefs = useRef([]);

  const focusOnItem = (id) => {
    itemRefs.current.forEach((item) =>
      item.classList.remove("film__item_selected")
    );
    itemRefs.current[id].classList.add("film__item_selected");
    itemRefs.current[id].focus();
  };

  function renderItems(arr) {
    const items = arr.map((item, i) => {
      let imgStyle = { objectFit: "cover" };

      return (
        <CSSTransition key={item.id} timeout={500} classNames="film__item">
          <li
            className="film__item"
            tabIndex={0}
            ref={(el) => (itemRefs.current[i] = el)}
            key={item.id}
            onClick={() => {
              props.onfilmSelected(item.id);
              focusOnItem(i);
            }}
            onKeyPress={(e) => {
              if (e.key === " " || e.key === "Enter") {
                props.onfilmSelected(item.id);
                focusOnItem(i);
              }
            }}
          >
            <Link to={`/films/${item.id}`}>
              <img src={item.posterPath} alt={item.title} style={imgStyle} />
              <div className="film__name">
                {item.title.length > 18
                  ? `${item.title.slice(0, 18)}...`
                  : item.title}
              </div>
              <div className="film__overlay">
                <div className="film__overlay-title">Info</div>
              </div>
            </Link>
          </li>
        </CSSTransition>
      );
    });

    return (
      <ul className="film__grid">
        <TransitionGroup component={null}>{items}</TransitionGroup>
      </ul>
    );
  }

  const element = loading ? <Spinner /> : renderItems(data.findAllMovies.items);

  const button_content = loading ? (
    <div className="film__list-loader"></div>
  ) : (
    <div className="inner">load more</div>
  );

  return (
    <div className="film__list">
      {element}
      <button
        className="film__list-button"
        // disabled={loading}
        style={{ display: loading ? "none" : "flex" }}
        onClick={() => {
          counter += 10;
          refetch({ query: { skip: 0, take: counter } });
        }}
      >
        {button_content}
      </button>
    </div>
  );
};

export default React.memo(ListOfFilms);
