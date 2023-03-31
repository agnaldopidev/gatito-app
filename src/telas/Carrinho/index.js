import { FlatList } from "react-native";
import { Item } from "./Item";
import { TelaPadrao } from "../../components/TelaPadrao";
import {StatusCarrinho} from '../../components/StatusCarrinho';

export function Carrinho() {
  const lista = [
    {
      id: 1,
      nome: 'Banho',
      preco: 85.9,
      descricao: 'Fazer uma de cadas vez',
      quantidade:1
    },
    {
      id: 2,
      nome: 'Corte',
      preco: 50.5,
      descricao: 'Corte básico',
      quantidade:2
    },
    {
      id: 3,
      nome: 'Vacina',
      preco: 256.25,
      descricao: 'Aplicar 2 doses',
      quantidade:1
    }
  ];

  const total = lista.reduce((soma, {preco, quantidade}) => soma + (preco * quantidade), 0);

  return <TelaPadrao>
    <StatusCarrinho total={total} />
    <FlatList
      data={lista}
      keyExtractor={({ id }) => String(id)}
      renderItem={({ item }) => <Item {...item} />}
    />
  </TelaPadrao>

}
