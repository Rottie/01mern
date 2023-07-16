const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
<<<<<<< HEAD
  origin: "http://localhost:3000"
};


=======
  origin: "http://localhost:8081"
};







>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
require("./routes/tutorial.routes")(app);
<<<<<<< HEAD
require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);
//Database
const db = require("./models");
const Role = db.role;

=======
const db = require("./models");
>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
<<<<<<< HEAD
    initial();
=======
>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});


// set port, listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
<<<<<<< HEAD
});


//For  create 3 rows in rows collection
// For creating 3 rows in the roles collection
async function initial() {
  try {
    const count = await Role.estimatedDocumentCount();

    if (count === 0) {
      await Promise.all([
        new Role({ name: "user" }).save(),
        new Role({ name: "moderator" }).save(),
        new Role({ name: "admin" }).save()
      ]);

      console.log("Added 'user', 'moderator', and 'admin' to roles collection");
    }
  } catch (err) {
    console.error("Error initializing roles:", err);
  }
}
=======
});
>>>>>>> 5742268fe11c8d2d45e3fc4296258ec6684424f3
