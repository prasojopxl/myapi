# MYAPI Notes

You can open official guideline about the #expressjs at [https://expressjs.com/](https://expressjs.com/) 

Currently we will using express generator for base template and structure folder. You can also open link for detail guideline at [https://expressjs.com/en/starter/generator.html] (https://expressjs.com/en/starter/generator.html)

## Requirement:
1. MySQL Database
2. NodeJS
3. NPM


## Step By step

1. Create your project folder: open your terminal and create your empty folder

install express JS with in your project folder:
`npm install -g express-generator`
`express --no-view .`

install your npm package with comment
`npm i`

2. install nodemon, packgae development auto reload nodejs server
`npm i nodemon -D`

3. Edit your run script like below:

<blockquote>
//package.json
  "scripts": {
    "start": "node ./bin/www",
    "dev": "nodemon ./bin/www"
  },
</blockquote>

So, you can run development mode with terminal `npm run dev`

for the example, below is my code at routes/users.js

<blockquote>
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
</blockquote>

