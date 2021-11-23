import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea'

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1, name: "Limpar o quarto", done: true
    },

    {
      id: 1, name: "Estudar", done: false
    },
  ]);

  const handleAddTask = (taskName: String) => {
    let newList = [...list];
    newList.push({
      id: 123,
      name: '',
      done: false
    });
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea />
        {/* Exibindo Lista */}
        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
}

export default App