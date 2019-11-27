import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    BetterDoctor
} from './backend.js';


$(document).ready(function () {
    $("#docSearch").submit(function (event) {
        $("#doctorResults").children().remove();
        const search = $("#userSearch").val();
        event.preventDefault();
        (async () => {
            let betterDoctor = new BetterDoctor();
            const response = await betterDoctor.findDoctors(search);
            getElements(response);
        })();
    });

    const getElements = (response) => {
        $("#doctorResults").text();
        if ((response.data === undefined) || (response.data.length === 0)) {
            $("#doctorResults").prepend(`
            <div class="container">
              <h4> I'm sorry, we were unable to process your request </h4>
              <h4> Error: ${response.meta.http_status_code} </h4></div>`);
        } else if (response.data[0]) {
            response.data.forEach(function (doctor) {
                $("#doctorResults").prepend(`
            <div class="container">
            <p class="doc-name">${doctor.profile.first_name} ${doctor.profile.last_name} <span class="doc-title">${doctor.profile.title}</span></p>
            <p><span class="facts">About: </span>${doctor.profile.bio}</p>
            <p  class="${doctor.npi}"></p>
            <p class="${doctor.profile.first_name}${doctor.profile.last_name}"></p>
              </div>`);

                doctor.practices.forEach(function (practice) {
                    if (practice.accepts_new_patients === true) {
                        practice.accepts_new_patients = "Yes, we are currently accepting new patients";
                    } else if (practice.accepts_new_patients === false) {
                        practice.accepts_new_patients = "Not at this time";
                    }
                    $("." + doctor.profile.first_name + doctor.profile.last_name).prepend(`
                 <p><span class="facts">Location: </span> ${practice.visit_address.street} ${practice.visit_address.city}, ${practice.visit_address.state} ${practice.visit_address.zip}<br>
                 <p><span class="facts">Phone: </span>${practice.phone}</p>
                 <p class="${practice.uid}"></p>
                 <p><span class="facts">Is the Doctor Accepting New Patients:</span> ${practice.accepts_new_patients}</p><hr>`);
                    console.log(doctor.practices);

                });
            });
        }
    };
});