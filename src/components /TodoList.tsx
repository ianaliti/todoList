import { TodoItem } from "./TodoItem"
import { ITodo } from '../types/data'
import { Option } from "../types/types";

interface ITodoListProps {
    items: ITodo[];
    toggleTodo: (id: number) => void;
    removeTodo: (id: number) => void;
    editTodo: (id: number, title: string) => void;
}


const TodoList: React.FC<ITodoListProps> = (props) => {
    const { items, toggleTodo, removeTodo, editTodo } = props;

    return <div>
        <ul>
            {
                items.map(todo => (
                    <TodoItem
                        key={todo.id}
                        toggleTodo={toggleTodo}
                        removeTodo={removeTodo}
                        editTodo={editTodo}
                        {...todo}
                    />
                ))
            }
        </ul>
    </div>
}

export {TodoList}