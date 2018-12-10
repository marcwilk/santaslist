# Santa List
- Create express app, configure knex
- ERD to migrations
- Seed db
- Build routes (get all, get one, post, put, delete)
- Deploy to heroku
- Create frontend to consume our API
- Re-deploy to heroku

## Steps:
1. mkdir santa_warmup
2. cd santa_warmup
3. express santaslist --no-view --git
4. cd santaslist
5. npm install
6. atom .
7. edit html
8. nodemon
9. open localhost:3000
10. open postman
11. npm install knex pg --save
12. change app.js (updated routes to users and presents, lines 6, 7, 17, 18)
13. build erd
14. knex init
15. edit knexfile.js with template and 5432/santa_db for dev and test
16. knex migrate:make users
17. edit users.js file under routes
18. knex seed:make users
19. edit users.js file under seeds
20. createdb santa_db
21. knex migrate:latest
22. knex seed:run
23. psq santa_db
24. SELECT * FROM users;
25. build routes
- require knex in users.js file under routes
- create knex.js file in project
- .first() === data[0]
26. open localhost:3000/users
27. deploy to heroku
- check start script in package.json
- git add .
- git commit -m
- git push origin master
- heroku create mww-santa-list
- heroku addons:create heroku-postgresql
- git push heroku master
- heroku run knex migrate:latest
- heroku run knex seed:run
- heroku open
- https://mww-santa-list.herokuapp.com/users
28. create frontend
- create main.js file under public/javascripts
- add script src to index.html
- edit main.js file
- add axios script src to index.html above javascript
- git add .
- git commit -m
- git push origin master
- git push heroku master

