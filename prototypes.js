function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
  //   this.cuteStatement = function () {
  //   console.log(this.owner + " loves " + this.name);
  // };
}

Cat.prototype = {
  // cuteStatement: function () {
  //   //console.log(this.owner + " loves " + this.name);
  //   return newStatement();
  // }

  // newStatement: function () {
  //   console.log("Everyone loves " + this.name);
  // }

  meow: function () {
    console.log("meow");
  }
};

var c1 = new Cat("bob", "tom");
var c2 = new Cat("bob2", "tom2");
var c3 = new Cat("bob3", "tom3");

c1.cuteStatement();
c2.cuteStatement();
c3.cuteStatement();
