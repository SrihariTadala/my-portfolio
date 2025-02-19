import React from 'react';

function WorkCard(props) {
    return (
        <div className="work-card">
            <h4 className="card-company">{props.work.company}</h4>
            <h5 className="card-title">{props.work.title}</h5>
            <p className="card-period">{props.work.period}</p>
        </div>
    );
}

export default WorkCard;
