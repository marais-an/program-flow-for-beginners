/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[start] --> B[input]
    B --> C{home}
    C -->|green| D[output]
    C -->|yellow| E[output]
    C -->|red| F[output]
    D --> G[end]
    E --> G
    F --> G
`;

module.exports = answer.trim();