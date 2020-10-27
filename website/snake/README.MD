# **JavaScript Snake Game Notes**

## **Connecting to MongoDB Database**

Check out the [mongoDB Setup](https://docs.mlab.com/) page when creating or starting a new database connections or editing data.  To connect, run the following command:

        mongo "mongodb+srv://cluster0.imsfy.mongodb.net/JavaScriptSnakGame" --username PeteAdamBialeckiTesting

Sample data insert:

        db.mynewcollection.insert({ "foo" : "bar" })

To view data:

        db.mynewcollection.find()

## **Heroku**

Getting started.  Here are a few links that might help

- [Deploying to Heroku](https://sweetcode.io/deploying-express-node-js-backend-heroku/)

- [Heroku Setup](https://www.heroku.com/nodejs)

When making updates, navigate to this directory and then  run the following commands:

        git add .

        git commit -m "asdfasdf"

        git push heroku master

Then visit the domain:

        https://javascriptsnakegame.herokuapp.com/

## **Extra**

[Heroku Dashboard](https://dashboard.heroku.com/apps)

To start, run the following command:
        node index.js