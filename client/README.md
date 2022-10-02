# Running the Application

Once the application has been cloned, proceed to open on your favorite IDE. The application is built using the following technologies:

- [React](https://reactjs.org/)

Once open, proceed to run the following command to install all the dependencies (make sure you have [Node.js](https://nodejs.org/en/) installed):
(run this command in the client directory of the project)

```bash
npm install
```

## Main Features

- The application runs as instructed,
    - When a user clicks on "Add to Bundle" button, the total is added to the bundle price.
    - When the bundle price reaches $100 or more, the 10% discount is applied, and displayed under "Your Savings" section.
    - The bundle price amount it is also displayed in the progress bar as the amount increases up to $100.

## Additional Features

- I took the liberty to add some additional features, such as:
    - When the bundle price reaches $100 the title of the Bundle Container changes to "Add $300 to save 15%" for the next marker on the progress bar. The same applies for the next marker at $300, $500 and $1000 for each of the displayed markers on the progress bar.
    - Also, the code is written for displaying the progress for each of the markers, however they are in different colors for better appreciation while in the development stage. The colors can be changed to the same color for each of the markers.
    - I was able to add a media query for a minimum with of 480px up to a maximum of 768px.

## Notes

- I was unable to use the credentials provided in the GitHub, as it states that the credentials are invalid.
- I hope my improvisation is up to your standards. I am looking forward to your feedback.
