const mongoose = require("mongoose")

main().catch(err => console.log(err));


async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/fruitsDB");

  // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

const fruitSchema = new mongoose.Schema({
  name: {
    type:String,
    required: [true, "No name specified. Please check your data entry."]
  },
  rating: {
    type:Number,
    min:1,
    max:10
  },
  review: String
})

const Fruit = mongoose.model("Fruit", fruitSchema);

const fruit = new Fruit ({
  name:"apple",
  rating: 7,
  review:"Bloody good apple"
})

const orange = new Fruit ({
  name:"Orange",
  rating: 10,
  review:"Good source of vitamin D"
})

const banana = new Fruit ({
  name:"Banana",
  rating: 10,
  review: "Best potassium source"
})


const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema)
const person = new Person({
  name:"John",
  age: 54
})

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err)
  } else {
    //mongoose.connection.close()
    fruits.forEach(element => console.log(element.name))
  }
})
//person.save()
mongoose.connection.close()

//fruit.save()
// Fruit.deleteMany({name:"Apple"},
// function(err){
//   if (err){
//     console.log("An error occured, could not delete field/s.")
//     console.log(err)
//
//   } else {
//     console.log("Successfully deleted fields.")
//   }
// })
// Fruit.insertMany([orange, banana], function(err){
//   if (err){
//     console.log(err);
//   } else {
//     console.log("Objects have been saved to Database.")
//   }
// })
