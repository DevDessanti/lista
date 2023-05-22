import { PROJETO } from "./Api";

export default {

  /**
   *  
   * @param {*} data
   */
  async produtos(data) {
    return await PROJETO.get("planilha/", JSON.stringify(data));
  },

  async incluirProduto(data) {
    return await PROJETO.post("planilha/", data);
  },

  async deletarProduto(id) {
    return await PROJETO.delete("planilha/"+ id);
  },

  // async alterarTarefa(id, tarefa, descricao, responsavel) {
  //   return await PROJETO.put("atualizar/tarefa/"+ id, {
  //     tarefa: tarefa,
  //     descricao: descricao,
  //     responsavel: responsavel,
  //   });
  // },

};