import {TodoItem} from './todoItem'

export class TodoCollection {
    private nextId: number = 1
    /**
     * TypeScript supports generic types, which are placeholders for types that are resolved when an object is
        created
     */
    private itemMap = new Map<number, TodoItem>()


    constructor (public userName: string, public todoItems: TodoItem[] = []) {
        // set the itemMap with the new item
        todoItems.forEach(item => this.itemMap.set(item.id, item))
    }

    addTodo(task: string) : number {
        while(this.getTodoById(this.nextId)) {
            this.nextId++
        }

        // this.todoItems.push(
        //     new TodoItem(this.nextId, task)
        // )
        this.itemMap.set(this.nextId, new TodoItem(this.nextId, task))
        return this.nextId
    }

    getTodoById(id: number) : TodoItem {
        // return this.todoItems.find(item => item.id === id)
        return this.itemMap.get(id)
    }

    getTodoItems(includeComplete: boolean) : TodoItem[] {
        return [...this.itemMap.values()]
                .filter(item => includeComplete || !item.complete)
    }

    markComplete(id: number, complete: boolean) {
        const todoItem = this.getTodoById(id)
        if(todoItem) {
            todoItem.complete = complete
        }
    }
    // ON PAGE 14
}