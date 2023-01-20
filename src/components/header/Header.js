import "./header.scss";
import logo from "../../resources/img/logo.png";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { FIND_ALL_MOVIES } from "../../gql/queries";

const Header = () => {
  const { data } = useQuery(FIND_ALL_MOVIES, {
    variables: { query: { skip: 0, take: 100 } },
  });
  const [isActive, setActive] = useState(false);
  const [formInput, setFormInput] = useState("");
  const [color, setColor] = useState("");

  const navigate = useHistory();

  const handleSearch = (title) => {
    const film = data.findAllMovies.items.find((item) => {
      return item.title.toLowerCase() === title.toLowerCase();
    });
    if (film) {
      navigate.push(`/films/${film.id}`);
      setFormInput("");
      setActive(false);
    } else {
      setColor("red");
      setFormInput("WARNING: film was not found...");
      setTimeout(() => setColor(""), 2000);
      setTimeout(() => setFormInput(""), 2000);
      return null;
    }
  };

  const inputHandler = (e) => {
    setFormInput(e.target.value);
  };

  const onSubmitHandler = () => {
    if (formInput.length > 0) {
      handleSearch(formInput);
    }
  };

  const addActiveClass = () => {
    setActive(true);
  };

  const deleteActiveClass = () => {
    setActive(false);
    setFormInput("");
  };

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://kit.fontawesome.com/3d0e27e432.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <header className="app__header">
      <div className="app__title">
        <div className="app__title-name">
          <h1>
            <a href="/">MovieCon</a>
          </h1>
        </div>
        <div className="app__title-logo">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>
        </div>
      </div>
      <div>
        <form className={`app__search ${isActive ? "active" : ""}`}>
          <input
            style={{ color: `${color}` }}
            value={formInput}
            onChange={inputHandler}
            className={` ${isActive ? "active" : ""}`}
            type="text"
            placeholder="Search..."
          />
          <div
            onClick={() => {
              addActiveClass();
              onSubmitHandler();
            }}
            className={`app__search-search-btn ${isActive ? "active" : ""}`}
          >
            <i className="fas fa-search"></i>
          </div>
          <div
            onClick={deleteActiveClass}
            className={`app__search-cancel-btn ${isActive ? "active" : ""}`}
          >
            <i className="fas fa-times"></i>
          </div>
        </form>
      </div>
    </header>
  );
};

export default Header;
