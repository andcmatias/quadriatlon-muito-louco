import c from "ansi-colors";
import { Itens, itens } from "../itens/index.js";
import { Modalidade } from "../modalidades/index.js";
import { IEncontro } from "../encontros/index.js";
import { perguntar } from "../utils/perguntar.js";
import { selecionarItem } from "../utils/selecionarItem.js";

/**
 * Interface que define as propriedades de uma modalidade.
 * @interface Modalidades
 * @property {number} nivel - O nível atual da modalidade.
 * @property {number} tempo - O tempo gasto na modalidade.
 * @property {number} distancia - A distância percorrida na modalidade.
 */
interface Modalidades {
    nivel: number;
    tempo: number;
    distancia: number;
}

/**
 * Classe que representa um competidor no jogo.
 */
export class Competidor {
    nome: string; // Nome do competidor
    modalidades: Modalidades[]; // Lista de modalidades do competidor
    itens: number[]; // Lista de itens do competidor
    itensUtilizados: number; // Número de itens utilizados
    energia: number; // Energia atual do competidor
    tipo: "jogador" | "computador"; // Tipo de competidor (jogador ou computador)
    historico: string[]; // Histórico de eventos do competidor
    perdeu: boolean; // Indica se o competidor perdeu
    tempoTotal: number; // Tempo total gasto pelo competidor
    distanciaTotal: number; // Distância total percorrida pelo competidor
    niveis: number; // Número de níveis de cada modalidade

    /**
     * Construtor da classe Competidor.
     * @param {string} nome - Nome do competidor.
     * @param {"jogador" | "computador"} tipo - Tipo de competidor.
     * @param {number} niveis - Número de níveis.
     */
    constructor(nome: string, tipo: "jogador" | "computador", niveis: number = 1) {
        this.nome = nome;
        this.modalidades = [];
        this.itens = [];
        this.itensUtilizados = 0;
        this.energia = niveis * 4; // Energia inicial baseada no número de níveis * 4
        this.tipo = tipo;
        this.historico = [];
        this.perdeu = false;
        this.tempoTotal = 0;
        this.distanciaTotal = 0;
        this.niveis = niveis;
    }

    /**
     * Inicia uma modalidade para o competidor.
     * @param {number} modalidade - Índice da modalidade a ser iniciada.
     */
    iniciaModalidade(modalidade: number) {
        this.modalidades[modalidade] = { nivel: 1, tempo: 0, distancia: 0 };
    }

    /**
     * Adiciona um item ao competidor e registra no histórico.
     * @param {number} item - Índice do item a ser adicionado.
     * @param {boolean} inicio - Indica se o item foi adicionado no início do jogo.
     */
    adicionarItem(item: number, inicio: boolean = false) {
        this.itens.push(item);
        let msg = "";
        if (inicio) {
            msg = `${this.nome} ganhou o item ${Itens[item]} no inicio do jogo`;
        } else {
            msg = `${this.nome} encontrou o item ${Itens[item]}`;
        }

        msg = c.green(msg); // Aplica a cor verde à mensagem
        this.historico.push(msg); // Adiciona a mensagem ao histórico
        if (this.tipo === "jogador") {
            console.log(msg); // Exibe a mensagem no console se for um jogador
        }
    }

    /**
     * Usa um item na modalidade especificada.
     * @param {number} item - Índice do item a ser usado.
     * @param {number} modalidade - Índice da modalidade onde o item será usado.
     * @returns {number} - Valor do efeito do item.
     */
    usarItem(item: number, modalidade: number): number {
        const idItem = this.itens[item]; // Obtém o ID do item
        const itemUtilizado = itens[idItem]; // Obtém o item detalhado

        const efeito = itemUtilizado.efeitos[modalidade]; // Efeito do item para a modalidade
        const chave = Object.keys(efeito)[0]; // Obtém a chave do efeito
        const valor = efeito[chave]; // Obtém o valor do efeito
        const msg = c.blue(`${this.nome} usou ${Itens[idItem]} na modalidade ${Modalidade[modalidade]}: ${chave}`);
        this.historico.push(msg); // Adiciona a mensagem ao histórico
        if (this.tipo === "jogador") {
            console.log(msg); // Exibe a mensagem no console se for um jogador
        }

        this.itens.splice(item, 1); // Remove o item da lista de itens
        this.itensUtilizados += 1; // Incrementa o contador de itens utilizados
        return valor; // Retorna o valor do efeito do item
    }

