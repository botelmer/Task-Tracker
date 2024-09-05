# Task-Tracker
Task tracker is a project used to track and manage your tasks.

Challenge from: https://roadmap.sh/projects/task-tracker
# How to run
Clone the repository:

`git clone https://github.com/botelmer/Task-Tracker.git`

Move to the Task-Tracker directory.

`cd ./Task-Tracker`

open a command prompt and use the methods.

# Methods
Add task ( "description" )
- `npm run task-cli add "Buy groceries"`

Update task ( id, "description" )
- `npm run task-cli update 1 "Buy groceries and cook dinner"`

Delete task ( id )
- `npm run task-cli delete 1`

Marking a task as in progress or done ( id )
- `npm run task-cli mark-in-progress 1`
- `npm run task-cli mark-done 1`

Listing all tasks
- `npm run task-cli list`

Listing tasks by status ( "status" )
- `npm run task-cli list done`
- `npm run task-cli list todo`
- `npm run task-cli list in-progress`
