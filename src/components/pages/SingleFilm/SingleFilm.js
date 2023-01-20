import { useParams } from "react-router-dom";

import Spinner from "../../spinner/Spinner";
import "./SingleFilm.scss";
import { FIND_ONE_MOVIE } from "../../../gql/queries";
import { useQuery } from "@apollo/client";

const SingleComicPage = () => {
  const { filmId } = useParams();
  const { loading, error, data } = useQuery(FIND_ONE_MOVIE, {
    variables: { findOneMovieId: filmId },
  });
  console.log(data);

  const spinner = loading ? <Spinner /> : null;
  const content = !(loading || error || !data.findOneMovie) ? (
    <View film={data.findOneMovie} />
  ) : null;

  return (
    <>
      {spinner}
      {content}
    </>
  );
};

const View = ({ film }) => {
  const { title, posterPath, overview, originalLanguage, releaseDate, adult, voteAverage} = film;
  const date = releaseDate.toString().slice(0,10);
  const ifAdult = adult ? 'Yes' : 'No';
  return (
    <div className="single-film">
      <img src={posterPath} alt={title} className="single-film__img" />
      <div className="single-film__info">
        <div>
          <h2 className="single-film__name">{title}</h2>
        </div>
        <div className="single-film__information">
          <div className="single-film__information-about">
            <div>Raiting:</div>
            <div className="single-film__information-descr">{voteAverage}/10</div>
          </div>
          <div className="single-film__information-about">
            <div>18+ :</div>
            <div>{ifAdult}</div>
          </div>
          <div className="single-film__information-about">
            <div>Year:</div>
            <div>{date}</div>
          </div>
          <div className="single-film__information-about">
            <div>Language:</div>
            <div>{originalLanguage}</div>
          </div>
        </div>
        <div className="single-film__review">
          <h2 className="ew">Review:</h2>
          <p className="single-film__review-descr">{overview}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleComicPage;
