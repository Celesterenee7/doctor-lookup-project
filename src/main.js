import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    BetterDoctor
} from './../src/backend.js';

$(document).ready(function () {
    $("form#inputForm").submit(function (event) {
        const userSearch = $("#userSearch").val();
        event.preventDefault();

        (async () => {
            let newBetterDoctor = new BetterDoctor(userSearch);
            if ($("#selectOptions").val() === "Medical Issue") {
                let response = await newBetterDoctor.searchByMedicalSubject();
                $("doctorResults").html("");
                console.log(response);
            } else if ($("#selectOptions").val() === "Doctors Name") {
                let response = await newBetterDoctor.searchByDoctorName();
                console.log(response);
            } else if ($("#selectOptions").val() === "...") {
                return "Please select an option";
            }
            // getElements(response);

        })();
    });

});