import c from "ansi-colors";
import { apresentacao } from "./apresentacao.js";
import { definicoes } from "./config/definicoes.js";
import { configuracoes } from "./config/index.js";
import { jogo } from "./jogo/index.js";

/**
 * Interface que define a estrutura de configuração do jogo.
 */
interface Config {
    niveis: number;
    competidorNome?: string;
    competidores?: number;
}

/**
 * Variável de configuração que armazena as definições iniciais do jogo.
 * Pode ser atualizada com os dados fornecidos pelo usuário.
 */
let config: Config | any = configuracoes();

/**
 * Função principal que executa o fluxo do jogo.
 * Inclui a apresentação inicial, definição de configurações e execução do jogo.
 */
async function main() {
    try {
        // Exibe a apresentação inicial do jogo
        apresentacao();

        // Obtém as definições do jogo, como o nome do competidor e o número de competidores
        const { competidorNome, competidores, canceladoDefinicoes } = await definicoes();

        // Verifica se as definições foram canceladas pelo usuário
        if (canceladoDefinicoes) {
            console.log("Você é muito fraco, não aguenta nada mesmo");
            process.exit();
        }

        // Atualiza a configuração com os dados fornecidos pelo usuário
        config = { ...config, competidorNome, competidores };

        // Inicia o jogo com as configurações definidas
        await jogo(config);

    } catch (e) {
        console.log("Desculpe, ocorreu um erro", e);
    }
}

// Captura o evento de pressionar Ctrl+C para encerrar o jogo
process.stdin.on('keypress', (_, key) => {
    if (key.ctrl && key.name === 'c') {
        console.log("");
        console.log(`${c.red("✖")} ${c.whiteBright("Foi precionado Ctrl+c, jogo encerrado...")}`);
        process.exit();
    }
});

// Inicia a execução do jogo
main();
