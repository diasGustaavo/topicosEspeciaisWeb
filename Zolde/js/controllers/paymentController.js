function handlePaymentFormSubmit(event) {
  event.preventDefault()
  const form = event.target;
  let number = form.number.value
  let plate = form.plate.value;
  let category = form.category.value;
  let entranceDate = form.entranceDate.value;
  let entranceHour = form.entranceHour.value;
  let exitDate = form.exitDate.value;
  let exitHour = form.exitHour.value;
  let duration = form.duration.value;
  let finalPrice = form.total.value;
  let amountPaid = form.paid.value;
  let change = form.change.value;
  let aditionalServices = form.aditionalServices.value;

  const paymentRecipe = {
    number,
    plate,
    category,
    entranceDate,
    entranceHour,
    exitDate,
    exitHour,
    duration,
    finalPrice,
    amountPaid,
    change,
    aditionalServices
  }

  console.log(paymentRecipe)
}