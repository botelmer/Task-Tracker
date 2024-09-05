import fs from 'fs/promises'

export class NextIdModel {
    static async getNextId(){
        try{
            const id = await fs.readFile('./autoIncrement.txt', { encoding: 'utf-8' })
            return parseInt(id)
        }catch(error){
            if(error.code == 'ENOENT'){
                await fs.writeFile('./autoIncrement.txt', '0', { encoding: 'utf-8' })
                return 1
            }
        }
    }

    static async setNextId(id){
        try{
            await fs.writeFile('./autoIncrement.txt', id.toString(), { encoding: 'utf-8' })
        }catch(error){
            console.error(error)
        }
    }
}