function registerEntranceSubmit(event) {
    event.preventDefault()
    const form = event.target;
    let plate = form.plate.value;
    let aditionalService = form["aditional-services"].value;
    let category = form.category.value;
 
    const newVehicle = {
        plate,
        aditionalService,
        category
    }

    console.log(newVehicle)
}