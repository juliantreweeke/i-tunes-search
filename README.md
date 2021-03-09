# iTunes API album search
## A small React Application for searching albums on the iTunes api.

### API Reference:
iTunes api: https://affiliate.itunes.apple.com/resources/documentation/itunes-store-web-service-search-api

***
### Installation:
```yarn```

### Tests:
To run the tests: ```yarn test```

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
A big focus on making this app was to have great accessibility. When pressing a item in the search list and navigating to the album page, when navigating back the focus maintains the users position on the page, making it a good user experience users with screen readers.
I also tried to increase performance by only displaying 16 search items at a time, with a load more button that adds up to another 16 items at a time.
There are loading states that show a spinner for the submit button and for the main album image.
A toast component is used when there is an error on the site.

***

## Key Learnings and Challenges
I use Vue at my current job and although I have played around with React hooks before in a few side projects, this was my deepest dive into hooks and I learnt alot on the fly while building this app. The react landscape has certainly changed since I did React work in production. There are alot of pros and cons. The reusability of hooks across different components is excellent, while testing component with hooks I found challenging as I am not used to testing in that way.
Something I used for the first time in this project was Jest AXE which is awesome. I decided not to do cypress e2e tests for this project and would normally use cypress axe testing for this purpose. Jest AXE however was a great alternative and will continue using it.
## Things I would have done different in retrospect
I am using a useFetch hook to fetch data and then using a redux hook to store that data. In retrospect I wish I had just called an action that then called a fetching service. When I realised that this pattern feels bad I was too deep in and it would have been a major overhaul. With that said when I reused the useFetch in a second component it was super easy and I did see the benefits, but still think that this may not scale well.
I spent alot of time on focus state for screen readers which added alot of complexity and used most of my efforts on this feature. Instead I could have used the time differently and gotten 100% test coverage.
## What is missing and what is next to do for this project
* Proper error handling.
* 100% test coverage.
* ImageBox and InfoBox renaming? Kinda was stuck on what I should name these.
* ImageBox - loading spinner centred properly!
* A default search result on first page view, maybe top 10 albums on iTunes etc.
* Logrocket to keep tabs on errors.