    /**
     * Permite ao competidor selecionar um item para usar na modalidade atual.
     * @param {number} modalidade - Índice da modalidade atual.
     * @returns {Promise<number>} - Valor do efeito do item usado.
     */
    async selecionarItem(modalidade: number): Promise<number> {
        let avancoNivel = 0;
        let utilizado = false;
        const pergunta = "Você possui itens, deseja utilizar?";
        let resposta = false;
        if (this.tipo == "jogador") {
            resposta = await perguntar(pergunta); // Pergunta ao jogador se deseja usar um item
        } else {
            resposta = Math.random() > 0.5; // Computador decide aleatoriamente
        }
        if (resposta) {
            if (this.tipo == "jogador") {
                const itemIndex = await selecionarItem(this.itens); // Seleciona um item
                if (itemIndex >= 0) {
                    avancoNivel = this.usarItem(itemIndex, modalidade); // Usa o item selecionado
                    utilizado = true;
                }
            } else {
                const itemIndex = Math.floor(Math.random() * this.itens.length); // Seleciona um item aleatório
                avancoNivel = this.usarItem(itemIndex, modalidade); // Usa o item selecionado
                utilizado = true;
            }

            if (utilizado && this.tipo == "jogador") {
                if (this.modalidades[modalidade].nivel == 1 && avancoNivel < 0) {
                    console.log(c.whiteBright(`😐 Este item não serviu para nada`));
                } else {
                    if (avancoNivel < 0) {
                        console.log(c.red(`🙁 Isso te prejudicou muito e você regrediu ${avancoNivel} ${avancoNivel < -1 ? "niveis" : "nivel"}`));
                    } else if (avancoNivel == 0) {
                        console.log(c.whiteBright(`😝 Isso não serviu para nada`));
                    } else {
                        console.log(c.blue(`😀 Isso te ajudou muito e você avançou ${avancoNivel} ${avancoNivel > 1 ? "niveis" : "nivel"}`));
                    }
                }
                console.log("");
            }
        } else {
            if (this.tipo == "jogador") {
                console.log(""); // Adiciona uma linha em branco se for um jogador
            }
        }
        return avancoNivel; // Retorna o valor do avanço de nível
    }

    /**
     * Lida com encontros durante a modalidade.
     * @param {IEncontro} encontro - Encontro ocorrido.
     * @param {number} modalidade - Índice da modalidade atual.
     * @returns {Promise<number>} - Valor do avanço de nível resultante do encontro.
     */
    async encontros(encontro: IEncontro, modalidade: number): Promise<number> {
        let avancoNivel: any = 1;
        let acao = false;

        if (["item", "bom"].includes(encontro.tipo)) {
            if (encontro.evento) {
                const historia = encontro.historias[modalidade];
                const pergunta = encontro.evento.pergunta;
                let resposta = false;
                if (this.tipo == "jogador") {
                    console.log(historia); // Exibe a história do encontro se for um jogador
                    resposta = await perguntar(pergunta); // Pergunta ao jogador sobre o encontro
                } else {
                    resposta = Math.random() > 0.5; // Computador decide aleatoriamente
                }

                if (resposta) {
                    if (encontro.tipo == "item") {
                        const itemIndex = encontro.evento?.acao?.ganha as number;
                        this.adicionarItem(itemIndex); // Adiciona o item ao competidor
                    } else {
                        if (encontro.evento.acao.nivel) {
                            avancoNivel = encontro.evento.acao.nivel; // Atualiza o avanço de nível
                        }
                        acao = true;
                    }
                }
            }
        } else {
            if (encontro.acao) {
                avancoNivel = encontro.acao.nivel; // Atualiza o avanço de nível
                if (this.tipo == "jogador") {
                    console.log(encontro.historias[modalidade]); // Exibe a história do encontro se for um jogador
                }
                acao = true;
            }
        }

        if (acao && this.tipo == "jogador") {
            if (this.modalidades[modalidade].nivel == 1 && avancoNivel < 0) {
                console.log(c.whiteBright("😐 Isso te prejudicou um pouco e continuou no mesmo nível"));
            } else {
                if (avancoNivel < 0) {
                    console.log(c.red(`🙁 Isso te prejudicou muito e você regrediu ${avancoNivel} ${avancoNivel < -1 ? "niveis" : "nivel"}`));
                } else if (avancoNivel == 0) {
                    console.log(c.yellow("😐 Isso te prejudicou um pouco e continuou no mesmo nível"));
                } else {
                    console.log(c.green(`😃 Isso te ajudou muito e você avançou ${avancoNivel} ${avancoNivel > 1 ? "niveis" : "nivel"}`));
                }
            }
        }

        return avancoNivel; // Retorna o valor do avanço de nível
    }

    /**
     * Atualiza o nível, tempo e distância do competidor para uma modalidade.
     * @param {number} modalidade - Índice da modalidade atual.
     * @param {number} nivel - Nível para o qual o competidor vai.
     * @param {boolean} item - Indica se foi utilizado um item.
     */
    atualizarNivel(modalidade: number, nivel: number, item: boolean = false) {
        let nivelAvancar = nivel;
        if (nivel > this.niveis) {
            nivelAvancar = this.niveis; // Limita o nível ao máximo disponível
        }
        this.modalidades[modalidade].tempo += 10; // Adiciona 10 minutos por nível
        if (nivelAvancar > this.modalidades[modalidade].nivel) {
            const diferenca = nivelAvancar - this.modalidades[modalidade].nivel;
            this.modalidades[modalidade].distancia += (modalidade === 1 || modalidade === 2 ? 100 : 1000) * (diferenca); // Atualiza a distância com base na modalidade
        }
        this.modalidades[modalidade].nivel = nivel; // Atualiza o nível da modalidade
        if (!item) {
            this.energia -= 1; // Reduz a energia se não foi utilizado um item
        }
        if (this.energia <= 0) {
            this.perdeu = true; // Marca como perdido se a energia for zero ou negativa
        }
    }

    /**
     * Atualiza o tempo total e a distância total do competidor.
     * @param {number} modalidade - Índice da modalidade atual.
     */
    atualizarTempoDistanciaTotal(modalidade: number) {
        this.tempoTotal += this.modalidades[modalidade].tempo; // Adiciona o tempo da modalidade ao tempo total
        this.distanciaTotal += this.modalidades[modalidade].distancia; // Adiciona a distância da modalidade à distância total
        this.modalidades[modalidade].nivel = this.niveis; // Atualiza o nível da modalidade para o máximo
    }
}
