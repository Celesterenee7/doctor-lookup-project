# Asynchrony and APIs Independent Project
#### Doctor Lookup Web Application for Epicodus, 11/22/19
#### By Celeste Renee Morton
## Description:
This application is a website where users may enter a medical issue (ie: “sore throat”, "rash", etc.) into a form, submit it, and receive a list of doctors in their city (Portland or Seattle depending on where you are) who can treat their medical issue.
## Specifications:

|Spec|Input|Output|
|-|-|-|
| A user should be able to enter a medical issue to receive a list of doctors in the Portland area that fit the search query.|Problems Breathing|Pulmonary Doctor Claudia Wilferd |
|A user should be able to enter a name to receive a list of doctors in the Portland area that fit the search query|Asthma|Dr.1, Dr.2, Dr. 3|
|If the query response includes any doctors, the following information should be included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients (the API provides this data)|Pulmonary doctors|Name: Claudia Wilferd Address: 1111 4th Street Bend OR Phone Number: 555-555-5555 Website: dr-claud.com Availability: Open for scheduling now!|
|If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.|API Error Detected|404 Error|
|If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application should return a notification that states that no doctors meet the criteria. (This is not an error so it should be handled separately from any errors.)|Pulmonary Doctors|I'm sorry, there are no available pulmonary doctors in your area|
## Setup/Installation Requirements
* Clone this repository
* Open in your preferred editor
* Control click to open with live server if using VS
## Support and contact details
Please contact me directly with any questions or concerns. You can reach me at 541-555-5555
## Technologies Used
* HTML
* CSS
* JavaScript
* jQuery
### Copyright (c) 2019 Celeste Renee Morton
This software is installed under MIT license.