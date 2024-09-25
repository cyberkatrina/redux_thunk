const url = "https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json"

export const addCar = (car) => {
    return {
        type: 'ADD_CAR',
        value: car
    }
}

export const removeCar = (index) => {
    return {
        type: 'REMOVE_CAR',
        value: index
    }
}


export const fetchMakes = () => {
    return (dispatch) => {
        fetch(url)
            .then(response => response.json()) // Convert response to JSON
            .then(data => {
                console.log(data.Results); // Access data.Results after parsing
                const action = {
                    type: "FETCH_MAKES",
                    value: data.Results // Use parsed data
                };
                dispatch(action);
            })
            .catch(error => {
                console.error('Error fetching makes:', error); // Handle errors
            });
    };
};