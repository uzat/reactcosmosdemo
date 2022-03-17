import React from 'react';

const Lead = props => {
  return (
    <li
      onClick={() => props.onSelect(props.lead)}
      className={props.lead === props.selectedLead ? 'selected' : ''}
    >
      <button
        className="delete-button"
        onClick={e => props.onDelete(e, props.lead)}
      >
        Delete
      </button>
      <div className="lead-element">
        <div className="badge">
          {props.lead.id}
        </div>
        <div className="firstName">
          {props.lead.firstName}
        </div>
        <div className="lastName">
          {props.lead.lastName}
        </div>
        <div className="email">
          {props.lead.email}
        </div>
      </div>
    </li>
  );
};

export default Lead;
