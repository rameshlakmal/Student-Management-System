import React,{useState} from "react";

export default function AddStudent(){

    return(
    <div className="container mt-5">
        <form className="text-left">
            <div class="form-group">
                <label for="name">Student Name</label>
                <input type="text" class="form-control" id="name" placeholder="Insert Student Name"/>
            </div>
            <div class="form-group">
                <label for="age">Student Age</label>
                <input type="number" class="form-control" id="age" placeholder="Insert Student Age"/>
            </div>
            <div class="form-group">
                <label for="gender">Student Gender</label>
                <input type="text" class="form-control" id="gender" placeholder="Insert Student Gender"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>

    )
}