# In Sequence


## Overview

In Sequence is a full-stack, full-CRUD app, that utilizes a RESTful JSON API with the "React on Rails" stack. This app is a developer tool for tracking and organization. It allows users to keep track of their studies, projects, networking events, and job search. Users can create an account and have access to create, read, edit and delete to keep track of their projects, networking events, job search, and study plans.


<br>

## MVP

- Build a Ruby on Rails server, exposing RESTful JSON endpoints
- Build a database with 3 tables: Users, Studies, and Projects
- Utilize Rails to define models (user, study, project) for interacting with the database
- Implement working generic controller actions for Full CRUD (index, show, create, update, delete) between Studies and projects tables
- Create 8 separate, rendered components: studyCreate, studyDetail, studyEdit, Study, projectCreate, projectDetail, and project
- Render data from Ruby on Rails API in components
- Demonstrate Full CRUD actions ( index, show, create, update, and delete ) on the front end.
- Style layout with flexbox and grid
- Basic CSS styling 
- Implement 2 media queries for responsive design on desktop, mobile, and ipad.

<br>

### Goals

- Create a useful organization/tracking tool for developers
- Create a creative and easy to navigate application that incorporates modern UI themes
- Demonstrate understanding of (and ability to use) Ruby on Rails, RESTful JSON API, Javascript, and React

<br>

### Libraries and Dependencies


|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|   Material UI    | React components library for buttons, icons, menus, text fields and more|

<br>

### Client (Front End)

#### Wireframes


https://xd.adobe.com/view/ab7adf9b-b61d-4516-820a-efe6385f4f00-fe29/?fullscreen

- Desktop Wireframes


https://xd.adobe.com/view/f60e229f-378a-4184-af19-87b70e57e3bd-a35d/

- Mobile Wireframes


https://xd.adobe.com/view/a38d8eb6-4d06-40e1-9917-0ef3cd68fadc-f6de/

- Ipad Wireframes


#### Component Tree

https://whimsical.com/in-sequence-component-tree-52MAGyYYw5pvgoPXtzfdQw

#### Component Hierarchy


``` structure

src
|__ components/
      |__ Layout
      |__ images
|__ Maincontainer/
      |__ StudyContainer.jsx
      |__ ProjectContainer.jsx
|__ screens/
          |__ Study.jsx
          |__ StudyCreate.jsx
          |__ StudyDetail.jsx
          |__ StudyEdit.jsx
          |__ Project.jsx
          |__ ProjectCreate.jsx
          |__ ProjectDetail.jsx
          |__ projectEdit.jsx
          |__ SignIn.jsx
          |__ SignUp.jsx
|__ services/
          |__ api-config.js
          |__ study.js
          |__ project.js
```


#### Time Estimates


| Task                     | Priority | Estimated Time | Time Invested | Actual Time |
| -------------------      | :------: | :------------: | :-----------: | :---------: |
| Create Database Tables   |    H     |     1 hrs      |     -----     |    -----    |
| Create Models            |    H     |     1 hrs      |     -----     |    -----    |
| Crontroller CRUD Actions |    H     |     3 hrs      |     -----     |    -----    |
| Create React Components  |    H     |     3 hrs      |     -----     |    -----    |
| Render data in components|    H     |     3 hrs      |     -----     |    -----    |
| Full CRUD in Components  |    H     |     3 hrs      |     -----     |    -----    |
| Layout Styling           |    M     |     2 hrs      |     -----     |    -----    |
| Basic CSS Styling        |    M     |     2 hrs      |     -----     |    -----    |
| Media Queries / 3 screens|    H     |     2 hrs      |     -----     |    -----    |
| Modern UI themes         |    L     |     2 hrs      |     -----     |    -----    |
| Advanced CSS Styling     |    L     |     3 hrs      |     -----     |    -----    |
| Network & Job Tables     |    M     |     1 hrs      |     -----     |    -----    |
| Network & Job Models     |    M     |     1 hrs      |     -----     |    -----    |
| Network & Job Controllers|    M     |     3 hrs      |     -----     |    -----    |
| Network & Job Components |    M     |     3 hrs      |     -----     |    -----    |
| TOTAL                    |          |     33 hrs     |     -----     |    -----    |


<br>

### Server (Back End)

#### ERD Model

> https://drive.google.com/file/d/1bVg9fy30k1qBXlmqIZvDA7llB8KVMChH/view?usp=sharing

<br>

***

## Post-MVP

- Incorporate modern UI themes
- Add advanced CSS and animations
- Create "Network" and "Job-Search" tables 
- Network and Job Search Models
- Network and Job Search Controllers with create, read and delete capabilities
- Create Network and JobSearch components with create, read and delete capabilities on the front end 

***

## Code Showcase

> To be completed later 

## Code Issues & Resolutions

> To be completed later
