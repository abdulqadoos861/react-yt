import React from "react";
import { Bookmark } from "lucide-react";

const Card = (props) => {
  return (
    <div className="card">
      {/* Top */}
      <div className="card-top">
        <div className="company">
          <img src={props.icon} alt="icon" />
          <div>
            <h3>{props.company}</h3>
            <span>{props.posted}</span>
          </div>
        </div>

        <button className="save-btn">
          <Bookmark size={18} />
        </button>
      </div>

      {/* Center */}
      <div className="card-center">
        <h2>{props.post}</h2>

        <div className="tags">
          <span>{props.type}</span>
          <span>{props.level}</span>
        </div>
      </div>

      {/* Bottom */}
      <div className="card-bottom">
        <div className="info">
          <p className="pay">{props.pay}</p>
          <p className="location">{props.location}</p>
        </div>

        <button className="apply-btn">Apply</button>
      </div>
    </div>
  );
};

export default Card;