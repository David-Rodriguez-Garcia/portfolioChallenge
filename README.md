<a name="readme-top"></a>


[![LinkedIn][linkedin-shield]][linkedin-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]


<br />
<div align="center">
<h3 align="center">Portfolio Challenge</h3>

  <p align="center">
    This is a challenge sent by an anonymous company in order to show the knowledge I obtained in my previous position as a react and react native developer.
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#key-points">Key points</a>  
      <ul>
        <li><a href="#architecture">Architecture and design patterns</a></li>
        <li><a href="#folder-structure">Folder structure</a></li>
        <li><a href="#testing">Testing</a></li>
        <li><a href="#libraries">Libraries</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The challenge consists of implementing a basic RSS client with the following features:
- The main screen of the application will be a list of news items sorted by date.
- Each row will contain the title, a description of no more than two lines and the image of the corresponding news item.
- Selecting a row should open a screen with the detail of the news item.
- The detail screen will contain the title, the complete description, the image of the news item and a "View in browser" button.
- In case of using third-party libraries, briefly justify the reason for each one.
- The data source is free: any online dynamic xml or json feed.
- A free repository must be created on Github (https://github.com/) or Bitbucket (https://bitbucket.org/) and a good use of the tool should be made for the development and evolution of the App code.

Additional points will be given for:
- Possibility of offline operation: the news should persist in the device so that if when starting the application there is no connectivity the last ones consulted are shown.
- Ability to search for news by title.
- Brief description of the design patterns used and the reason behind their use.
- Add app icons.
- Testing components.

It will be especially valued:
- Code correctness: organization of methods and classes, reuse of components, architecture, dependencies, possibility of future scaling.
- Comments and maintainability of the code.

It is not important:
- The graphical aspect of the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Key points

### Architecture and design patterns

#### Clean/Hexagonal architecture

We are implementing the concepts behind the clean architecture. I would love to say that we are implementing the hexagonal architecture, but since there are no interfaces being used for dependency inversion I am going to skip it for now.

#### MVC

For our screens, we are implementing the MVC architecture.

#### Atomic design

For our components we are following the atomic design principles.

SOLID principles are being applied throughout the whole application.

### Folder structure

              _di
             /
          core --- domain
         /   \                                  
        /     infrastructure
       /
    src
       \      components
        \    /
         \  / --- navigation
          ui
            \ --- styles
             \
              [screens]

As you can see, the app is divided in two big sections:
- core: Contains the business logic and anything that has nothing to do with how the app looks 
- ui: Contains everything that is related with how the app looks.

Core:

        _di
       /
    core --- domain
       \
        infrastructure

We are implementing the concepts behind clean architecture. Following DRY principles the service layer has been skipped.
- di: Dependency injection. Stores everything related with the dependency injection we are using in the project
- domain: Contains domain logic and models.
- infrastructure: Calls external services and interacts with domain entities.

UI:

        components
       /
      / --- navigation
    ui
      \ --- styles
       \
        [screens]

- components: Contains the components that are being used by more than one screen. If a component is being used by only one screen it is stored inside of that screens folder.

Notice that we are using atomic design principles for all the reusable components we create. Objects are components that are not visible by themselves but interact with the rest of the components to modify how they are displayed.

                  _objects
                 /
                / --- atoms
      components
                \ --- molecules
                 \
                  organisms

- navigation: Anything that has something to do with navigation (react-navigation) goes inside of this folder.
- styles: Common utilities that are related to the styles
- screens: The app screens. Since we are using the MVC pattern each folder has it's own Controller and View files. If needed, an extra file for the model can be added. If the screen has components that are not being reused by other screens, it will also have a custom components file with its corresponding tests (more on tests later).


### Testing

We are using Jest for testing and the app has been developed using TDD practices. A dependency injection library (awilix) is being used for better mocking. There is a test behind every screen, component or functionality that can be properly tested and there is a benefit in doing so.

### Libraries

Main dependencies:
- react-navigation
- react-query
- awilix
- fast-xml-parser

Main devDependencies:
- testing-library
- isomorphic-fetch

<!-- CONTACT -->
## Contact

David Rodriguez - davidrodriguez.dev@gmail.com
Project Link: [https://github.com/david-rodriguez-garcia/portfolioChallenge](https://github.com/david-rodriguez-garcia/portfolioChallenge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[stars-shield]: https://img.shields.io/github/stars/David-Rodriguez-Garcia/portfolioChallenge.svg?style=for-the-badge
[stars-url]: https://github.com/David-Rodriguez-Garcia/portfolioChallenge/stargazers
[issues-shield]: https://img.shields.io/github/issues/david-rodriguez-garcia/portfolioChallenge.svg?style=for-the-badge
[issues-url]: https://github.com/david-rodriguez-garcia/portfolioChallenge/issues
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/davirodr
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
