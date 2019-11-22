export class BetterDoctor {
    async searchByMedicalSubject(medicalSubject) {
        try {
            let respsone = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalSubject}&location=45.561%2C-122.655&sort=distance-asc&limit=20&user_key=${process.env.API_KEY}`);
            console.log(response);
            let jsonifiedResponse = await response.json();
            return jsonifiedResponse;
        } catch (error) {
            console.log("There was an error with your submission: " + error.message);
        }
    }
}