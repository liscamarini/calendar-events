# Events Calendar.
1. Create a simple calendar based on the API details provided:
-[x]	The calendar must be able to list some of the events from the specified source. It can be implemented in any visual style, but should display the main event properties: title, start date, short description, an image (if presented).
-[]		It should be implemented using angular 7 or 8
-[x]	TypeScript should be used by taking advantage of its characteristics
-[x]	Extra logic like filters and date selector/selector are well viewed because of our business.
-[x]	Using git for code version and project availability makes sense for our process
-[x] 	Unit tests with code coverage report and linting are important to our construction process.

2.  API:
-[]	You can get calendar settings by making a POST for: https://timelyapp.time.ly/api/calendars/info
Send the following parameters along with the request: url: https://calendar.time.ly/6a37fb6n
In response, you will receive a JSON object from the Calendar properties. You may need some of them (such as "id") for new orders.
-[]	Get a list of events by making a GET request for:
https://timelyapp.time.ly/api/calendars/CALENDAR/events, where 'CALENDAR_ID' is an 'id' that you received in the previous order.
-[]	Use the returned data to populate your calendar app with events.

   **Created a fake Rest Api**

*Application implemented using angular 13*

## Technologies
- [Angular](https://angular.io/)
- [Node](https://nodejs.org/en/)
- [NG Bootstrap](https://ng-bootstrap.github.io/#/home)
- [Font Awesome](https://fontawesome.com)
- [RxJS](https://rxjs.dev/guide/operators#creation-operators)
- [Date-Fns](https://date-fns.org/)
- [Angular-Calendar](https://mattlewis92.github.io/angular-calendar/docs/)


## Testing the application
- Clone the repository for your machine

- Install all application dependencies using the following command:
    ```
    npm install
    ```
- Before launching our application, it is necessary to climb our fake API (Back-end server):
    ```
    npm run server
    ```
- To run the application, run the command:
    ```
    ng serve
    ```
- Abra o seu browser na seguinte URL: http://localhost:4200
#   c a l e n d a r - e v e n t s  
 