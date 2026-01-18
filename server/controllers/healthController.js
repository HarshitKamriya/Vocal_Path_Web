const healthCheck = (req, res) => {
  res.json({
    status: "OK",
    message: "Backend is reachable",
  });
};

module.exports = { healthCheck };
