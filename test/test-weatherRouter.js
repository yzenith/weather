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

  it("it should return a successful JSON body", function(){
    return chai
      .request(app)
      .get('/city-weather')
      .then(function(res){
        expect(res).to.have.status(200);
        expect(res).to.be.json;
        expect(res.body).to.not.equal(null)
      })
  });
})
