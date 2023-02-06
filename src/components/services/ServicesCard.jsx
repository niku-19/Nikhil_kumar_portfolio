import React from "react";
import { BiCheck } from "react-icons/bi";

const ServicesCard = (props) => {
  return (
    <>
      <article className="services">
        <div className="services__header">
          <h3>{props.Title}</h3>
        </div>

        <ul className="service__list">
          <li>
            <BiCheck className="services__list-icons" />
            <p>Knowledge of design principles.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>User experience (UX) knowledge.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>User interface (UI) knowledge.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Search engine optimisation (SEO) knowledge.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Proficiency in design software.</p>
          </li>
          <li>
            <BiCheck className="services__list-icons" />
            <p>Knowledge of colour theory.</p>
          </li>
        </ul>
      </article>
    </>
  );
};

export default ServicesCard;
