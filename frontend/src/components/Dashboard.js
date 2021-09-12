import React from 'react'
import "./dashboard.css"
export default function Dashboard({ data }) {
    return (
        <div className="student-profile py-4" id="student-profile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="card shadow-sm mb-4" id="card">
                            <div className="card-header bg-transparent text-center">
                                <img
                                    className="profile_img"
                                    src={data.photo}
                                    alt="student dp"
                                />
                                <h3>{data.Name}</h3>
                            </div>
                            <div className="card-body">
                                <p className="mb-0">
                                    <strong className="pr-1">Roll Number:</strong>
                                    {data.RollNo}
                                </p>
                                <p className="mb-0">
                                    <strong className="pr-1">Course:</strong>BTech
                                </p>
                                <p className="mb-0">
                                    <strong className="pr-1">Branch:</strong>
                                    {data.Branch}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="card shadow-sm" id="card">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0">
                                    <i className="far fa-clone pr-1"></i>General Information
                                </h3>
                            </div>
                            <div className="card-body pt-0">
                                {/* <table className="table table-bordered">
                                                <tr>
                                                    <th width="30%">Roll</th>
                                                    <td width="2%">:</td>
                                                    <td>125</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Academic Year</th>
                                                    <td width="2%">:</td>
                                                    <td>2020</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Gender</th>
                                                    <td width="2%">:</td>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">Religion</th>
                                                    <td width="2%">:</td>
                                                    <td>Group</td>
                                                </tr>
                                                <tr>
                                                    <th width="30%">blood</th>
                                                    <td width="2%">:</td>
                                                    <td>B+</td>
                                                </tr>
                                            </table> */}
                            </div>
                        </div>
                        <div style={{ height: "26px" }}></div>
                        <div className="card shadow-sm" id="card">
                            <div className="card-header bg-transparent border-0">
                                <h3 className="mb-0">
                                    <i className="far fa-clone pr-1"></i>Other Information
                                </h3>
                            </div>
                            <div className="card-body pt-0">
                                <p>
                                    Welcome {data.Name} head towards Dashboard to see
                                    more detailed Info.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
