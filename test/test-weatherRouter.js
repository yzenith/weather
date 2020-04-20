const {app, runServer, closeServer} = require('../server');
const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;

chai.use(chaiHttp);

describe('cityWeatherRouter testing', function(){
  // before the testing it need to use run server and close server after the testing finished
  before(function(){
    return runServer();
  });

  after(function(){
    return closeServer();
  });

  // GET
  it("it should return a successful JSON body", function(){
    return chai
      .request(app)
      .get('/city-weather')
      .then(function(res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body.weather).to.not.equal(null);
        expect(res.body).to.include("coord");
        expect(res.body).to.include("weather");
      })
  });

  it('should return 404 error when city name not exist', function(){
    return chai
      .request(app)
      .get('/city-weather/sjdhfksj')
      .then(function(res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.include("cod");
        expect(res.body).to.include("message");
      })
  })



})
