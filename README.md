# iTunes API album search
## A small React Application for searching albums on the iTunes api.

### API Reference:
iTunes api: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api

***
### Installation:
```yarn```

### Tests:
To run the tests: ```yarn test a```

### How to run:
To run locally: ```yarn start```

***
## Technologies used
* React
* CSS Modules
* Jest
* Jest AXE
* React Testing Library
* Redux

***
## Features
### Accessibility
* My biggest focus on this app was to have great accessibility. When pressing a item in the search list and navigating to the album page, when navigating back the focus maintains the users position on the page, making it a good user experience for users with screen readers. 
### Performance
* I also tried to increase performance by only displaying 16 search items at a time, with a load more button that adds up to another 16 items at a time.
### User Experience
* There are loading states that show a spinner for the submit button and for the main album image.
### Toast component
* A toast component is used when there is an error on the site to guide users.

## Key Learnings and Challenges
I use mainly Vue at my current job and although I have played around with React hooks before in a few side projects, this was my deepest dive into hooks and I learnt alot on the fly while building this app. The react landscape has certainly changed since I did React work in production. There are alot of pros and cons. The reusability of hooks across different components is excellent, while testing components with hooks I found challenging.
Something I used for the first time in this project was Jest AXE which is awesome. I decided not to do cypress e2e tests for this project and would normally use cypress axe testing for this purpose. Jest AXE however was a great alternative and will continue using it.

Another thing that was interesting was doing a project without backlog refinement, planning, stakeholders, sprint, jira etc.
Before I started I planned out all the features I wanted to have, all the components I would need and any other tasks required. I set up a trello board to keep track of it all and had some tasks flagged with 'bonus' and priorities them in order.
I also ended making a 'Not doing/Parked' column as I got through the project and changed some of my decisions.
***
## Things I would have done different in retrospect
I am using a useFetch hook to fetch data and then using a redux hook to store that data. In retrospect I wish I had just called an action that then called a fetching service. When I realised that this pattern is not great I was too deep in and it would have been a major overhaul. With that said when I reused the useFetch in a second component it was super easy and I did see the benefits, but still think that this may not scale well. It also made error handling not ideal.
I spent alot of time on focus state for screen readers which added alot of complexity and used most of my efforts on this feature. Instead I could have used the time differently and gotten closer to 100% test coverage or added animations that I had initially planned for the List component.
***
## What is missing and what is next to do for this project
* Refactoring of the fetching pattern to use a service.
* Proper error handling.
* 100% test coverage.
* ImageBox and InfoBox renaming? Kinda was stuck on what I should name these.
* ImageBox - loading spinner centred properly!
* A default search result on first page view, maybe top 10 albums on iTunes etc.
* Logrocket to keep tabs on errors.
* Animating the List component and added loading state to the search album cards.
***








