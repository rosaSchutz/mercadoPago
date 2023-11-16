const datosForm = () => {
  return new Promise((resolve) => {
    //window.addEventListener("load", function () {
      const form = document.getElementById("formulario-mercadolibre");
      const titleForm = document.getElementById("title");
      const unitPriceForm = document.getElementById("unit_price");
      const currencyIdForm = document.getElementById("currency_id");
      const quantityForm = document.getElementById("quantity");

      form.addEventListener("submit", function (event) {
        event.preventDefault();

        const valorTitleForm = titleForm.value;
        const valorUnitPriceForm = unitPriceForm.value;
        const valorCurrencyIdForm = currencyIdForm.value;
        const valorQuantityForm = quantityForm.value;

        const items = [
          {
            title: valorTitleForm,
            unit_price: valorUnitPriceForm,
            currency_id: valorCurrencyIdForm,
            quantity: valorQuantityForm,
          },
        ];

        // form.reset();
        resolve(items);
      });
    });
  //});
};

const obtenerDatos = async () => {
  const resultado = await datosForm();
  console.log(resultado);
};

obtenerDatos();


export {obtenerDatos};
