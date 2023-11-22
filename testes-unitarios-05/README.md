# testes-unitarios-05: Vou fingir que vou gerar um protocolo pra você

- Isolar uma unidade de código nem sempre é tão fácil quanto parece.
- Isso porque tendemos a modularizar o nosso código para reaproveitá-lo.
- Mas não há nada a temer, com os mocks do Jest podemos resolver este problema.
- ➡️ O código de geração de protocolo usa a biblioteca `uuid` para gerar os protocolos no arquivo `protocols-generator.ts`. Faça um teste unitário e use um mock do `uuid` ao invés da implementação verdadeira.