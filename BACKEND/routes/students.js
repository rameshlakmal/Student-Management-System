const router = require("express").Router();
let Student = require("../models/Student");


//add student method
router.route("/add").post((req,res)=>{
    const name = req.body.name;
    const age = Number(req.body.age);
    const gender = req.body.gender;

    const newStudent = new Student({
        name,
        age,
        gender
    })

    newStudent.save().then(()=>{
        res.json("Student Added")
    }).catch(()=>{
        console.log(err);
    })
})

//get student details method
router.route("/").get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})


//Update  student details(async await)
router.route("/update/:id").put(async (req,res)=>{
    let userId = req.params.id; //fetch user id from url
    const {name, age ,gender} = req.body; //destructure

    const updateStudent = {
        name,
        age,
        gender
    }
    const update = await Student.findByIdAndUpdate(userId, updateStudent).then(()=>{
        res.status(200).send({status:"User Updated",user: update})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"Error with updating data"});
    })
})

router.route("/delete/:id").delete(async (req,res)=>{
    let userID = req.params.id;
    await Student.findByIdAndDelete(userID)
    .then(()=>{
        res.status(200).send({status: "User Deleted..."});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete user", error: err.message});
    })
})




module.exports = router;
