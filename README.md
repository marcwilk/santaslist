# Santa List
- Create express app, configure knex
- ERD to migrations
- Seed db
- Build routes (get all, get one, post, put, delete)
- Deploy to heroku
- Create frontend to consume our API
- Re-deploy to heroku

## Steps:
mkdir santa_warmup
cd santa_warmup
express santaslist --no-view --git
cd santaslist
npm install
atom .
edit html
nodemon
open localhost:3000
open postman
npm install knex pg --save
change app.js (updated routes to users and presents, lines 6, 7, 17, 18)
build erd
knex init
edit knexfile.js with template and 5432/santa_db for dev and test
knex migrate:make users
edit users.js file under routes
knex seed:make users
edit users.js file under seeds
createdb santa_db
knex migrate:latest
knex seed:run
psq santa_db
SELECT * FROM users;
build routes
-require knex in users.js file under routes
-create knex.js file in project
-.first() === data[0]
open localhost:3000/users
deploy to heroku
-check start script in package.json
-git add .
-git commit -m
-git push origin master
-heroku create mww-santa-list
-heroku addons:create heroku-postgresql
-git push heroku master
-heroku run knex migrate:latest
-heroku run knex seed:run
-heroku open
-https://mww-santa-list.herokuapp.com/users
create frontend
-create main.js file under public/javascripts
-add script src to index.html
-edit main.js file
-add axios script src to index.html above javascript
-git add .
-git commit -m
-git push origin master
-git push heroku master

