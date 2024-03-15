import { Container } from "react-bootstrap";
import { TodoProvider } from "@/components/TodoContext";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <div>
      <Container>
        <TodoProvider>
          <div className="App">
            <h1>TO DO List</h1>
            <TodoList />
          </div>
        </TodoProvider>
      </Container>
    </div>
  );
}
