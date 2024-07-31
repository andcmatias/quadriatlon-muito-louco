import c from "ansi-colors";

/**
 * Nome do jogo formatado com cores ANSI.
 *
 * A constante `nomeJogo` representa o nome do jogo "Quadriatlon Muito Louco", 
 * onde cada parte do nome é estilizada com diferentes cores e estilos usando a 
 * biblioteca `ansi-colors` para formatação de texto no terminal.
 *
 * - "Quadriatlon" é colorido em amarelo.
 * - "Muito" é exibido em vermelho e negrito.
 * - "Louco" é colorido em ciano.
 *
 * @example
 * // Exibe o nome do jogo estilizado no console
 * console.log(nomeJogo);
 */
export const nomeJogo = `${c.yellow(`Quadriatlon`)} ${c.red.bold('Muito')} ${c.cyan('Louco')}`;
