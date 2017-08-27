'use strict'

var chai = require('chai');
var except = chai.except;

chai.should();
 
function returnName(name){
     return name;
 }

 describe('int first unit test',function(){
    it('test returnsName',function(){
        returnName('Faraz').should.equal('Faraz');
    });
 });