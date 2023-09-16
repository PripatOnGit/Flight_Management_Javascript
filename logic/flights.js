function Flights() {
    //function calculateNumberOfFlights
    function calculateNumberOfFlights (no_of_passangers, flight_capacity) {
        
       
        if(flight_capacity > 0 && no_of_passangers > 0){
            var x = parseFloat(no_of_passangers % flight_capacity);
                if(x == 0){
                    var no_of_flights =  parseInt(no_of_passangers / flight_capacity);
                }
                else{
                    var no_of_flights = parseInt(no_of_passangers / flight_capacity) + 1;
                }
                return no_of_flights;
        }

        else{
            window.alert("Enter Positive number");
        }

    } return {calculateNumberOfFlights}

    //function  checkAircraftRevision
    function  checkAircraftRevision(){}
    
}




module.exports = Flights();

