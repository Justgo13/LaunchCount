# LaunchCount

SpaceX, NASA, Blue Origin

Number of Successful Launches
Number of Failures
Number of Postphoned Launches

MERN Application
----------------
MongoDB nodemon server.js
Express
REACT - GatsbyJS
Node

##_**DISCLAIMER**_
This project has moved maintainers and is no longer developed here. The up to date template can be found [here](https://github.com/rennemannd/MERN-Template).

#### _**IMPORTANT NOTE**_ - 
This project does not have a mongoDB connection setup. Setup the connection based on the environments below.
- local development: create a config file (make sure to name it config.js) in the config folder, which exports your db.uri connection. An example is provided, config/config.example.js. This file will be ignored by git so your db credentials will be kept safe when the app is deployed.
- production: Since the config file is not pushed when you deploy your app, you must specifiy your db uri in heorku. Set the uri in heroku as specified in [this](https://devcenter.heroku.com/articles/config-vars) resource. Make sure you name the environement variable "DB_URI".
