const express = require('express');
const router = express.Router();

/**
 * Returns 200 if alive.
 */
router.get('/health', (req, res) => {
  res.status(200).send('Ok');
});

/**
 * Restarts the server. Insecure.
 * Note: this only works in Docker with `restart: always`
 */
router.get('/restart', (req, res) => {
  res.status(200).send('Restarting...');
  process.exit(1);
});

module.exports = router;
