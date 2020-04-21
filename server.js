const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');
const compression = require('compression');
app.use(helmet());
app.use(compression())
app.use(morgan("normal"));
const cityWeatherRouter = require('./cityWeatherRouter');
app.use(express.static("public"))
app.use('/city-weather', cityWeatherRouter);

app.get("/", async (req,res, next)=>{
  // res.status(200).sendFile(__dirname + "/views/index.html");
  superagent.get('https://cnodejs.org')
    .end(function(err, sres){
      if(err){
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .topic_title').each(function(idx, element){
        var $element = $(element);
        items.push({
          title: $element.attr('title'),
          href: $element.attr('href')
        });
      });
      console.log(items);
      res.status(200).send(items);
    })
})


let server;

// this function starts our server and returns a Promise.
// In our test code, we need a way of asynchronously starting
// our server, since we'll be dealing with promises there.
function runServer() {
  const port = process.env.PORT || 8080;
  return new Promise((resolve, reject) => {
    server = app
      .listen(port, () => {
        console.log(`Your app is listening on port ${port}`);
        resolve(server);
      })
      .on("error", err => {
        reject(err);
      });
  });
}

// like `runServer`, this function also needs to return a promise.
// `server.close` does not return a promise on its own, so we manually
// create one.
function closeServer() {
  return new Promise((resolve, reject) => {
    console.log("Closing server");
    server.close(err => {
      if (err) {
        reject(err);
        // so we don't also call `resolve()`
        return;
      }
      resolve();
    });
  });
}

// if server.js is called directly (aka, with `node server.js`), this block
// runs. but we also export the runServer command so other code (for instance, test code) can start the server as needed.
if (require.main === module) {
  runServer().catch(err => console.error(err));
}

module.exports = { app, runServer, closeServer };
