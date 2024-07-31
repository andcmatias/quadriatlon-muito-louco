import c from "ansi-colors";
import { nomeJogo } from "../utils/nomeJogo.js";
import { Competidor } from "../competidor/index.js";
import { Itens } from "../itens/index.js";
import { competidorJogar } from "./competidorJogar.js";
import { nomesCompetidores } from "../config/nomesCompetidores.js";
import { geraNumeroAleatorio } from "../utils/geraNumeroAleatorio.js";
import { formatarTempo } from "../utils/formatarTempo.js";

/**
 * Interface que define a configuração para o jogo.
 * 
 * @interface
 */
interface Config {
  niveis: number;           // Número de níveis no jogo
  competidorNome: string;   // Nome do competidor principal (jogador)
  competidores: number;     // Número total de competidores, incluindo o jogador
}

/**
 * Função principal que gerencia a execução do jogo.
 * 
 * @param {Config} config - Configuração do jogo, contendo níveis, nome do competidor e quantidade de competidores.
 * 
 * @returns {Promise<void>} - Retorna uma Promise que resolve quando o jogo termina.
 * 
 * @async
 */
export async function jogo(config: Config): Promise<void> {
  const { niveis, competidorNome, competidores } = config;

  // Inicialização do jogador
  const jogador = new Competidor(competidorNome, "jogador", niveis);

  // Cria competidores computador
  const competidoresComputador = Array.from(
    { length: competidores - 1 },
    (_, i) => new Competidor(nomesCompetidores[i % nomesCompetidores.length], "computador", niveis)
  );

  // Combina o jogador e os competidores computador em uma lista
  const todosCompetidores = [jogador, ...competidoresComputador];

  console.log(`Inicio do ${nomeJogo} com ${todosCompetidores.length} competidores`);
  console.log("");

  // Lógica do jogo
  for (let competidor of todosCompetidores) {
    // Distribuição inicial de itens para os competidores
    const itemIndex = geraNumeroAleatorio(1, Itens.length) - 1;
    competidor.adicionarItem(itemIndex, true);

    // Gerencia o jogo para o competidor
    await competidorJogar(competidor, niveis);
  }

  // Filtra competidores que não perderam
  const competidoresFinalizaram = todosCompetidores.filter(competidor => !competidor.perdeu);

  console.log(`Fim do ${nomeJogo} com ${competidoresFinalizaram.length} competidores que finalizaram`);
  console.log("");

  // Ordenação dos competidores com base em diversos critérios
  todosCompetidores.sort((a, b) => {
    if (a.perdeu && !b.perdeu) return 1;  // Perdedor vem depois do vencedor
    if (!a.perdeu && b.perdeu) return -1; // Vencedor vem antes do perdedor
    if (a.perdeu && b.perdeu) return a.modalidades.length - b.modalidades.length; // Ordena por número de modalidades jogadas

    // Ordena por tempo total, energia, itens utilizados e distância total
    return a.tempoTotal - b.tempoTotal ||
      b.energia - a.energia ||
      a.itensUtilizados - b.itensUtilizados ||
      a.distanciaTotal - b.distanciaTotal;
  });

  // Mensagens Personalizadas baseadas na classificação do jogador
  const jogadorIndex = todosCompetidores.findIndex(c => c.tipo === "jogador");
  const jogadorCompetidor = todosCompetidores[jogadorIndex];

  const historiasFinal = [
    c.green(`Parabéns, campeão! Você conquistou a vitória no ${nomeJogo}!`),
    c.blueBright("Ótimo trabalho! Você chegou em segundo lugar e mostrou grande habilidade."),
    c.yellow("Bom esforço! Você chegou em terceiro lugar e pode se orgulhar do seu desempenho."),
    c.magenta("Melhor sorte na próxima vez! Você não conseguiu chegar ao pódio, mas a experiência foi valiosa.")
  ];

  if (jogadorCompetidor.perdeu) {
    console.log(c.red(`${jogadorCompetidor.nome}: Você perdeu! É muito ruim ainda, vai treinando que consegue`));
  } else {
    const mensagem = jogadorIndex < 3 ? historiasFinal[jogadorIndex] : historiasFinal[3];
    console.log(`${jogadorCompetidor.nome}: ${mensagem}`);
  }

  console.log("");

  // Exibe a tabela com a classificação dos competidores
  console.table(todosCompetidores.map((c, index) => ({
    "Classificação": c.perdeu ? "Perdedor" : index + 1,
    "Nome": c.nome,
    "Tempo(hh:mm)": formatarTempo(c.tempoTotal),
    "Distância(mt)": c.distanciaTotal
  })));
}
