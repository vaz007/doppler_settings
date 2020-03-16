The Application is created with the focus to maximise the understanding of the doppler effect. I haven't deleted the unnecessary files, but I have tried to keep the application lightweight and made use of reusable components. If the application goes to a production level build phase one can use the rest of the files as well as it will be helpful for the developer to make use of reusable components.

### `Install all the libraries`
Please install all the dependencies by running the following command "npm i" on your teminal 


### `Run the following command to start the application`
"npm start"


### `Folders`
1) Components 
    It is the folder where I have designed the main component of the application as well as I have made components reusable.
   To check reusabilty of a component please have a look at    
   header.js file and see how it has been called on index.js. Similarly we can call scrollDownButton.js and videoAndAbstract.js in our entire application.

2) CSS
    In this folder I have created necessary CSS files for the application components.

3) Image 
    It is an asset folder where all the necessary Images are kept.

### `Files & Workings of it`

1)  App.js
    It is the main root file for the application. Inside the file Index is called which is imported from components index.js file.

2)  index.js
    It is the main file where all the components are called and which creates the webpage.

3) header.js
    It is a reusable component for header.

4) scrollDownButton.js
    It is also a reusable button component.

5) videoAndAbstract.js
    It is a reusable component which has a video player and an abstract text which can describe various information about the workings of the page.



