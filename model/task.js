import fs from 'fs/promises'

export class TaskModel {
    static async getAll(){
        try{
            const tasks = await fs.readFile('./tasks.json', { encoding: 'utf-8' })
            return tasks == '' ? [] : JSON.parse(tasks)
        }catch(error){
            if(error.code == 'ENOENT') return []
        }
    }

    static async setTasks(tasks){
        try{
            await fs.writeFile('./tasks.json', JSON.stringify(tasks), { encoding: 'utf-8' })
        }catch(error){
            console.error(error)
        }
    }

}
