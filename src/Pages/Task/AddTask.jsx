import React from "react";

function AddTask() {
  return (
    <div className="px-5">
      <h3>Add Task</h3>
      <form action="" className="">
        <div className="row mt-4">
          {/* Task Name */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="TaskName" className="mb-0 w-100">
              Task Name
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="TaskName"
              placeholder="Enter task name"
            />
          </div>

          {/* Assigned To */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="AssignedTo" className="mb-0 w-100">
              Assigned To
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="AssignedTo"
            >
              <option value="" disabled selected>
                Select assignment
              </option>
              <option value="Developer">Developer</option>
              <option value="Manager">Manager</option>
            </select>
          </div>

          {/* Related Project */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="RelatedProject" className="mb-0 w-100">
              Related Project
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="RelatedProject"
            >
              <option value="" disabled selected>
                Select project
              </option>
              <option value="Project1">Project Alpha</option>
              <option value="Project2">Project Beta</option>
              <option value="Project3">Project Gamma</option>
            </select>
          </div>

          {/* Priority */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="Priority" className="mb-0 w-100">
              Priority
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Priority"
            >
              <option value="" disabled selected>
                Select priority level
              </option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          {/* Due Date */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="DueDate" className="mb-0 w-100">
              Due Date
            </label>
            <input
              type="date"
              className="form-control shadow-none focus-none py-2"
              id="DueDate"
            />
          </div>

          {/* Status */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="Status" className="mb-0 w-100">
              Status
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="Status"
            >
              <option value="" disabled selected>
                Select status
              </option>
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
          </div>

          {/* Task Description */}
          <div className="col-sm-12 mb-3">
            <label htmlFor="TaskDescription" className="mb-0 w-100">
              Task Description
            </label>
            <textarea
              id="TaskDescription"
              className="form-control shadow-none focus-none py-2 size"
              rows={4}
              placeholder="Provide a detailed description of the task"
            ></textarea>
          </div>

          {/* Task Dependencies */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="TaskDependencies" className="mb-0 w-100">
              Task Dependencies
            </label>
            <input
              type="text"
              className="form-control shadow-none focus-none py-2"
              id="TaskDependencies"
              placeholder="Specify dependencies between tasks"
            />
          </div>

          {/* Time Estimation and Tracking */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="TimeEstimation" className="mb-0 w-100">
              Time Estimation (hours)
            </label>
            <input
              type="number"
              className="form-control shadow-none focus-none py-2"
              id="TimeEstimation"
              placeholder="Estimate time required"
            />
          </div>

          {/* Automated Reminders */}
          <div className="col-sm-6 mb-3">
            <label htmlFor="AutomatedReminders" className="mb-0 w-100">
              Automated Reminders
            </label>
            <select
              className="form-control shadow-none focus-none py-2"
              id="AutomatedReminders"
            >
              <option value="" disabled selected>
                Set reminder for upcoming or overdue tasks
              </option>
              <option value="1 Day Before">1 Day Before</option>
              <option value="2 Days Before">2 Days Before</option>
              <option value="1 Week Before">1 Week Before</option>
            </select>
          </div>

          {/* Save Button */}
          <div className="col-12">
            <button
              type="submit"
              className="bg-blue border-0 px-5 py-2 focus-none text-white rounded-3"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddTask;
