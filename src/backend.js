export class BetterDoctor {
    async findDoctors(search) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?user_key=${process.env.API_KEY}&location=OR&limit=10&user&query=` + search);
            console.log(response);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch (error) {
            console.log("There was an error with your submission: " + error.message);
        }
    }

}