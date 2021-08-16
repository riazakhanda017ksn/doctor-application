import React, { useEffect, useState } from "react";
import ShowDoctorDetails from "../../Doctor/ShowDoctorDetails/ShowDoctorDetails";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import ShowAdminDetails from "../ShowAdminDetails/ShowAdminDetails";

const ShowAdmin = () => {
  const [admins, setAdmins] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5055/admins")
      .then((res) => res.json())
      .then((data) => setAdmins(data));
  }, [0]);
  return (
    <div>
      <div>
        <DashboardNavbar></DashboardNavbar>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="text-center py-1 border-bottom my-5">
              <h2>
                Welcome to <span className="color">admin panel management</span>
              </h2>
            </div>
            <table class="table table-borderless ">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col" className="color">
                    Delete
                  </th>
                </tr>
              </thead>{" "}
              <tbody>
                {admins.map((admin) => (
                  <ShowAdminDetails adminItems={admin}></ShowAdminDetails>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowAdmin;
