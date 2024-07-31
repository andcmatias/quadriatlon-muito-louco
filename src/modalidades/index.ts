// Importa a biblioteca ansi-colors para aplicar cores ao texto
import c from "ansi-colors";

// Declara um array de modalidades com cores específicas usando ansi-colors
/**
 * Modalidades disponíveis para o jogo.
 * Cada modalidade é representada por uma string colorida.
 * 
 * @constant {string[]} Modalidade - Array contendo as modalidades com cores aplicadas.
 */
export const Modalidade = [
  `${c.magenta("Corrida")}`,    // Modalidade Corrida em cor magenta
  `${c.blue("Natacao")}`,       // Modalidade Natação em cor azul
  `${c.grey("Escalada")}`,      // Modalidade Escalada em cor cinza
  `${c.yellow("Bicicleta")}`,   // Modalidade Bicicleta em cor amarela
] as const;

/**
 * Tipo para os nomes das modalidades.
 * Representa qualquer um dos valores definidos em Modalidade.
 * 
 * @type {ModalidadeName}
 */
export type ModalidadeName = typeof Modalidade[number];

// Arte ASCII para a modalidade Corrida
/**
 * Arte ASCII representando a modalidade Corrida.
 * 
 * @constant {string} corrida - Representação visual da modalidade Corrida.
 */
const corrida =
  "            _( }     \n" +
  "   -=  _  <<  \\     \n" +
  "      `.\\__/`/\\\\  \n" +
  " -=     '--'\\\\  `  \n" +
  "      -=    //       \n" +
  "            \\)      \n";

// Arte ASCII para a modalidade Natação
/**
 * Arte ASCII representando a modalidade Natação.
 * 
 * @constant {string} natacao - Representação visual da modalidade Natação.
 */
const natacao =
  "                      .-\"\"\"-.                     \n" +
  "                     /       \\                      \n" +
  "                    ;_.-\"\"\"-._;                   \n" +
  " .,_       __,.---.-(=(o)-(o)=)-.---.,__       _,.   \n" +
  " '._'--\"```          \\   ^   /          ```\"--'_.' \n" +
  "    ``\"''~---~~%^%^.%.`._0_.'%,^%^%^~~---~''\"``    \n" +
  "    ~^~- `^-% ^~.%~%.^~-%-~.%-^.% ~`% ~-`%^`-~^~     \n" +
  "       ~^- ~^- `~.^- %`~.%~-'%~^- %~^- ~^            \n";

// Arte ASCII para a modalidade Escalada
/**
 * Arte ASCII representando a modalidade Escalada.
 * 
 * @constant {string} escalada - Representação visual da modalidade Escalada.
 */
const escalada =
  "             ^\\_          \n" +
  "         o_/^   \\         \n" +
  "         /_^     \\`_      \n" +
  "         \\/^       \\     \n" +
  "         / ^        \\`\\  \n" +
  "         ^             `\\ \n";

// Arte ASCII para a modalidade Bicicleta
/**
 * Arte ASCII representando a modalidade Bicicleta.
 * 
 * @constant {string} bicicleta - Representação visual da modalidade Bicicleta.
 */
const bicicleta =
  "   ,__o    \n" +
  " _-\\_<,   \n" +
  "(* )/'(*)  \n";

// Exporta as imagens associadas às modalidades
/**
 * Array contendo as artes ASCII para cada modalidade.
 * 
 * @constant {string[]} imagens - Array de artes ASCII representando as modalidades.
 */
export const imagens = [corrida, natacao, escalada, bicicleta];
