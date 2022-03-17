import React, { Component } from 'react';

import EditLead from '../edit-lead/edit-lead.component';
import Lead from '../lead/lead.component';

import api from '../../api';

class Leads extends Component {
  constructor() {
    super();

    this.state = {
      leads: [],
      creatingLead: false
    };

    this.handleEnableAddMode = this.handleEnableAddMode.bind(this);
    this.handleSave = this.handleSave.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    api.get().then(json => this.setState({ leads: json }));
  }

  handleSelect(lead) {
    this.setState({ selectedLead: lead });
  }

  handleDelete(event, lead) {
    event.stopPropagation();

    api.destroy(lead).then(() => {
      let leads = this.state.leads;
      leads = leads.filter(l => l !== lead);
      this.setState({ leads: leads });

      if (this.selectedLead === lead) {
        this.setState({ selectedLead: null });
      }
    });
  }

  handleEnableAddMode() {
    this.setState({
      addingLead: true,
      selectedLead: { id: '', firstName: '', lastName: '', email: '' }
    });
  }

  handleCancel() {
    this.setState({ addingLead: false, selectedLead: null });
  }

  handleSave() {
    let leads = this.state.leads;

    if (this.state.addingLead) {
      api
        .create(this.state.selectedLead)
        .then(result => {
          console.log('Successfully created!');

          leads.push(this.state.selectedLead);
          this.setState({
            leads: leads,
            selectedLead: null,
            addingLead: false
          });
        })
        .catch(err => {
          console.log(err);
        });
    } else {
      api
        .update(this.state.selectedLead)
        .then(() => {
          this.setState({ selectedLead: null });
        })
        .catch(err => {});
    }
  }

  handleOnChange(event) {
    let selectedLead = this.state.selectedLead;
    selectedLead[event.target.name] = event.target.value;
    this.setState({ selectedLead: selectedLead });
  }

  render() {
    return (
      <div>
        <ul className="leads">
          {this.state.leads.map(lead => {
            return (
              <Lead
                key={lead.id}
                lead={lead}
                onSelect={this.handleSelect}
                onDelete={this.handleDelete}
                selectedLead={this.state.selectedLead}
              />
            );
          })}
        </ul>
        <div className="editarea">
          <button onClick={this.handleEnableAddMode}>Add New Event</button>
          <EditLead
            addingLead={this.state.addingLead}
            onChange={this.handleOnChange}
            selectedLead={this.state.selectedLead}
            onSave={this.handleSave}
            onCancel={this.handleCancel}
          />
        </div>
      </div>
    );
  }
}

export default Leads;
