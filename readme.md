<a name="readme-top"></a>
 
  
<!-- PROJECT LOGO -->
<br />
<div align="center">
   
  <a href="https://github.com/ibrsec/book-fs-backend-express">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReZDNfUZW8YD3MKO8UbBHdGkWCblLjSi1d6g&s" alt="Logo" width="250"   >
  </a> 

  <h3 align="center">Backend of the Book App</h3>

  <p align="center"> 
    An awesome Backend of the Book App
    <!-- <a href="https://github.com/ibrsec/stock-app"><strong>Explore the docs »</strong></a> -->
    <br />
    <br />  
    <a href="https://github.com/ibrsec/book-fs-frontend-react">Frontend Repo</a>
    ·
    <a href="https://book-fs-frontend-react.vercel.app/">Frontend Live</a>
    ·
    <a href="https://github.com/ibrsec/book-fs-backend-express/issues">Report Bug</a>
    ·
    <a href="https://github.com/ibrsec/book-fs-backend-express/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>📎 Table of Contents 📎 </summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
     <!-- <li><a href="#figma">Figma</a></li> -->
     <li><a href="#overview">Overview</a></li>
     <li><a href="#quick-setup">Quick Setup</a></li>
     <li><a href="#directory-structure">Directory structure</a></li>
     <li><a href="#built-with">Built With</a></li>
    <!-- <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li> -->

    
  </ol>
</details>





---

<!-- ABOUT THE PROJECT -->
<a name="about-the-project"></a>
## ℹ️ About The Project

<b>ERD:</b>
[![stock-app-erd](./booksErd.png)](https://book-fs-frontend-react.vercel.app/)
---




<p align="right">(<a href="#readme-top">back to top</a>)</p>


---

<!-- ## Figma 

<a href="https://www.figma.com/file/ePyCHKsx2ODB32uLgyUEEd/bootstrap-home-page?type=design&node-id=0%3A1&mode=design&t=edDzadCB9Ev5FS1a-1">Figma Link</a>  

  <p align="right">(<a href="#readme-top">back to top</a>)</p>




--- -->
<a name="overview"></a>
## 👀 Overview

📦 A Backend of Books App Project</br>
🏀 [Frontend Repo](https://github.com/ibrsec/book-fs-frontend-react) </br></br>


<b>🎯 Express.js Framework:</b> Developed a robust and efficient RESTful API with Express.js to manage book and user data seamlessly.

<b>📊 Database Management:</b> Leveraged PostgreSQL with Sequelize ORM for effective data modeling, validation, and complex querying of book-related information.

<b>🔄 CRUD Operations:</b> Implemented full CRUD functionality to manage books, authors, genres, and user accounts, ensuring comprehensive data management.

<b>🛠 Middleware & Error Handling:</b> Created custom middleware for input validation, CORS handling, and consistent error management using express-async-errors.

<b>🌐 Scalable Deployment:</b> Prepared for deployment on platforms like Vercel to ensure high availability and scalability.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="quick-setup"></a>
## 🛫 Quick Setup

```sh
# clone the project
git clone https://github.com/ibrsec/book-fs-backend-express.git

# enter the project directory
cd book-fs-backend-express

# install dependency
npm install 

# develop
npm run start 

```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- ## 🐞 Debug

![stock-app.gif](/stock-app.gif) -->








<a name="directory-structure"></a>
## 📂 Directory structure 

```diff
+ book-fs-backend-express  (folder)     
+     |---app (folder) 
      |     |---config (folder)       
      |     |           
      |     |---controllers (folder) 
      |     |    
      |     |---middlewares (folder) 
      |     |          
      |     |---models (folder)           
      |     |          
      |     └---router (folder)  
      |      
      |----.env
      |----.gitignore
      |----index.js 
      |----package.json  
      |----vercel.json
      └----readme.md 
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

<a name="built-with"></a>
### 🏗️ Built With


<!-- https://dev.to/envoy_/150-badges-for-github-pnk  search skills-->

 
 <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
 <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"> 
 <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"> 
 <img src="https://img.shields.io/badge/postgresql-4EA94B?style=for-the-badge&logo=postgresql&logoColor=white"> 
 <img src="https://img.shields.io/badge/sequelize-4EA94B?style=for-the-badge&logo=sequelize&logoColor=white"> 
 <!-- <img src="https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink">  -->
 <!-- <img src="https://img.shields.io/badge/jwt%20token-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink">  -->
  

 <!-- <img src="https://img.shields.io/badge/Morgan-000000?style=for-the-badge&logo=morgan&logoColor=white">  -->
 <img src="https://img.shields.io/badge/Express%20async%20errors-000000?style=for-the-badge&logo=express-async-errors&logoColor=white"> 
 <img src="https://img.shields.io/badge/dotenv-000000?style=for-the-badge&logo=dotenv&logoColor=white"> 
 <img src="https://img.shields.io/badge/cors-000000?style=for-the-badge&logo=cors&logoColor=white"> 
 

 <img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white"> 

