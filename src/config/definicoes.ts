import prompts from "prompts";

/**
 * Interface que define as propriedades das definições do jogo.
 * @interface Definicoes
 * @property {string} competidorNome - Nome do competidor.
 * @property {number} competidores - Número de competidores no jogo.
 * @property {boolean} canceladoDefinicoes - Indica se as definições foram canceladas pelo usuário.
 */
interface Definicoes {
    competidorNome: string; // Nome do competidor
    competidores: number; // Número total de competidores
    canceladoDefinicoes: boolean; // Flag indicando se a configuração foi cancelada
}

/**
 * Função para definir as configurações iniciais do jogo.
 * Solicita o nome do competidor e o número de competidores através de prompts.
 * Utiliza a biblioteca 'prompts' para interação com o usuário.
 * 
 * @async
 * @function definicoes
 * @returns {Promise<Definicoes>} - Retorna uma Promise que resolve com um objeto contendo as definições do jogo.
 */
export async function definicoes(): Promise<Definicoes> {
    // Inicializa a variável que indica se a configuração foi cancelada
    let canceladoDefinicoes = false;

    /**
     * Função de callback chamada quando o usuário cancela a configuração.
     * Define a variável 'canceladoDefinicoes' como true e retorna false.
     * @function onCancel
     * @returns {boolean} - Retorna false para indicar que a configuração foi cancelada.
     */
    const onCancel = () => {
        canceladoDefinicoes = true; // Marca as definições como canceladas
        return false; // Retorna false para sinalizar o cancelamento
    };

    // Solicita informações do usuário utilizando a biblioteca 'prompts'
    const { competidorNome, competidores } = await prompts([
        {
            type: 'text', // Tipo de entrada: texto
            name: 'competidorNome', // Nome do campo
            message: 'Informe seu nome:', // Mensagem a ser exibida ao usuário
            validate: (value) => value && value.trim() !== '' ? true : 'Informe o seu nome' // Validação do campo: deve ser um texto não vazio
        },
        {
            type: 'number', // Tipo de entrada: número
            name: 'competidores', // Nome do campo
            message: 'Informe o número de competidores:', // Mensagem a ser exibida ao usuário
            initial: 1, // Valor inicial sugerido
            validate: (value) => !isNaN(value) && value >= 1 && value <= 100 ? true : 'Número de competidores inválido, mínimo 1 e máximo 100' // Validação do campo: deve ser um número entre 1 e 100
        }
    ], { onCancel }); // Configura a função onCancel para ser chamada se o usuário cancelar a configuração

    // Retorna um objeto com as definições obtidas e o estado de cancelamento
    return { competidorNome, competidores, canceladoDefinicoes };
}
