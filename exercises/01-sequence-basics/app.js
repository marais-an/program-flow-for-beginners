/*
Replace the contents of the `answer` string literal with your Mermaid diagram.

Keep this format: 
    const answer = `...`; 
    module.exports = answer.trim();
---
Reemplaza el contenido del literal de cadena `answer` con tu diagrama Mermaid.

Mantén este formato:
    const answer = `...`;
    module.exports = answer.trim();
*/

const answer = `
flowchart TD
    A[start] --> B[Hervir agua]
    B --> C[Preparar cafe]
    C --> D[Servir cafe]
    D --> E[end]
`;

module.exports = answer.trim();