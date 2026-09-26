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
    B --> C{valid selection?}
    C -->|no - loop| B
    C -->|yes| D[input]
    D --> E{payment valid?}
    E -->|no - loop| D
    E -->|yes| F[dispense product]
    F --> G[output]
    G --> H[complete]
    H --> I[end]
`;

module.exports = answer.trim();