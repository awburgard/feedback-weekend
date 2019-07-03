# Feedback Form

## Description

_Duration: 2 days_

The Feedback Form is an app where students can let their instructors know how they are feeling on any particular day. The student can indicate how they are feeling, if they understood the day's material, whether or not they feel supported by the staff, and any additional comments they may have. They can review and edit the feedback by cycling back through the inputs.

There is also an admin page that allows the administration to see when feedback was given. They also have the ability to delete feedback should they choose to do so.

## Installation
1. Create a database named `prime_feedback`,
2. The queries in the `data.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries,
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
1. Cycle through the input fields by entering in how you feel with numbers 1-5
2. Go through the form until you are satisfied with your answers and click the finish button at the end
3. If you are not satisfied with your answers, click the `back` button under the input field to cycle back through the forms and change your answers
4. If you are an admin, click the `admin` button to see all entries
5. To delete any entry, click the `delete` button associated with each entry

## Reflection of Learning
This project occurred during our 5th week of classroom study.

This assignment was all about abstracting the state layer away from the view later with Redux. Rather than passing down information component to component, we are able to save that same information in a store. Which is helpful because we gained access to that information at a global level within the application.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Questions? I would love to connect!
Email - [awburgard@gmail.com](mailto:awburgard@gmail.com)
