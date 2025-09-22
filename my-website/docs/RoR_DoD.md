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
- Contratos de datos/eventos: interfaces, ScriptableObjects, eventos y payloads definidos.
- Rendimiento: objetivo 60 FPS (mín. 30).
- Localización: claves de texto listadas (sin hardcode).
- Riesgos + mitigación breve.
- Estimación (puntos) y tamaño realizable en 1 sprint.

### DoR — Minijuego
- Loop descrito (inicio → reto → éxito/fallo → recompensa/salida).
- Contrato IMinigame + eventos; métricas de score/tiempo acordadas.
- Assets mínimos listos o placeholders validados.
- Input mapping (teclado/mando) definido.

### DoR — Backend
- API/contrato: endpoints, campos, códigos de error, timeouts y retries.
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
- IMinigame y eventos operativos; resultado determinista.
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

---

## 🚀 Aplicado a nuestro Sprint Backlog (8)

1. **Menú principal — UI/UX (2p)**  
   DoR: wireframe con estados; navegación (teclado/mando/mouse); flujo a Jugar/Opciones/Salir; escena bootstrap.  
   **Criterios**  
   - G1: Dado el arranque, Cuando cargo la escena inicial, Entonces veo Jugar/Opciones/Salir.  
   - G2: Dado foco en un botón, Cuando uso flechas/stick, Entonces el foco rota en orden definido.  
   - G3: Dado que elijo Opciones, Cuando confirmo, Entonces abre en \< 500 ms.  
   - Edge: Si el mando se desconecta, Entonces el input con teclado sigue funcional.  
   **DoD**: estados UI completos; anchors correctos; claves de loc listas; 0 GC spikes al navegar; test de navegación básico.

2. **Menú Opciones — UI/UX (1p)**  
   DoR: lista de opciones (idioma, audio, sensibilidad, gráficos URP); persistencia requerida.  
   **Criterios**  
   - G1: Dado el menú, Cuando cambio idioma, Entonces los textos se actualizan tras confirmar.  
   - G2: Dado el slider de audio, Cuando ajusto volumen, Entonces el mixer refleja el cambio y persiste.  
   - Edge: Si no existe archivo de guardado, Entonces se crea con valores por defecto.  
   **DoD**: SaveSystem integrado; validado en 2 idiomas; accesibilidad de foco; docs de claves.

3. **Interfaz (HUD) — UI/UX (1p)**  
   DoR: HUD requerido (monedas, tiempo, pedidos activos); eventos OrderStarted/Completed.  
   **Criterios**  
   - G1: Al iniciar el día, Entonces HUD muestra tiempo y monedas iniciales.  
   - G2: Al recibir pedido, Entonces aparece tarjeta con ítems y temporizador.  
   - Edge: Con 0 pedidos, Entonces HUD muestra “En espera” sin errores.  
   **DoD**: HUD sin alocaciones por frame; Addressables correctos; probado con 0/1/5 pedidos.

4. **Movimiento — Mecánica (2p)**  
   DoR: mapping de input; velocidad; slope limit; capas de colisión.  
   **Criterios**  
   - G1: WASD/stick mueve al personaje a velocidad constante con deltaTime.  
   - G2: Cámara sigue sin jitter (LateUpdate/Cinemachine).  
   - Edge: A 30 FPS, la velocidad percibida se mantiene.  
   **DoD**: Física en FixedUpdate; sin GC; mando y teclado probados.

5. **Agarrar objetos — Mecánica (2p)**  
   DoR: lista de objetos agarrables; punto de attach; prioridades de pickup.  
   **Criterios**  
   - G1: Si manos libres y objeto en rango, Interact lo toma.  
   - G2: Con Interact de nuevo, lo suelta en superficie válida.  
   - Edge: Con 2 objetos en rango, toma el más cercano/centrado.  
   **DoD**: Eventos OnGrab/OnDrop; capas de colisión correctas; 10+ interacciones sin fugas.

6. **Cortar (Vegetales, Queso) — Minijuego (5p)**  
   DoR: loop definido; IMinigame y scores; assets mínimos.  
   **Criterios**  
   - G1: Al iniciar, muestra tutorial breve y contador.  
   - G2: Cortes en área perfecta suman; fuera restan.  
   - G3: Al terminar, retorna MinigameResult con score/tiempo.  
   - Edge: Si se cancela, retorna cancelled sin romper HUD.  
   **DoD**: determinista (semilla); pooling VFX; 0 alloc/frame; mando y mouse verificados.

7. **Armar orden — Minijuego (5p)**  
   DoR: recetas/ítems (ScriptableObjects); tolerancias.  
   **Criterios**  
   - G1: Ingredientes correctos → pedido “completo”.  
   - G2: Faltante o extra → “incorrecto” con feedback claro.  
   - Edge: Tiempos límite distintos por dificultad.  
   **DoD**: Integrado a OrderSystem; telemetría de tiempo y errores.

8. **Cocinar (Carne) — Minijuego (5p)**  
   DoR: curvas de cocción (crudo/medio/quemado); ventanas perfect.  
   **Criterios**  
   - G1: Estado de carne según tiempo en plancha.  
   - G2: Ventana perfect.  
   - Edge: Sobrecalentamiento/quemado penaliza.  
   **DoD**: estados visuales (shader/flipbook); sin leaks; retorno estable al loop.

