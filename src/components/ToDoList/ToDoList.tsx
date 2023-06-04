import { ToDoListItem } from "./ToDoListItem/ToDoListItem"
import './ToDoList.scss'
import { ToDo } from "../../models/todo-item"

export const ToDoList = (props: { todos: ToDo[], updateToDo: Function, deleteToDo: Function }) => {
    const ckeckedList = () => {
        return props.todos
            .filter((item) => !item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    const unCkeckedList = () => {
        return props.todos
            .filter((item) => item.isDone)
            .map((item) => {
                return (
                    <ToDoListItem
                        toDoItem={item}
                        key={item.id}
                        updateToDo={props.updateToDo}
                        deleteToDo={props.deleteToDo}
                    />
                )
            })
    }

    return (
        <div className="todo-container">
            <ul className="todo-list failed">
                {ckeckedList()}
            </ul>
            <ul className="todo-list completed">
                {unCkeckedList()}
            </ul>
        </div>
    )
}