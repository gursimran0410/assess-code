import React, { useState } from "react";
import { collegesList, examsList } from "../../assets/appData";

export function FurtherMenuSelector() {
  const [selectedMenu, setSelectedMenu] = useState("college");

  const handleButtonClick = (e) => {
    let value = e.target.value;
    let exmBtn = document.getElementById("exmBtn");
    let clgBtn = document.getElementById("clgBtn");
    if (value === "college") {
      exmBtn.className = "exmBtn buttonBrd selectorBtn";
      clgBtn.className = "clgBtn buttonBrd activeBtn";
      setSelectedMenu("college");
    } else {
      exmBtn.className = "exmBtn buttonBrd activeBtn";
      clgBtn.className = "clgBtn buttonBrd selectorBtn";
      setSelectedMenu("exam");
    }
  };

  return (
    <div style={{ margin: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>
          <h3 style={{ marginBottom: "0px" }}>Explore Your Future</h3>
          <p style={{ margin: "0px" }}>Select For College Or Exam</p>
        </div>
        <img
          alt="graduation"
          src="https://img.icons8.com/ios-glyphs/60/000000/graduation-cap--v1.png"
        />
      </div>
      <div style={{ textAlign: "center", marginTop: "15px" }}>
        <button
          id="clgBtn"
          className="clgBtn buttonBrd activeBtn"
          onClick={handleButtonClick}
          value="college"
        >
          COLLEGES
        </button>
        <button
          id="exmBtn"
          className="exmBtn buttonBrd selectorBtn"
          onClick={handleButtonClick}
          value="exam"
        >
          EXAMS
        </button>
      </div>
      <div className="optionsGrid">
        {selectedMenu === "college"
          ? collegesList.map((item, index) => (
              <div key={index} className="optionsGridItems">
                <img
                  alt="clg"
                  src="https://img.icons8.com/material-outlined/48/000000/school-house.png"
                />
                <div>{item.type}</div>
                <div>{item.colleges}</div>
              </div>
            ))
          : examsList.map((item, index) => (
              <div key={index} className="optionsGridItems">
                <img
                  alt="exm"
                  src="https://img.icons8.com/material-outlined/48/000000/exam.png"
                />
                <div>{item.type}</div>
                <div>{item.exams}</div>
              </div>
            ))}
      </div>
    </div>
  );
}
