import React from 'react';

function WorkCard(props) {
    return (
        <div className="work-card">
            <h5 className="card-title">{props.work.title}</h5>
            <p className="card-period">{props.work.period}</p>
            <ul className="work-responsibilities">
                {props.work.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                ))}
            </ul>
        </div>
    );
}

export default WorkCard;
