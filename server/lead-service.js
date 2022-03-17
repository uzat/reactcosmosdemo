const Lead = require('./lead-model');
const ReadPreference = require('mongodb').ReadPreference;

require('./mongo').connect();

function get(req, res) {
  const mQuery = Lead.find({}).read(ReadPreference.NEAREST);
  mQuery
    .exec()
    .then(leads => {
      res.json(leads);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function create(req, res) {
  const { id, firstName, lastName, email } = req.body;

  const lead = new Lead({ id, firstName, lastName, email });

  lead
    .save()
    .then(() => {
      res.json(lead);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function update(req, res) {
  const { id, firstName, lastName, email } = req.body;

  Lead.findOne({ id })
    .then(lead => {
      lead.firstName = firstName;
      lead.lastName = lastName;
      lead.email = email;
      lead.save().then(res.json(lead));
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

function destroy(req, res) {
  const { id } = req.params;

  Lead.findOneAndRemove({ id })
    .then(lead => {
      res.json(lead);
    })
    .catch(err => {
      res.status(500).send(err);
    });
}

module.exports = { get, create, update, destroy };
