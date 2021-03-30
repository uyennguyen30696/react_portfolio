import React from "react";
import "./style.css";

function Card(props) {
    return (
        <div>
            <div className="card" id={props.id}>
                <div className="card-head">
                    <img className="img-project" src={props.image} alt={props.name} />
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-7 link deployed-link">
                            <a href={props.deployedLink} rel="noreferrer" target="_blank">
                                Deployed link
                            </a>
                        </div>
                        <div className="col link github-link">
                            <a href={props.githubLink} rel="noreferrer" target="_blank">
                                GitHub repo
                            </a>
                        </div>
                    </div>
                    <br></br>
                    <h5>{props.name}</h5>
                    <p>{props.summary}
                        <br></br>
                        <em>{props.technologies}</em>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default Card;
