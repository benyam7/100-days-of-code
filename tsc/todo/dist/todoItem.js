"use strict";
/**
 * JavaScript supports classes with constructors, properties, and methods, for example,
but features such as access control keywords (such as the public keyword) are provided by TypeScript. The
headline TypeScript feature is static typing, which allows the type of each property and parameter in the
TodoItem class to be specified
 */
Object.defineProperty(exports, "__esModule", { value: true });
// export class TodoItem {
//     public id: number;
//     public task: string;
//     public complete: boolean = false;
//     public constructor(
//         id: number,
//         task: string,
//         complete: boolean = false
//     ) {
//         this.id = id;
//         this.task = task;
//         this.complete = complete;
//     }
//     public printDetails(): void {
//         console.log(
//             `${this.id}\t${this.task}${this.complete ? "\t(complete)" : ""}`
//         )
//     }
// }
/**
 * more concise ts code
 */
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    /**TypeScript assumes that all methods and properties are public unless another access level
is used.(The public keyword is still used in the constructor because that’s how the TypeScript compiler
recognizes that the concise constructor syntax is being used) */
    printDetails() {
        console.log(`${this.id}\t${this.task}${this.complete ? "\t(complete)" : ""}`);
    }
}
exports.TodoItem = TodoItem;
