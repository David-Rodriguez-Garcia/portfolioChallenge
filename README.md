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
        <ul>
          <li><a href="#dependency-injection">Dependency injection</a></li>
        </ul>
        <li><a href="#libraries">Libraries</a></li>
        <li><a href="#github">Github</a></li>
        <li><a href="#issues">Issues</a></li>
      </ul>
    </li>
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

#### Hexagonal architecture

#### MVC

#### Atomic design

### Folder structure

![Screenshot from 2023-02-27 15-10-12](https://user-images.githubusercontent.com/71403641/221586687-3ba39dac-c2d5-4279-aa34-80b452abd21a.png)

![Screenshot from 2023-02-27 15-37-18](https://user-images.githubusercontent.com/71403641/221592650-9242c561-69a4-493d-aad2-65890e123a3d.png)

![Screenshot from 2023-02-27 15-39-06](https://user-images.githubusercontent.com/71403641/221593099-25884d35-c7ef-4cad-8374-cc9fd84e9fbd.png)

![Screenshot from 2023-02-27 15-41-57](https://user-images.githubusercontent.com/71403641/221593899-68e6ede6-a798-41db-be1a-bc9460aa9206.png)

![Screenshot from 2023-02-27 16-14-43](https://user-images.githubusercontent.com/71403641/222272341-a9a8c4aa-e448-4dd1-8c33-9f8760cf0ead.png)
![Screenshot from 2023-02-27 16-19-47](https://user-images.githubusercontent.com/71403641/222272348-52a61cc3-a7e6-4230-90c9-ef51358827b3.png)
![Screenshot from 2023-02-27 16-22-11](https://user-images.githubusercontent.com/71403641/222272350-57f33bab-29a1-49ab-ad96-a9412caec35a.png)
![Screenshot from 2023-02-27 16-24-49](https://user-images.githubusercontent.com/71403641/222272352-4ce2db65-6752-4b9c-8987-0e8d1d275436.png)
![Screenshot from 2023-02-27 16-26-38](https://user-images.githubusercontent.com/71403641/222272354-c40b5b01-93cc-4be7-b681-aa5ddb5f116d.png)
![Screenshot from 2023-02-27 16-27-08](https://user-images.githubusercontent.com/71403641/222272356-31baac61-8058-4dd9-9048-5a1e32240cd2.png)
![Screenshot from 2023-02-27 16-30-45](https://user-images.githubusercontent.com/71403641/222272362-c755daec-e809-4fcf-99b7-98b91ef7eb18.png)
![Screenshot from 2023-02-27 17-03-54](https://user-images.githubusercontent.com/71403641/222272364-deee56eb-6213-4f16-8a96-cc1ea9635f1e.png)
![Screenshot from 2023-02-27 17-04-08](https://user-images.githubusercontent.com/71403641/222272368-a06f7707-5601-4bca-9fc3-c22310675056.png)
![Screenshot from 2023-02-27 17-07-27](https://user-images.githubusercontent.com/71403641/222272370-ad71493d-bf65-4ba7-af79-05d6d42ce139.png)
![Screenshot from 2023-02-27 17-10-06](https://user-images.githubusercontent.com/71403641/222272373-a17bb355-be63-4040-bc92-6a1403733df6.png)
![Screenshot from 2023-02-27 17-12-08](https://user-images.githubusercontent.com/71403641/222272377-b399edab-a63c-4f12-bb2c-22d27f6b75b6.png)
![Screenshot from 2023-02-27 17-13-13](https://user-images.githubusercontent.com/71403641/222272379-514eba95-1bd1-4516-9888-c59daaffec68.png)
![Screenshot from 2023-02-27 17-13-34](https://user-images.githubusercontent.com/71403641/222272381-022a4d79-7342-4263-987f-be884921b458.png)
![Screenshot from 2023-03-01 22-40-46](https://user-images.githubusercontent.com/71403641/222272383-e150b2e0-d442-4837-ac4d-548bf1c54439.png)
![Screenshot from 2023-03-01 22-44-12](https://user-images.githubusercontent.com/71403641/222272384-23e08ba8-3861-46f0-9956-bb62b2bc3429.png)


### Testing

#### Dependency Injection

### Libraries

### Github

### Issues

<p align="right">(<a href="#readme-top">back to top</a>)</p>

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
