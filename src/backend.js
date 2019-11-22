// export class BetterDoctor {
//     async searchByMedicalSubject(medicalSubject) {
//         try {
//             let respsone = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${medicalSubject}&location=45.561,-122.655,10&sort=distance-asc&limit=20&user_key=${process.env.API_KEY}`);
//             let jsonifiedResponse = await response.json();
//             return jsonifiedResponse;
//         }
//     }
// }