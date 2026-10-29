# Simple Factory

OBS: este Design Pattern não é um padrão formal do GoF. Porém, ele é um introdução aos Factory Method e Abstract Factory

## Contexto

Em um sistema qualquer, havia a necessidade de notificar o usuário quando uma ação era realizada.

## Problema

No início, o usuário era notificado apenas via e-mail. Porém, com o tempo, foi necessário adicionar novos canais de notificação: SMS e Discord. A implementação acumulou condicionais (if/else) que selecionavam e instanciavam a implementação de notificação adequada.

Isso causou alguns problemas: - Acoplamento entre o fluxo principal da aplicação e as classes concretas, tornando a manutenção mais trabalhosa; - A lógica de seleção e a lógica de execução das notificações ficam misturadas, dificultando a separação das responsabilidades.

## Solução

Criar uma nova classe que possui a função de centralizar a lógica da seleção e criação das notificações.

O Design Pattern **Simple Factory** recebe uma identificação do tipo de notificação selecionada e retorna a implementação concreta correspondente, permitindo que o fluxo principal trabalhe com as classes de notificação (ou melhor, com a interface `Notification` comum entre elas), sem conhecer os detalhes de implementação de cada um.

## Vantagens

- Evita o acoplamento entre a criação e seleção das classes com a sua execução;
- **Princípio de responsabilidade única**: A lógica da criação e seleção das classes ficam em um local único, isolado da execução das mesmas, facilitando a manutenção e reutilizando-a em outros locais.

## Desvantagens

- A quantidade de condicionais cresce dentro da fábrica, especialmente com muitas implementações diferentes. Isso se torna difícil de manter;
- Mesmo que centralizado, isso quebra o Open/Closed Principle, pois a fábrica fica aberta para modificações cada vez que uma nova classe surja;
