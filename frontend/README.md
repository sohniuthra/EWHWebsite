This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Editing Site Content

### Updating/Adding Member Profile Pictures

To add a new photo or change the current profile picture for someone

1. Open frontend/src/assets/images/profilePics directory
2. Add the photo to this folder
3. Open profilePics.js (in the profilePics directory) and either change the current photo url for this person's entry or if adding a new member, add a new entry to the list of entries. An example entry for a person named Sophie Keller with profile pic sophiespic.jpg would be:  
`sophiekeller: require("./sophiespic.jpg"),`
4. To change the orientation of the member's profile pic, see updating/adding member profile information.

### Updating/Adding Member Profile Information

1. Open frontend/src/assets/pageData/members.json
2. If you're adding, add a new entry that matches one of the previous. Otherwise, edit the entry that corresponds to the member you are editing.
3. Make sure the formatting matches those of the other entries in the file. For example, `isAlumni` and `isLead` should be true or false with no quotes. `name` and `major` should have quotes around them. `projects` and `teams` should have square brackets around them and be separated by commas.
4. Open frontend/src/assets/pageData/projects.json and frontend/src/assets/pageData/teams.json.
5. Make sure that any project names in your member's projects list as well as any team name in their teams list match the corresponding file. Id's in projects.json are explicitly shown. In teams.json, the id's are the value that comes to the left of the colon for each entry: ex: `business`, `software`, etc.

\*\* To change the orientation of the member's profile pic, add the pair `"orientation": "0 _px"` to the member's profile json. In place of `_`, put the new number to orient the photo up and down (more negative numbers will move the photo up and more positive ones will move it down).

### Updating/Adding Project Information

1. Open frontend/src/assets/pageData/projects.json.
2. If you're adding, add a new entry that matches the format of the previous entries. Otherwise, edit the entry that corresponds to the project you are editing.
3. Make sure the formatting matches those of the other entries in the file. For example, `isActive` should be `true` or `false` with no quotes. `id`, `title`, and `info` should have quotes around them. `subteams` and `collaborators` should have square brackets around them and be separated by commas.
4. If this is a project that doesn't have collaborators, enter an empty list (`[]`) for the collaborators entry. Otherwise, make sure that the collaborator name in your list is listed in frontend/src/assets/images/institutions/institutions.js. If these names don't match, this image won't be rendered correctly. To add a new collaborator photo, see steps below.
5. Make sure that if you are adding a new project, you also add that project to the team member's jsons who are working on that project in frontend/src/assets/pageData/teams.json. The project name in the list of their projects must match the project id in projects.json.

### Changing a Current Project to a Past Project

1. Open frontend/src/assets/pageData/projects.json.
2. Find the desired project's json entry and change the `isActive` field to `false`.
3. Add an `info_long` entry for the project. This is necessary for the read more section of the project. This should be in the past tense and it is often easiest to find some sort of final report/ESR on the project and pull from there. If you're unsure what this should look like, look at the read more sections of other past projects. If you wish for the long form description to have multiple paragraphs, separate them by the newline (`\n`) character within the `info_long` string.
4. To add a new collaborator photo, see steps below.


#### Add Collaborator Photo

1. Open frontend/src/assets/pageData/institutions
2. Add the photo in this directory
3. Open the institutions.js in this directory and add a new entry corresponding to the image you just added. For example, if you added a collaborator called kijenzi with photo kijenzipic.jpg, you would add the entry:  
`kijenzi: require("./kijenzi.png"),`
   
## Running and Deploying

### Run
To run this web app locally, navigate to the frontend folder in your terminal and run
`npm start` 
Then, open up a web browser and go to url: [http://localhost:3000](http://localhost:3000). The site should open there. 

### Deploy

The site is currently deployed to Google Firebase. 

#### If logged in to the Firebase CLI already: 
1. Run `yarn build` to build current version
2. Run `firebase deploy` to deploy to Google Firebase
3. Double check that ewh.engineering.cornell.edu has been updated 

#### If not logged in on your computer:
1. Install the [Firebase CLI](https://firebase.google.com/docs/cli#install_the_firebase_cli) on your computer 
2. Log in to Firebase by running `firebase login` in terminal and filling in EWH Google account login information (found in [Accounts Document](https://docs.google.com/spreadsheets/d/1NJMM7ez66XNr1QrU-9lOYVqr33pNkcLb_YiSPztUlYk/edit#gid=0).
3. In frontend directory, run `firebase deploy`
4. Double check that ewh.engineering.cornell.edu has been updated 


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Advanced Configuration

See https://facebook.github.io/create-react-app/docs/advanced-configuration for advanced config info.

