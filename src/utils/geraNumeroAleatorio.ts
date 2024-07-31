/**
 * Gera um número aleatório inteiro entre os valores mínimo e máximo (inclusive).
 *
 * @param {number} min - O valor mínimo (inclusive) do intervalo de números aleatórios.
 * @param {number} max - O valor máximo (inclusive) do intervalo de números aleatórios.
 * @returns {number} - Um número aleatório inteiro entre `min` e `max`, ambos inclusivos.
 *
 * @example
 * // Retorna um número aleatório entre 1 e 10, inclusive
 * geraNumeroAleatorio(1, 10);
 */
export function geraNumeroAleatorio(min: number, max: number): number {
  // Arredonda o valor mínimo para o inteiro mais próximo acima
  min = Math.ceil(min);

  // Arredonda o valor máximo para o inteiro mais próximo abaixo
  max = Math.floor(max);

  // Gera um número aleatório no intervalo [min, max], ambos inclusivos
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
