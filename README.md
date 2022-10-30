# MYAPI Notes

You can open official guideline about the #expressjs at [https://expressjs.com/](https://expressjs.com/) 

Currently we will using express generator for base template and structure folder. You can also open link for detail guideline at [https://expressjs.com/en/starter/generator.html] (https://expressjs.com/en/starter/generator.html)

## Requirement:
1. MySQL Database
2. NodeJS
3. NPM


## Step By step

1. Create your project folder: open your terminal and create your empty folder

install express JS in your project folder:
```
npm install -g express-generator
express --no-view .
```

install your npm package with comment
```
npm i
```

2. install nodemon, packgae development auto reload nodejs server
```
npm i nodemon -D
```


3. Edit your run script like below:
```
//package.json
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
```

So, you can run development mode with terminal `npm run dev`

for the example, below is my code at routes/users.js
```
/* GET users listing. */
router.get('/',(req,res)=> {
  return res.json({
    id:1,
    name:'Sapto Prasojo',
    role:'admin'
  })
})

// POST
router.post("/",(req,res)=> {
  return res.json (req.body)
})
```

4. we will use mysql database, so in the next step we will use sequelize to connect our mysql, below is step implementation:
open your command line and type:
```
npm i sequelize sequelize-cli
```

5. Confirm sequlize already on your project, open your terminal and type
```
npx sequelize
```

6. 


