import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {
    BetterDoctor
} from './../src/backend.js';

$(document).ready(function () {
    $(".inputForm").submit(function (event) {
        event.preventDefault();
        let medicalSubject = "";

        (async () => {
            let betterDoctor = new BetterDoctor();
            let response = await betterDoctor.searchByMedicalSubject(medicalSubject);
            console.log(response);
            getElements(response);
        })();

        function getElements(response) {
            
        }

    });



});