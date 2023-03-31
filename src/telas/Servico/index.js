import { FlatList } from "react-native";
import { Item } from "./Item";
import { TelaPadrao } from '../../components/TelaPadrao';

export function Servico() {
  const lista = [
    {
      id: 1,
      nome: 'Banho',
      preco: 85.9,
      descricao: 'Fazer uma de cadas vez'
    },
    {
      id: 2,
      nome: 'Corte',
      preco: 50.5,
      descricao: 'Corte básico'
    },
    {
      id: 3,
      nome: 'Vacina',
      preco: 256.25,
      descricao: 'Aplicar 2 doses'
    }
  ];

  return <TelaPadrao>
    <FlatList
      data={lista}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => <Item {...item} />}
    />
  </TelaPadrao>

}
