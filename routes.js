import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).send({ test: true });
});

router.get("/quotes", (req, res) => {
  const famousQuote =
    "A vida é o que acontece enquanto você está ocupado fazendo outros planos. - John Lennon";
  res.status(200).send({ quote: famousQuote });
});

export default router;
