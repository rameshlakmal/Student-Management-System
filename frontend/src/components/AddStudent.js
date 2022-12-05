import React,{useState} from "react";
import axios from "axios";

export default function AddStudent(){

    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");

    //uda hadagattu variables walin object ekk hadagannw backend ekt e assign karagattu data tika pass karaganna
    function sendData(e){
        e.preventDefault();
        const newStudent = {
            name,
            age,
            gender
        }
        // parameters 2k use karanw 1weni ek thama back end url eka 
        //2weni eka thama hadagattu object eka. authentication use wenaw nm parameters 3k use wenaw.
        axios.post("http://localhost:8070/student/add",newStudent).then(()=>{
            alert("Student Added Successful...!")

        }).catch((err)=>{
            alert(err)
        })
    }


    return(
    <div className="container mt-5">
        <form className="text-left" onSubmit={sendData}>
            <div className="form-group">
                <label for="name">Student Name</label>
                <input type="text" className="form-control" id="name" placeholder="Insert Student Name" 
                //onChange eken karanne input filed wala type karana ewa realtime uda declare karapu variable walata assign karagannawa (line 6-8 , setName,setAge,setGender)
                onChange={(e)=>{
                    setName(e.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="age">Student Age</label>
                <input type="number" className="form-control" id="age" placeholder="Insert Student Age" onChange={(e)=>{
                    setAge(e.target.value);
                }}/>
            </div>
            <div className="form-group">
                <label for="gender">Student Gender</label>
                <input type="text" className="form-control" id="gender" placeholder="Insert Student Gender"onChange={(e)=>{
                    setGender(e.target.value);
                }}/>
            </div>

            <button type="submit" className="btn btn-primary" >Submit</button>
        </form>
    </div>

    )
}