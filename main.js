import { TaskController } from "./controller/task.js";

const method = process.argv[2];

switch (method) {
    case 'add': {
        const description = process.argv[3]
        const id = await TaskController.add(description)
        console.log(`Task added successfully (ID: ${id})`)
        break
    }
    case 'update': {
        const [id, description] = [parseInt(process.argv[3]), process.argv[4]]
        await TaskController.update(id, description)
        break
    }
    case 'delete': {
        const id = parseInt(process.argv[3])
        await TaskController.delete(id)
        break
    }
    case 'mark-in-progress':{
        const id = parseInt(process.argv[3])
        await TaskController.setTaskStatus(id, 'in-progress')
        break
    }
    case 'mark-done': {
        const id = parseInt(process.argv[3])
        await TaskController.setTaskStatus(id, 'done')
        break
    }
    case 'list': {
        const status = process.argv[3]
        let taskList = []
        if (status == undefined) taskList = await TaskController.getAll()
        else taskList = await TaskController.getTaskByStatus(status)
        console.log(taskList)
        break
    }
    default:
        console.log('Please add a method, for example: npm run task-cli add "Task 1"')
}

