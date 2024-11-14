import React, { useCallback, useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const AllTask = () => {
  const [userData,setUserData] = useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 ">
      <div className="bg-red-400 mb-2 py-2 px-4 flex justify-between rounded">
        <h2 className="text-lg font-medium w-1/5 ">Employee Name</h2>
        <h3 className="text-lg font-medium w-1/5 ">New Task</h3>
        <h5 className="text-lg font-medium w-1/5 ">Active Task</h5>
        <h5 className="text-lg font-medium w-1/5 ">Completed</h5>
        <h5 className="text-lg font-medium w-1/5 ">Failed</h5>
      </div>
      <div className=" ">
        {userData.map(function(e,idx) {
          return (
            <div key={idx}  className="text-lg font-medium border-2 border-emerald-400 mb-2 py-2 px-4 flex justify-between rounded">
              <h2 className="text-lg font-medium w-1/5">{e.firstName}</h2>
              <h3 className="text-lg font-medium w-1/5 text-blue-600">{e.taskSummary.newTask}</h3>
              <h5 className="text-lg font-medium w-1/5 text-yellow-400">{e.taskSummary.active}</h5>
              <h5 className="text-lg font-medium w-1/5 text-white-600">{e.taskSummary.completed}</h5>
              <h5 className="text-lg font-medium w-1/5 text-red-600">{e.taskSummary.failed}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllTask;
