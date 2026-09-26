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
    B --> C{loop}
    C -->|yes| D[process task]
    D --> E[next task]
    E --> C
    C -->|no| F[output]
    F --> G[end]
`;

module.exports = answer.trim();