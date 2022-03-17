const baseAPI = '/api';

const leadsService = {
  get() {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/leads`)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  create(lead) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/lead`, {
        method: 'POST',
        body: JSON.stringify(lead),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  },

  update(lead) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/lead`, {
        method: 'PUT',
        body: JSON.stringify(lead),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => {
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
  },

  destroy(lead) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/lead/${lead.id}`, { method: 'DELETE' })
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }
};

export default leadsService;
