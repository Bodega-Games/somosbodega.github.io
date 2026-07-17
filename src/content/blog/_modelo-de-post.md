---
# ═══════════════════ MODELO DE POST DA CADERNETA ═══════════════════
# Como usar:
#   1. Copie este arquivo (não escreva nele — ele é o gabarito).
#   2. Renomeie: minúsculas, sem acento, com hífens. O nome vira a URL.
#      Ex.: "balanco-da-semana.md" → somosbodega.github.io/blog/balanco-da-semana/
#   3. Preencha os campos abaixo e escreva. Depois: git push. Só isso.
# Linhas começando com # são comentários — o site não as lê.
# Arquivos começando com _ (como este) NUNCA são publicados.
# ═══════════════════════════════════════════════════════════════════
titulo: "Escreva o título aqui"
descricao: "Uma linha de resumo — aparece na listagem da Caderneta e no Google."
data: 2026-07-20
tags: ["bastidores"]
---

O primeiro parágrafo é a isca: vá direto ao ponto, do jeito que se conversa
no balcão. Parágrafos são separados por uma linha em branco — sem ela, o
texto gruda num parágrafo só.

## Um subtítulo divide o assunto

Use `##` pra abrir uma nova seção (fica grande, em Barlow Condensed). Dentro
do texto dá pra usar **negrito com dois asteriscos**, *itálico com um*, e
[links assim](https://www.instagram.com/somos.bodega) — colchetes no texto,
parênteses no endereço.

### Um subtítulo menor, se precisar

O `###` é o degrau abaixo — bom pra detalhar algo dentro da seção.

Listas com hífen:

- um item
- outro item
- pode ter **negrito** e [link](https://somosbodega.github.io) dentro

Listas numeradas, quando a ordem importa:

1. primeiro passo
2. segundo passo
3. terceiro passo

> Uma citação usa o sinal de maior. Serve pra destacar uma frase — sai com
> a barra dourada da casa na lateral.

Código no meio da frase vai entre crases: `Jogo.simular_rodada()`. Bloco de
código usa três crases e o nome da linguagem:

```gdscript
# Um trecho do OnzeFoot, por exemplo:
func luz_acesa() -> bool:
    return true  # sempre
```

Pra colocar **imagem**: salve o arquivo em `public/imagens/` no projeto e
chame assim (o texto entre colchetes descreve a imagem pra quem não vê):

![Descrição da imagem](/imagens/nome-do-arquivo.png)

---

Os três hífens acima criam uma linha divisória, boa pra fechar. Antes de
publicar, confira: nome do arquivo sem acento? `titulo`, `descricao` e
`data` preenchidos? Então `git push` — a Caderneta atualiza sozinha.
