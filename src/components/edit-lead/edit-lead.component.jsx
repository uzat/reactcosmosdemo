import React from 'react';

const EditLead = props => {
  if (props.selectedLead) {
    return (
      <div>
        <div className="editfields">
          <div>
            <label>id: </label>
            {props.addingLead
              ? <input
                  type="number"
                  name="id"
                  placeholder="id"
                  value={props.selectedLead.id}
                  onChange={props.onChange}
                />
              : <label className="value">
                  {props.selectedLead.id}
                </label>}
          </div>
          <div>
            <label>firstName: </label>
            <input
              name="firstName"
              value={props.selectedLead.firstName}
              placeholder="firstName"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>lastName: </label>
            <input
              name="lastName"
              value={props.selectedLead.lastName}
              placeholder="lastName"
              onChange={props.onChange}
            />
          </div>
          <div>
            <label>email: </label>
            <input
              name="email"
              value={props.selectedLead.email}
              placeholder="email"
              onChange={props.onChange}
            />
          </div>
        </div>
        <button onClick={props.onCancel}>Cancel</button>
        <button onClick={props.onSave}>Save</button>
      </div>
    );
  } else {
    return <div />;
  }
};

export default EditLead;
