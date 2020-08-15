This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Multi Select Email Input

## Dependencies 

`$ npm install json-server -g`

### Before run 

`$ npm install`

### Run

to start the react application one terminal session you can run  `npm start` and in another tab `npm run json-server` this will ran the mocked server to get the data for the component.

`$ npm start`

![alt text](component.png?raw=true)

## Testing 

I have added some end-to-end test cases using cypress simulating the same behavior as the Figma prototype and some other scenarios you can run those by using:

`$ npm run cypress`

## Storybooks

I think that to create truly reusable components, you need to experiment with them and track the design so it's good to use storybooks, so I added some stories for certain components

`$ npm run storybook`

# changes and improvements

If I had more time I would add or fix:

- It usually starts with a mobile approach first, but since the figma project does not contain the mobile experience I focus on the desktop experience
- In Suggestion List component there is a fade effect made by a div and with smaller lists the component looks strange and may affect the UX
- The application respects the requirements but I think that in the part where you select a suggestion on list you should be able to navigate using the keyboard arrows
- Currently we can add the same email twice, I don't know if this behavior is expected, but I think it should be filtered from the suggestion list
- When hovering over an email already selected, sometimes, when we have several already selected, the animation to show the "X" to delete the element at times looks strange
- Unit testing using Jest and [react-testing-library](https://github.com/testing-library/react-testing-library#readme)
