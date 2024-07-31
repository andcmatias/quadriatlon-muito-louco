/**
 * Função de configuração inicial do jogo.
 * Define o número de níveis baseado na variável de ambiente `NIVEIS`.
 * Se a variável de ambiente não estiver definida ou contiver um valor inválido,
 * será configurado o nível como 1.
 * 
 * @function configuracoes
 * @returns {Object} - Objeto de configuração contendo o número de níveis.
 * @throws {string} - Lança uma exceção se o número de níveis for inválido (menor ou igual a 0, ou maior que 10).
 */
export function configuracoes(): object {
    // Obtém a variável de ambiente 'NIVEIS', ou define "1" se não estiver definida
    const { NIVEIS = "1" } = process.env;

    // Converte a variável de ambiente para um número inteiro
    const niveis = parseInt(NIVEIS, 10) || 0;

    // Verifica se o número de níveis é válido
    if (niveis <= 0 || niveis > 10) {
        // Lança uma exceção se o número de níveis for inválido
        throw "Configurações dos níveis inválida";
    }

    // Retorna um objeto contendo o número de níveis
    return {
        niveis
    };
}
