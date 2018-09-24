# GitHub Profile Search
___

### About
* In its current state, the purpose of this application is to show basic
information for a GitHub User.
* To use the application, enter a GitHub username into the text field and click
"Search".
* If the user exists, their available information should show in the blue box on
the lower portion of the page.
* If the user does not exist, the GitHub unicorn will inform you that an error has
occurred and will politely suggest that you try again.
* If you would like to clear out your search, simply make another search or hit
the "Clear" button.

### Setup
* Clone this repo down to your local machine and run `npm install`. While that is
running, setup the GitHub API key.
* Go to your [Github Account Settings](https://github.com/settings/tokens) and
click 'Personal Access Tokens'. Place this token in
`src/adapter/keys.js.example`, then remove `.example` from the file name.
* To make sure that the tests are passing, run `npm test`.
* To view the application in the browser, run `npm start` and navigate to
[localhost:3000](http://localhost:3000).

### Built With
* React.js
* Redux
* GitHub API
* Enzyme (TDD)
* Chai (TDD)
