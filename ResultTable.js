import React from "react";
import Table from "react-bootstrap/Table";
import Row from "./ResRow";

function ResultTable() {
    return (
        <div className="res-table">
            <Table responsive striped bordered className="resultTable">
                <thead>
                    <tr className="restab">
                        <td colSpan="4">Name : HarshVardhan Omar</td>
                        <td colSpan="4">Roll No. : 190108023</td>
                        <td colSpan="4">Father's Name : </td>
                        <td colSpan="4">Branch : IT</td>
                    </tr>
                    <tr className="restab">
                        <td colSpan="8">Ist Sem</td>
                        <td colSpan="8">IInd Sem</td>
                    </tr>
                </thead>
                <tbody>
                    <Row
                        style={{ fontWeight: "500" }}
                        head="Subject Code"
                        c1="BMA253"
                        c2="ECS255"
                        c3="HHS251"
                        c4="HHS255"
                        c5="ECS251"
                        c6="ECS253"
                        c7="EET259"
                        c8="BMA253"
                        c9="ECS255"
                        c10="HHS251"
                        c11="HHS255"
                        c12="ECS251"
                        c13="ECS253"
                        c14="EET259"
                    />
                    <Row
                        head="Credit"
                        c1="4"
                        c2="5"
                        c3="5"
                        c4="5"
                        c5="5"
                        c6="5"
                        c7="5"
                        c8="5"
                        c9="5"
                        c10="5"
                        c11="5"
                        c12="5"
                        c13="5"
                        c14="5"
                    />
                    <Row
                        head="Marks Obtained (MSE)"
                        c1="20/30"
                        c2="20/30"
                        c3="20/30"
                        c4="20/30"
                        c5="20/30"
                        c6="20/30"
                        c7="20/30"
                        c8="20/30"
                        c9="20/30"
                        c10="20/30"
                        c11="20/30"
                        c12="20/30"
                        c13="20/30"
                        c14="20/30"
                    />
                    <Row
                        head="Marks Obtained (ESE)"
                        c1="20/50"
                        c2="20/50"
                        c3="20/50"
                        c4="20/50"
                        c5="20/50"
                        c6="20/50"
                        c7="20/50"
                        c8="20/50"
                        c9="20/50"
                        c10="20/50"
                        c11="20/50"
                        c12="20/50"
                        c13="20/50"
                        c14="20/50"
                    />
                    <Row
                        head="Total Marks"
                        c1="70/100"
                        c2="70/100"
                        c3="70/100"
                        c4="70/100"
                        c5="70/100"
                        c6="70/100"
                        c7="70/100"
                        c8="70/100"
                        c9="70/100"
                        c10="70/100"
                        c11="70/100"
                        c12="70/100"
                        c13="70/100"
                        c14="70/100"
                    />

                    <tr className="restab">
                        <td colSpan="4">Total Marks : 500/600</td>
                        <td colSpan="4">SGPA: 8/10</td>
                        <td colSpan="4">Total Marks : 500/600</td>
                        <td colSpan="4">SGPA : 8/10</td>
                    </tr>
                    <tr className="restab">
                        <td colSpan="16">YGPA : 8/10</td>
                    </tr>
                </tbody>
            </Table>
            <button className="btn download butn-1" href="">
                Print Result
            </button>
        </div>
    );
}
export default ResultTable;
