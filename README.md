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
        <li><a href="#github">Github</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
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

## Testing

We are using Jest for testing and the app has been developed using TDD practices. A dependency injection library (awilix) is being used for better mocking. There is a test behind every screen, component or functionality that can be properly tested and there is a benefit in doing so.

## Libraries

Main dependencies:
- react-navigation
- react-query
- awilix
- fast-xml-parser

Main devDependencies:
- testing-library
- isomorphic-fetch

## Github

We look forward to use github in different ways:
1- To organize the issues. We would discuss them with the team and assigning each one to the corresponding programmer.
![Screenshot from 2023-03-12 18-49-47](https://user-images.githubusercontent.com/71403641/224562885-2c6b26b7-17a6-4ad3-84ef-e0afa6a95d03.png)
2- For writing documentation. Having a documentation section with all the information needed by a team member throughout the application development helps the team have a reference point and the app to have a consistent structure. Consenses about naming, good practices, etc. would be noted here. It also allows the developer to find what he is looking for without the need of help from another team member.
3- Having branch rules and configuration that makes the development of the app more secure.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## Setup
### esLint

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a free API Key at [https://example.com](https://example.com)
2. Clone the repo
   ```sh
   git clone https://github.com/david-rodriguez-garcia/portfolioChallenge.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `config.js`
   ```js
   const API_KEY = 'ENTER YOUR API';
   ```

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