---

## 📦 Aplicado a nuestro Product Backlog (12)

1. **Mejorar restaurante — Mecánica, UI/UX**  
   DoR: lista de mejoras (decoración, equipos, buffs); impacto en score/tiempo; UI de upgrade.  
   **Criterios**  
   - G1: Comprar mejora aplica efecto y persiste.  
   - G2: UI muestra costo/beneficio y estados (bloqueado/comprado).  
   - Edge: Si faltan monedas, no compra y muestra error.  
   **DoD**: SaveSystem probado; cambios visibles en HUD/escena; telemetría de uso.

2. **Mostrar orden del cliente — Mecánica**  
   DoR: formato de orden; eventos OrderCreated/Updated/Expired.  
   **Criterios**  
   - G1: Nueva orden aparece con ítems y tiempo.  
   - G2: Actualización refleja cambios en tiempo/ítems.  
   - Edge: Orden expirada desaparece y penaliza.  
   **DoD**: HUD integrado; pruebas con 1–N órdenes concurrentes.

3. **Enseñar Orden — Mecánica, Multijugador**  
   DoR: flujo host/cliente para ver la misma orden; autoridad.  
   **Criterios**  
   - G1: Host crea orden y todos la ven igual.  
   - G2: Cambio de estado sincroniza en ≤ 200 ms.  
   - Edge: Cliente tardío recibe estado actual.  
   **DoD**: sync estable con latencia simulada; prevención básica de cheats.

4. **Freír papas — Minijuego**  
   DoR: tiempos de fritura, temperaturas, feedback.  
   **Criterios**  
   - G1: Ventana perfect de cocción.  
   - G2: Exceso → grasosa/quemada (penaliza).  
   - Edge: Interrupción cancela sin romper HUD.  
   **DoD**: determinismo; pooling; 0 alloc/frame.

5. **Servir refrescos — Minijuego**  
   DoR: tamaños, niveles de llenado, derrames.  
   **Criterios**  
   - G1: Nivel correcto según tamaño de vaso.  
   - G2: Derrame penaliza tiempo/score.  
   - Edge: Cambio de vaso re-calibra nivel.  
   **DoD**: sonidos; telemetría de aciertos.

6. **Servir helado — Minijuego**  
   DoR: sabores, número de scoops, forma.  
   **Criterios**  
   - G1: Scoops correctos en orden.  
   - G2: Sabor incorrecto penaliza.  
   - Edge: Exceso cae y exige repetir.  
   **DoD**: animaciones suaves; 0 alloc/frame.

7. **Servidor — Backend, Multijugador**  
   DoR: stack de red (NGO/Mirror), autoridad, matchmaking/lobby.  
   **Criterios**  
   - G1: Crear/unirse a sala funciona con código/sesión.  
   - G2: Sync de pedidos/estados estable.  
   - Edge: Host migration o reconexión básica.  
   **DoD**: pruebas 150 ms/2% pérdida; logs controlados; rate limiting.

8. **Base de datos — Backend**  
   DoR: esquema (usuarios, scores, pedidos), índices, migraciones.  
   **Criterios**  
   - G1: CRUD básico de usuarios y scores.  
   - G2: Consulta de ranking semanal.  
   - Edge: Migración vacía no rompe datos previos.  
   **DoD**: seeds de prueba; test de carga simple.

9. **Canje de códigos promocionales — Backend, Mecánica**  
   DoR: formato de código; HMAC + expiración; reglas por usuario.  
   **Criterios**  
   - G1: Código válido canjea 1 vez por cuenta.  
   - G2: Código expirado/inválido muestra error claro.  
   - Edge: Rate limit al reintentar.  
   **DoD**: verificación server-side; auditoría de canjes; telemetría de fraude.

10. **Menú multijugador — Backend, UI/UX**  
    DoR: flujos crear/unirse, visibilidad pública/privada, lista de salas.  
    **Criterios**  
    - G1: Crear sala devuelve código y estado visible.  
    - G2: Unirse por código funciona; manejo sala llena.  
    - Edge: Sala cerrada expulsa a nuevos con mensaje.  
    **DoD**: navegación con mando; errores localizados; tests de UI.

11. **Personalización de personaje — Mecánica**  
    DoR: slots (cabeza, torso, etc.), restricciones y costos; persistencia.  
    **Criterios**  
    - G1: Cambios visuales aplican y guardan.  
    - G2: Items bloqueados muestran requisito.  
    - Edge: Revertir vuelve al estado previo sin perder datos.  
    **DoD**: compatibilidad con animaciones; Addressables por variant.

12. **Pasaporte de alimentos — Backend, Mecánica, UI/UX**  
    DoR: definición (logros/coleccionables), vista UI, persistencia.  
    **Criterios**  
    - G1: Completar receta agrega entrada en pasaporte.  
    - G2: Vista muestra progreso por categoría.  
    - Edge: Datos corruptos → recuperación segura a estado coherente.  
    **DoD**: guardado/restauración probados; performance estable en la vista.
