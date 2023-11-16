import mercadopago from "mercadopago";
import { obtenerDatos } from './test.js';

/*
  const valorTitleForm = titleForm.value;
  const valorUnitPriceForm = unitPriceForm.value;
  const valorCurrencyIdForm = currencyIdForm.value;
  const valorQuantityForm = quantityForm.value;

  items = [
    {
      title: valorTitleForm,
      unit_price: valorUnitPriceForm,
      currency_id: valorCurrencyIdForm,
      quantity: valorQuantityForm,
    },
  ];
*/

export const createOrder = async (req, res) => {
  mercadopago.configure({
    access_token:
      "TEST-8380136081023096-061718-b9adc9e9ec558470dd4d2a28d01e24b0-1401965274",
  });
  //"TEST-8380136081023096-061718-b9adc9e9ec558470dd4d2a28d01e24b0-1401965274",

  const result = await mercadopago.preferences.create({
    obtenerDatos,
    back_urls: {
      success: "http://localhost:4000/success",
      failure: "http://localhost:4000/failure",
      pending: "http://localhost:4000/pending",
    },
    notification_url: "https://172a-191-108-24-164.ngrok.io/webhook",
  });
  console.log(result);
  res.send(result.body);
};

export const receiveWebhook = async (req, res) => {
  const payment = req.query;

  try {
    if (payment.type === "payment") {
      const data = await mercadopago.payment.findById(payment["data.id"]);
      console.log(data);
    }
    res.sendStatus(204);
  } catch (error) {
    console.log(error);
    return res.sendStatus(500).json({ error: error.message });
  }
};
