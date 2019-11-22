export class BetterDoctor {
    async searchByMedicalSubject(medicalSubject) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalSubject}&location=45.561%2C-122.655%2C10&user_location=45.523%2C-122.676&sort=distance-asc&limit=10&user_key=${process.env.API_KEY}`);
            console.log(response);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch (error) {
            console.log("There was an error with your submission: " + error.message);
        }
    }

    async searchByDoctorName(doctorName) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorName}&location=45.561%2C-122.655%2C10&user_location=45.523%2C-122.676&sort=distance-asc&limit=10&user_key=${process.env.API_KEY}`);
            console.log(response);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch (error) {
            console.log("There was an error with your submission: " + error.message);
        }
    }



}