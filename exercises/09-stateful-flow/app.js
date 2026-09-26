/*
Edit only the Mermaid flow inside `answer`.
Keep this shape: const answer = `...`; module.exports = answer.trim();
---
Edita solo el flujo Mermaid dentro de `answer`.
Manten esta forma: const answer = `...`; module.exports = answer.trim();
*/
const answer = `
flowchart TD
    A[start] --> B[locked]
    B -->|event: coin| C[unlocked]
    B -->|event: push| B
    C -->|event: push| D[output]
    C -->|event: coin| C
    D --> B
    B --> E[end]
`;

module.exports = answer.trim();