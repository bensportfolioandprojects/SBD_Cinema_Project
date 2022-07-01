# SBD_Cinema_Project
We were taksed with creating a complete Web Application for a chain of cinemas, to allow users to view, book and pay for tickets for film screenings.

## Getting Started
This application can be found in the repository on GitHub - https://github.com/bensportfolioandprojects/SBD_Cinema_Project

### Prerequisites
This project was created with:
* [Visual Studio Code](https://code.visualstudio.com/download) - Multi-Language, Integrated Development Environment
* [git Bash](https://git-scm.com/) - Terminal for running programmes during build and testing
* [GitHub](https://github.com/) - Repository

## Jira Link
[Jira](https://pezantish.atlassian.net/browse/SBD) - Kanban Board/Sprints etc.





## Testing
Unfortunately, due to time and personnel restraints, we were unable to complete any automated testing. However, we were able to perform exstensive manual testing. With this we covered:
* Booking Form - The booking form takes in details and stores them in a database, then either manually retrieving them via an id, or automatically transferring those details to the payment page. Validation on this included selecting the correct number of tickets to match up with the amount booked, and selecting a valid film from a dropdown box.
* Payment Page - The payment page takes in the id from the booking page and calculates the correct price for the selection of tickets. Once details are entered, the payment system transfers the information across to the Stripe web application, where it can be processed.
* Email Form - The email for on the Contact Us page correctly informs the user that their message has been sent, while also sending the message as an email to the dedicated email address. It also sends the user a confirmation email to the email address they state in the form. If the user doesn't enter and email address, or enters one that is not valid, a message with appear, informing them that they need to try again.
* Search Bar - The search bar function returns a list of movies that have the searched for keyword attached to them, or an error message if no such keyword is associated with a movie.

## Built With
* [Git](https://git-scm.com/) - Version Control System
* [GitHub](https://github.com/) - Source Code Management
* [Jira](https://start.atlassian.com/) - Kanban Board/Sprint Management etc.
* [Visual Studio Code](https://code.visualstudio.com/download/) - Front-End programming Language Editor

## Authors
* **Ben Phillips** - [BenPhillips](https://github.com/bensportfolioandprojects)
* **Elias Sadek** - [EliasSadek](https://github.com/pezantish)
* **Richard de Young** - [RicharddeYoung](https://github.com/RicharddeYoung)

## Acknowledments
* Daniel Charles Conroy - Dan was originally part of our team, but left part way through the project.
* CheckoutForm, and parts of PaymentDetails, were created from tutorial found here: https://betterprogramming.pub/stripe-api-tutorial-with-react-and-node-js-1c8f2020a825 - As such, credit goes to Ignacio Aguirre
* Email Form was created by modifying a tutorial found here: https://mailtrap.io/blog/react-contact-form/ - As such, credit goes to Aleksandr Vernin
* Cinema carousel photo 2020 © JIM LO SCALZO/EPA-EFE/Shutterstock
* Cinema image on Getting There page was sourced and edited by Dan, and we are unable to find the source. If needs be, we can remove this image from the site before we finalise the project.
