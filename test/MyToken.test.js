// const Token = artifacts.require("MyToken.sol");

// var chai = require("chai");

// const BN = web3.utils.BN;
// const chaiBN = require("chai-bn")(BN);
// chai.use(chaiBN);

// var chaiAsPromised = require("chai-as-promised");
// chai.use(chaiAsPromised);

// const expect = chai.expect;

// contract("Token test", async function (accounts) {

//     it("all tokens should be in my account", async function () {
//         let instance = await Token.deployed;
//         let totalSupply = await instance.totalSupply();
//         expect(await instance.balanceOf(accounts[0])).to.be.a.bignumber.equal(totalSupply);

//     })
// })

const Token = artifacts.require("MyToken");
var chai = require("chai");
const BN = web3.utils.BN;
const chaiBN = require('chai-bn')(BN);
chai.use(chaiBN);

var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
const expect = chai.expect;
contract("Token Test", async accounts => {
    const [initialHolder, recipient, anotherAccount] = accounts;
    it("All tokens should be in my account", async () => {
        let instance = await Token.deployed();
        let totalSupply = await instance.totalSupply();
        //old style:
        //let balance = await instance.balanceOf.call(initialHolder);
        //assert.equal(balance.valueOf(), 0, "Account 1 has a balance");
        //condensed, easier readable style:
        expect(instance.balanceOf(initialHolder)).to.eventually.be.a.bignumber.equal(totalSupply);
    });
});