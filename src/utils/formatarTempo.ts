/**
 * Formata um tempo em minutos para o formato de horas e minutos (hh:mm).
 *
 * @param {number} tempoEmMinutos - O tempo em minutos que será formatado.
 * @returns {string} - O tempo formatado no formato "hh:mm".
 *
 * @example
 * // Retorna "02:05"
 * formatarTempo(125);
 */
export function formatarTempo(tempoEmMinutos: number): string {
  // Calcula o número de horas inteiras
  const horas = Math.floor(tempoEmMinutos / 60);

  // Calcula o número de minutos restantes
  const minutos = tempoEmMinutos % 60;

  // Retorna a string formatada no formato "hh:mm"
  return `${horas.toString().padStart(2, '0')}:${minutos.toString().padStart(2, '0')}`;
}
