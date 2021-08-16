import React, { useEffect, useState } from "react";
import DashboardNavbar from "../../Dashboard/DashboardNavbar/DashboardNavbar";
import AppoinmentManagementDetails from "../AppoinmentManagementDetails/AppoinmentManagementDetails";

const AppoinmentManagement = () => {
  const [showPatients, setShowPatients] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5055/doctorsItem")
      .then((res) => res.json())
      .then((data) => setShowPatients(data));
  }, []);
  return (
    <div>
      <div>
        <DashboardNavbar></DashboardNavbar>
      </div>

      <div className="container pb-5 mb-5 ">
        <div className="row pb-3">
          <div className="col-lg-12">
            <div className="text-center py-1 border-bottom my-5 table-manage">
              <h2>
                Welcome to <span className="color">appointment management</span>
              </h2>
            </div>
            <table class="table table-borderless ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col" className="color">
                    View Action
                  </th>
                </tr>
              </thead>{" "}
              <tbody>
                {showPatients.map((showPatient) => (
                  <AppoinmentManagementDetails
                    patients={showPatient}
                  ></AppoinmentManagementDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppoinmentManagement;
