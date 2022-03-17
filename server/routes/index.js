const express = require('express');
const router = express.Router();

const leadsService = require('../lead-service');

router.get('/leads', (req, res) => {
  leadsService.get(req, res);
});

router.post('/lead', (req, res) => {
  leadsService.create(req, res);
});

router.put('/lead', (req, res) => {
  leadsService.update(req, res);
});

router.delete('/lead/:id', (req, res) => {
  leadsService.destroy(req, res);
});

module.exports = router;
