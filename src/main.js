import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    BetterDoctor
} from './backend.js';


$(document).ready(function () {
    $("#docSearch").submit(function (event) {
        const search = $("#userSearch").val();
        event.preventDefault();
        (async () => {
            let betterDoctor = new BetterDoctor();
            const response = await betterDoctor.findDoctors(search);
            getElements(response);
        })();
    });

    const getElements = (response) => {
        $("#doctorResults").text("");
        if (response.data[0]) {
            response.data.forEach(function (doctor) {
                $("#doctorResults").prepend(`<div class="container">
                <p class="doc-name">${doctor.profile.first_name} ${doctor.profile.last_name} <span class="doc-title">${doctor.profile.title}</span></p>
                <p></p>
                </div>`);
                console.log(doctor.profile);
            });
        }
    };
});