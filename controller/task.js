import { NextIdModel } from "../model/nextId.js";
import { TaskModel } from "../model/task.js";

export class TaskController {
    static async add(description){
        if(description == undefined) return console.error('Error: The description cannot be empty')

        const tasks = await TaskModel.getAll()

        const id = await NextIdModel.getNextId()
    
        const task = {
            id,
            description,
            status: 'todo',
            createdAt: new Date().toLocaleTimeString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
            updatedAt: null
        }
        tasks.push(task)

        await TaskModel.setTasks(tasks)
        await NextIdModel.setNextId(id + 1)

        return task.id
    }

    static async update(id, description){
        if(isNaN(id)) return console.error('Error: Id cannot be a string or empty')
        if(description == undefined) return console.error('Error: The description cannot be empty')

        const tasks = await TaskModel.getAll()
        let index = tasks.findIndex((task) => {
            return task.id == id
        })

        if(index == -1) return console.error(`Error: Task with id: ${id} not found.`)

        tasks.splice(index, 1, {
            ...tasks[index], 
            description,
            updatedAt: new Date().toLocaleTimeString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        })

        await TaskModel.setTasks(tasks)
    }

    static async delete(id){
        if(isNaN(id)) return console.error('Error: Id cannot be a string or empty')
            
        const tasks = await TaskModel.getAll()
        let index = tasks.findIndex((task) => {
            return task.id == id
        })

        if(index == -1) return console.error(`Error: Task with id: ${id} not found.`)

        tasks.splice(index ,1)

        await TaskModel.setTasks(tasks)
    }

    static async setTaskStatus(id, status){
        if(isNaN(id)) return console.error('Error: Id cannot be a string or empty')

        const tasks = await TaskModel.getAll()
        let index = tasks.findIndex((task) => {
            return task.id == id
        })

        if(index == -1) return console.error(`Error: Task with id: ${id} not found.`)

        tasks.splice(index, 1, {
            ...tasks[index], 
            status,
            updatedAt: new Date().toLocaleTimeString('es-ES', {
                year: 'numeric',
                month: '2-digit',
                day: '2-digit',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
            }),
        })
        console.log(tasks[index])

        await TaskModel.setTasks(tasks)
    }

    static async getTaskByStatus(status){
        if(status == undefined) return console.error('Error: Status cannot be empty')

        const tasks = await TaskModel.getAll()
        const taskByStatus = tasks.filter((task) => {
            return task.status === status
        })

        return taskByStatus
    }

    static async getAll(){
        return await TaskModel.getAll()
    }
}