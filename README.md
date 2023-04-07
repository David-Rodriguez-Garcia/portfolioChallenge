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
    <li><a href="#architecture-and-design-patterns">Architecture and design patterns</a></li>
    <li><a href="#folder-structure">Folder structure</a></li>
    <li><a href="#testing">Testing</a></li>
    <li><a href="#libraries">Libraries</a></li>

    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

The challenge consists of implementing a basic RSS client with the following features:
- The main screen of the application will be a list of news items sorted by date.
- Each row will contain the title, a description of no more than two lines and the image of the corresponding news item.
- Selecting a row should open a screen with the details of the news item.
- The detail screen will contain the title, complete description and image of the news item. It will also have a "View in browser" button that will take them to the article on the web.
- In case of using third-party libraries, briefly justify the reason for each one.
- The data source is free: any online dynamic xml or json feed.
- A free repository needs to be created on Github (https://github.com/) or Bitbucket (https://bitbucket.org/) and a good use of the tool must be made for the development and evolution of the application.

Additional points will be given for:
- Possibility of offline operation: the news should persist on the device so that, if there is no connectivity when starting the application, the last viewed news are displayed.
- Ability to search for news by title.
- Brief description of the design patterns used and the reason behind their implementation.
- Add app icons.
- Testing components.

It will be especially valued:
- Code correctness: organization of methods and classes, reuse of components, architecture, dependencies, possibility of future scaling.
- Comments and code maintenance.

It is not important:
- The graphical aspect of the app.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## Architecture and design patterns

- Clean/Hexagonal architecture
- MVC: For our screens
- Atomic design: For our components
- SOLID principles: Applied troughout the whole application

## Folder structure

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

### Core:

        _di
       /
    core --- domain
       \
        infrastructure

We are implementing the concepts behind clean architecture. Following DRY principles the service layer has been skipped.
- di: Contains everything related to the dependency injection we are implementing in the application
- domain: Contains domain logic and models.
- infrastructure: Calls external services and interacts with domain logic and models.

### UI:

        components
       /
      / --- navigation
    ui
      \ --- styles
       \
        [screens]

- components: Contains the components that are being used by more than one screen. If a component is only used by one screen, it is stored in that screen's folder.

Note that we apply atomic design principles to any reusable component we create. Objects are components that are not displayed, whose sole purpose is to help organise the other components.

                  _objects
                 /
                / --- atoms
      components
                \ --- molecules
                 \
                  organisms

- navigation: Stores anything related to navigation (react-navigation).
- styles: Stores style-related utilities.
- screens: Contains the screens of the application. Since we are using the MVC pattern each screen's folder has its own Controller and View files, and if needed, a Model file. As mentioned above, if the screen contains components that are not being used by other screens, a `components` folder is created within that screen's folder.

## Testing
We are using Jest for testing, and the app has been developed using TDD practices. A dependency injection library (awilix) is being used for better mocking. There is a test behind every screen, component or functionality that can be properly tested and there is a benefit in doing so.

## Libraries

Main dependencies:
- react-navigation
- react-query
- awilix
- fast-xml-parser

Main devDependencies:
- testing-library
- isomorphic-fetch

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
