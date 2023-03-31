import React from "react";
import { TextInput } from "react-native";
import estiloPadrao from '../../estilos/Campo';


export function CampoInteiro({ valor, acao, estilos }) {
  const valorTexto = String(valor);
  const atualiza = (novoValor, acaoRetorno) => {
    const verificaInteiro = novoValor.match(/^[0-9]*$/);
    if (!verificaInteiro) return;

    const removeZeroEsquerda = novoValor.replace(/^(0)(.+)/, '$2');
    acaoRetorno(removeZeroEsquerda)

  };

  return <TextInput
    style={[estiloPadrao.campo, estilos]}
    value={valorTexto}
    selectTextOnFocus
    removeClippedSubviews={false}
    keyboardType="number-pad"
    onChangeText={(novoValor) => atualiza(novoValor, acao)}
  />
}