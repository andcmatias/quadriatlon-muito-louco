import prompts from "prompts";

/**
 * Faz uma pergunta ao usuário e retorna a resposta.
 * 
 * Esta função utiliza a biblioteca `prompts` para fazer uma pergunta ao usuário em 
 * forma de um prompt de escolha "Sim" ou "Não". A função retorna uma `Promise` que 
 * resolve para `true` se o usuário selecionar "Sim" ou `false` caso contrário.
 *
 * @param {string} pergunta - A pergunta a ser feita ao usuário.
 * @returns {Promise<boolean>} - A resposta do usuário, onde `true` representa "Sim" e 
 * `false` representa "Não".
 *
 * @example
 * // Faz uma pergunta ao usuário e exibe a resposta
 * const resposta = await perguntar("Você deseja continuar?");
 * console.log(resposta); // true ou false
 */
export async function perguntar(pergunta: string): Promise<boolean> {
  // Utiliza a biblioteca `prompts` para apresentar uma escolha ao usuário
  const { resposta } = await prompts(
    {
      type: 'toggle', // Tipo de prompt que permite alternar entre duas opções
      name: 'resposta', // Nome da propriedade que armazenará a resposta
      message: pergunta, // Mensagem que será exibida para o usuário
      initial: false, // Valor inicial da escolha (false corresponde a "Não")
      active: 'Sim', // Texto exibido para a opção ativa
      inactive: 'Não', // Texto exibido para a opção inativa
    }
  );

  // Retorna a resposta do usuário ou `false` se a resposta for indefinida
  return resposta || false;
}
