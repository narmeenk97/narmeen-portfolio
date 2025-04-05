import Link from "next/link";
import React, {JSX} from "react";

interface Project {
    title: string;
    description: string;
    link: string;
    technologyUsed: string;
    imageURL?: string;
}

const projects: Project[] = [
    {
    title: 'Capstone Project: VibeVault',
    description: 'The VibeVault application is a mood-tracking app designed to provide users with insights into their emotional patterns over time. The app will allow users to log their daily mood using numeric scales, users can also add notes to elaborate on their moods',
    link: 'https://github.com/narmeenk97/VibeVault',
    technologyUsed: 'Flutter, Dart, AWS API Gateway, AWS Lambda, DynamoDB',
    imageURL: '/data/pics/VibeVault.png',
    },
    {
        title: 'Spintronics Research Website',
        description: 'In this project, I created a website for my research group using Eleventy and Nunjucks. It has multiple pages such as Home, about, contact us, and other pages to detail our findings related to the topic.',
        link: 'https://github.com/narmeenk97/spintronics-grp-3/tree/main',
        technologyUsed: 'HTML, CSS, JavaScript, Eleventy, Nunjucks, Google Forms, Bootstrap',
        imageURL: '/data/pics/spintronics.png',
    },
    {
        title: 'Eleventy Portfolio Website',
        description: 'This is a static site created using Eleventy and Nunjucks. Part of this project was to using a CMS to fetch and display data on the site. I created a bookstore and projects page, I fetched both of those from Strapi using local APIs. The data retrieved from Strapi is located in the CMSData.json file. I used Netlify to create a serverless function to fetch the weather in Toronto as part of the assignment requirement.',
        link: 'https://github.com/narmeenk97/INFT-3102/tree/main/Eleventy%20Portfolio%20Website/Eleventy%20Portfolio%20Website',
        technologyUsed: 'HTML, CSS, JavaScript, Eleventy, Nunjucks, Strapi, Netlify, Google Forms, OpenWeatherAPI, Axios, Bootstrap',
        imageURL: '',
    },
    {
        title: 'Flutter Weather App',
        description: 'This app is a weather forecast application that uses the devices current location, converts it into a city name, it fetches the weather data using the OpenWeatherMap API. It displays the current and daily weather data on the UI and it shows animated visuals using a lottie plugin.',
        link: 'https://github.com/narmeenk97/FlutterWeatherApp',
        technologyUsed: 'Flutter, Dart, OpenWeatherAPI, Lottie, http, geolocator, geocoding',
        imageURL: '',
    },
    {
        title: 'Full Stack JavaScript Web Application',
        description: 'This is a full stack JavaScript web application that allows users to create, read, update, and delete items from a database. It is a product management system that allows users to manage their products. It implements a multi-page client interface with seperate pages for creating, listing, and editing products. The application uses Express.js for the backend and Bootstrap and EJS for the frontend. It uses MongoDB as the database and Mongoose for object data modeling. ',
        link: 'https://github.com/narmeenk97/inft-2202-lab',
        technologyUsed: 'HTML, CSS, JavaScript, Node.js, Express.js, MongoDB, Mongoose, Bootstrap, EJS, Webpack, Babel, Express-Validator, Winston',
        imageURL: '/data/pics/fullstack.png',
    },
    {
        title: 'Product Inventory System',
        description: 'This is a product inventory system created using Java, it focuses on distingusing between general and perishable products. This project explains class inheritance, encapsulation, and polymorphism.',
        link: 'https://github.com/narmeenk97/COSC1200-F2023/tree/main/Assignment4',
        technologyUsed:'Java, OOP Principles, Console I/O',
        imageURL: '',
    }
];

export default function Projects(): JSX.Element {
  return (
      <div className="container my-5">
          <h1 className="text-center mb-4">My Projects</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
              {projects.map((project, index) => (
                  <div className="col" key={index}>
                      <div className="card h-100" style={{ color: 'black' }}>
                          {project.imageURL && (
                              <img 
                                  src={project.imageURL} 
                                  className="card-img-top" 
                                  alt={project.title} 
                              />
                          )}
                          <div className="card-body d-flex flex-column">
                              <h5 className="card-title" style={{ fontWeight: 'bold' }}>
                                  {project.title}
                              </h5>
                              <p className="card-text flex-grow-1">
                                  {project.description}
                              </p>
                              <p className="card-text" style={{ color: 'darkslategray' }}>
                                  <strong>Technology Used:</strong> {project.technologyUsed}
                              </p>
                              <Link href={project.link} legacyBehavior>
                                  <a className="btn btn-outline-dark mt-auto">Repository</a>
                              </Link>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
  );
}