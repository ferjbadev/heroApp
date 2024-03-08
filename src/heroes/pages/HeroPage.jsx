import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../helpers/getHeroById";
import { useMemo } from "react";
import "animate.css";

export const HeroPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const hero = useMemo(() => getHeroById(id), [id]);

  const onBack = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/marvel" />;
  }

  return (
    <div className="row mt-5 animate__animated animate__fadeInLeft">
      <div className="col-4">
        <img
          src={`/assets/heroes/${id}.jpg`}
          alt={hero.superhero}
          className="img-thumbnail"
        />
      </div>
      <div className="col-8">
        <h3>{hero.superhero}</h3>
        <ul className="list-gruop list-gruop-flush">
          <li className="list-gruop-item">
            <b>Alter Ego </b>
            {hero.alter_ego}
          </li>
          <li className="list-gruop-item">
            <b>Publisher </b>
            {hero.publisher}
          </li>
          <li className="list-gruop-item">
            <b>first Appearance </b>
            {hero.first_appearance}
          </li>
        </ul>
        <h5 className="mt-3"> Characters </h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary" onClick={onBack}>
          Back
        </button>
      </div>
    </div>
  );
};
