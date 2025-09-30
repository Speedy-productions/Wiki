---
title: Definición de Ready y Done
---

# Definición de Ready (DoR) y Done (DoD)

Este documento define cuándo una historia está lista para entrar al sprint (DoR) y cuándo está realmente terminada (DoD), y las aplica a nuestras historias del Sprint Backlog y del Product Backlog.  
Se alinea con: ISO/ECMA C#, Microsoft Coding Conventions, StyleCop Analyzers y Unity Best Practices.

---

## 📌 Definición de Ready (DoR)

Una historia entra al sprint solo si cumple todo lo siguiente.

### DoR — Global
- Valor/objetivo en 1 frase (para quién / qué / por qué).
- Criterios de aceptación en Given–When–Then (≥ 3 casos + 1 edge/error).
- Alcance acotado (incluye / excluye).
- Dependencias resueltas (arte, backend, input, escenas, datos).
- Rendimiento: objetivo 60 FPS (mín. 30).
- Localización: claves de texto listadas (sin hardcode).
- Riesgos + mitigación breve.
- Estimación (puntos) y tamaño realizable en 1 sprint.

### DoR — Minijuego
- Loop descrito (inicio → reto → éxito/fallo → recompensa/salida).
- Assets mínimos listos o placeholders validados.
- Input mapping (teclado/mando) definido.

### DoR — Backend
- Seguridad: autenticación, firma, expiración y rate limiting.
- Entorno de pruebas (mock/staging) disponible con datos semilla.

### DoR — UI/UX
- Layouts/componentes listados; flujos de navegación definidos.
- Accesibilidad: foco, contraste, tamaños, navegación con mando/teclado.

### DoR — Multijugador
- Autoridad (host/servidor), sincronización y tolerancia a lag.
- Reglas de sala/partida (máx. jugadores, lobby, matchmaking/local co-op).

---

## ✅ Definición de Done (DoD)

Una historia está terminada solo si cumple todo lo siguiente.

### DoD — Global
- Código C# conforme a Microsoft Conventions y StyleCop sin warnings nuevos.
- Tests (EditMode/PlayMode) pasan; cobertura mínima acordada para lógica.
- Perf: cumple budgets; GC/frame ~ 0 en gameplay crítico.
- PR revisado y aprobado; CI (Unity Builder) verde.
- Logs/errores: sin spam; mensajes de error/usuario correctos.
- Localización: claves añadidas y probadas; sin textos hardcodeados.
- Addressables/Assets: en grupos correctos; referencias limpias.
- Persistencia: save/load probado sin corrupción.
- QA en dispositivo representativo (PC o plataforma).

### DoD — Minijuego
- Estados implementados: intro / playing / success / fail / exit.
- Tutorial o first-time hint.
- Pooling verificado (sin fugas de memoria/instancias).

### DoD — Backend
- Endpoint/contrato real o mock integrado; timeouts/retries y errores manejados.
- Seguridad verificada (firma/expiración; nada sensible en cliente).
- Tests de integración verdes.

### DoD — UI/UX
- Estados completos: idle/hover/focus/disabled/error/loading/empty.
- Navegación mando/teclado/tab correcta; contraste adecuado.
- Anchors/responsive correctos en resoluciones objetivo.

### DoD — Multijugador
- Flujos lobby/host/cliente comprobados.
- Sync estable bajo latencia simulada (100–200 ms) y pérdida (1–2%).
- Autoridad de score/tiempos en servidor; prevención básica de trampas.

---

## 🧩 Plantilla breve para cada historia

```
# Historia: \<Nombre\>
## Descripción
Como \<rol\> quiero \<acción\> para \<beneficio\>.

## Criterios de aceptación (Given–When–Then)
- G1: Dado \<estado\>, Cuando \<acción\>, Entonces \<resultado\>.
- G2: ...
- G3: ...
- Edge/Error: ...

## DoR específicos
- ...

## DoD específicos
- ...
```
