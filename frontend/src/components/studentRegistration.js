import React from "react";
// import './studentRegistration.css';

export default function StudentRegistration() {

  return (
    <div>
      <form class="row g-3">
        <h3>Academic details</h3>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            University Roll No.
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="University Roll No."
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            University Enrollment No.
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="University Roll No."
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Programme
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  BTech
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MTech
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MCA
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MBA
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PHd
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Branch
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Admission Source
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  JEE Mains
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NRI Quota
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  HBTU Entrance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PMSSS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  JEE Mains Govt. Nominee
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NIMSET
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other Scheme
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Current Semester
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3>Personal Details</h3>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Student Name
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Student Name"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Student Name In Hindi
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Student Name in Hindi"
          ></input>
           </div>
           
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Date
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="dd/mm/yyyy"
          ></input>
           </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Gender
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Male
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Female
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Contact No.
          </label>
          <input
            type="tel"
            class="form-control"
            id="inputAddress"
            pattern="[0-9]{10}"
            placeholder="Phone number"
          ></input>
           </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Alternate Contact No.
          </label>
          <input
            type="tel"
            class="form-control"
            id="inputAddress"
            pattern="[0-9]{10}"
            placeholder="Phone number"
          ></input>
           </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
           Personal Email
          </label>
          <input
            type="email"
            placeholder="Email"
            class="form-control"
            id="inputEmail4"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
           HBTU Email
          </label>
          <input
            type="email"
            placeholder="Email"
            class="form-control"
            id="inputEmail4"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Category
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  GEN
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  OBC
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  SC
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ST
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NRI
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ALL
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  MINORITY
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  GEN-EWS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  OBC-NCL
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Sub-Category
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  None
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Girl
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  AF
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  FF
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Handicapped PH
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Not Applicable
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Fee-Waiver
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Yes
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  No
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Blood Group
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  A+
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  AB+
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  O+
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  B+
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  A-
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  AB-
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  O-
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  B-
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Don't Know
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Identification Mark
          </label>
          <input
            type="text"
            class="form-control"
            id="inputAddress"
            placeholder="Student Name in Hindi"
          ></input>
           </div>
           <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Aadhar Card Number
          </label>
          <input
            type="tel"
            class="form-control"
            id="inputAddress"
            pattern="[0-9]{12}"
            placeholder="aadhar number"
          ></input>
           </div>
           <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Hostel
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Yes
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  No
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Mode Of Transport
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Bus
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Picked Up
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Walker
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Nationality
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Indian
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Religion
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  Hindu
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Muslim
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Sikh
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Christian
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other
                </a>
              </li>
            </ul>
          </div>
        </div>
        <h3>Entrance Exam Details</h3>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Entrance Exam
          </label>
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              --Select--
            </button>
            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li>
                <a class="dropdown-item" href="#">
                  JEE Mains
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NRI Quota
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  HBTU Entrance
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  PMSSS
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  JEE Mains Govt. Nominee
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  NIMSET
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Other Scheme
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
            Year
          </label>
          <input
            type="tel"
            class="form-control"
            id="inputAddress"
            pattern="[0-9]{4}"
            placeholder="Year of Examination"
          ></input>
           </div>
           
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Application Number
          </label>
          <input
            type="text"
            placeholder="Application"
            class="form-control"
            id="inputCity"
          ></input>
        </div>
           <div class="col-md-6">
          <label for="inputCity" class="form-label">
            AIR Rank
          </label>
          <input
            type="text"
            placeholder="All India Rank"
            class="form-control"
            id="inputCity"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Category Rank
          </label>
          <input
            type="text"
            placeholder="Category Rank "
            class="form-control"
            id="inputCity"
          ></input>
        </div>
        <h3>Parent's Details </h3>

        

        <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Father's Name
          </label>
          <input
            type="text"
            placeholder="Father's Name"
            class="form-control"
            id="inputCity"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputAddress" class="form-label">
           Father's Contact No.
          </label>
          <input
            type="tel"
            class="form-control"
            id="inputAddress"
            pattern="[0-9]{10}"
            placeholder="Phone number"
          ></input>
           </div>
           <div class="col-md-6">
          <label for="inputCity" class="form-label">
            Mother's Name
          </label>
          <input
            type="text"
            placeholder="Mother's's Name"
            class="form-control"
            id="inputCity"
          ></input>
        </div>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
           Parent's Email Id
          </label>
          <input
            type="email"
            placeholder="Email"
            class="form-control"
            id="inputEmail4"
          ></input>
        </div>
        
        
        <div class="col-12">
          <button type="submit" class="btn btn-primary">
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
}
