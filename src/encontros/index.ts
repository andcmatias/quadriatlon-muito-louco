import { EncontrosBons } from "./EncontrosBons.js";
import { EncontrosRuins } from "./EncontrosRuins.js";
import { EncontrosItens } from "./EncontrosItens.js";
import { ItemName } from "../itens/index.js";

/**
 * Interface que define a estrutura da ação associada a um encontro.
 * 
 * @interface
 */
interface IAcao {
    /**
     * Descrição da ação que pode ser executada durante o encontro.
     * 
     * @type {string}
     */
    descricao?: string;

    /**
     * Número de níveis a serem alterados como resultado da ação.
     * 
     * @type {number}
     */
    nivel?: number;

    /**
     * Índice do item que o jogador ganha como resultado da ação.
     * 
     * @type {number}
     */
    ganha?: number;
}

/**
 * Interface que define a estrutura do evento associado a um encontro.
 * 
 * @interface
 */
interface IEvento {
    /**
     * Pergunta que será feita ao jogador durante o evento.
     * 
     * @type {string}
     */
    pergunta: string;

    /**
     * Ação a ser executada com base na resposta do jogador.
     * 
     * @type {IAcao}
     */
    acao: IAcao;
}

/**
 * Tipo que define os diferentes tipos de encontros que podem ocorrer.
 * 
 * @typedef {"bom" | "ruim" | "item"} ITipo
 */
export type ITipo = "bom" | "ruim" | "item";

/**
 * Interface que define a estrutura de um encontro no jogo.
 * 
 * @interface
 */
export interface IEncontro {
    /**
     * Tipo do encontro, indicando se é um encontro "bom", "ruim" ou um "item".
     * 
     * @type {ITipo}
     */
    tipo: ITipo;

    /**
     * Nome do item associado ao encontro, se aplicável.
     * 
     * @type {ItemName}
     */
    nome?: ItemName;

    /**
     * Lista de histórias associadas ao encontro.
     * 
     * @type {string[]}
     */
    historias: string[];

    /**
     * Ação que pode ser executada durante o encontro, se aplicável.
     * 
     * @type {IAcao}
     */
    acao?: IAcao;

    /**
     * Evento que pode ocorrer durante o encontro, se aplicável.
     * 
     * @type {IEvento}
     */
    evento?: IEvento;
}

/**
 * Array que combina todos os encontros do jogo, incluindo encontros bons, ruins e itens.
 * 
 * @constant {IEncontro[]} Encontros - Array que contém todos os encontros possíveis no jogo.
 */
export const Encontros: IEncontro[] = [...EncontrosBons, ...EncontrosItens, ...EncontrosRuins];
