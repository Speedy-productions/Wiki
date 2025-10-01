---
title: Definición de Pruebas Manuales y Unitarias
---

# Definición de Pruebas Manuales y Unitarias

Este documento describe cómo se llevarán a cabo las **pruebas manuales** y **unitarias** dentro del proyecto, y los criterios para realizar las validaciones de las historias de usuario tanto en el desarrollo como en la validación final.

---

## 📌 Pruebas Manuales

Las **pruebas manuales** se enfocan en verificar las funcionalidades principales del juego de forma interactiva, asegurando que los sistemas del juego, como las mecánicas y la interacción del jugador, funcionen correctamente.

### Casos de Uso:
1. **Pruebas de Mecánicas del Juego**: Verificar que las funciones clave como cocinar, agarrar objetos, y otros elementos de gameplay estén funcionando como se espera.
2. **Pruebas de Interacción**: Asegurarse de que el jugador pueda interactuar con los objetos del juego de manera fluida (agarrar objetos, cocinarlos, etc.).
3. **Pruebas de UI/UX**: Aunque las pruebas de UI también pueden ser automatizadas, en algunas ocasiones es útil hacer pruebas manuales para verificar la fluidez de la interfaz y la navegación.
4. **Pruebas de Errores y Flujos Inesperados**: Verificar cómo el sistema maneja entradas incorrectas, como intentar cocinar sin los ingredientes correctos o seleccionar opciones de menú erróneas.

### Procedimiento:
1. **Ejecutar el Juego en Unity**:
   - Ejecutar el juego dentro del **Modo de Juego** en Unity y probar las mecánicas clave, como agarrar un objeto o cocinar.
   - Verificar que las interacciones se realicen correctamente, como que los objetos se agarren al hacer clic o al pulsar el botón correspondiente.
   - Comprobar que, por ejemplo, al cocinar un ingrediente, se complete correctamente el proceso y se actualicen las variables, UI y assets.
   - Validar que el jugador reciba la retroalimentación adecuada después de realizar una acción (recompensa o mensaje de éxito/error).
3. **Pruebas de UI**: Asegurarse de que los elementos de la UI sean visibles y que los botones, menús y otros componentes respondan correctamente a las interacciones.
4. **Documentar los resultados**:
   - Si alguna mecánica o interacción no funciona como se espera, documentar el fallo y comunicarlo al equipo de desarrollo para su corrección.
   - Realizar pruebas adicionales de flujo y errores para verificar que el juego maneje adecuadamente los escenarios no previstos.

### Criterios de Aceptación para Pruebas Manuales:
- **Mecánicas Funcionales**: Todas las mecánicas clave deben estar completas y funcionales (por ejemplo, el sistema de cocina debe permitir que el jugador cocine correctamente).
- **Interacciones Correctas**: El jugador debe poder interactuar con los objetos correctamente (agarrar, soltar, usarlos).
- **Flujos y Navegación**: Los flujos de navegación deben ser intuitivos y los botones deben llevar al jugador a las pantallas correctas.
- **Comportamiento de UI/UX**: Los elementos de la UI deben ser fácilmente accesibles, y los errores deben manejarse con mensajes claros y adecuados.

---

## ✅ Pruebas Unitarias

Las **pruebas unitarias** se realizan para verificar que el código funcione como se espera, especialmente en lo que respecta a la **interacción de la UI** y la **lógica de las funciones críticas** de la aplicación, como la validación de los botones, interacciones y cambios de estado en el menú.

### Casos de Uso:
1. **Pruebas de Funciones Críticas de la UI**: Verificar que los botones, cuadros de texto, y otros elementos de la UI interactúen correctamente con el código y que cambien el estado de la aplicación según se espera.
2. **Pruebas de Cambio de Escena**: Validar que los botones de la UI correctamente cambian las escenas o actualizan la información en la pantalla.
3. **Pruebas de Interacción de Menús**: Asegurarse de que los menús del juego (como el menú principal, las opciones) funcionen correctamente cuando se interactúa con los botones.

### Procedimiento:
1. **Instalar Unity Test Framework**: **Unity Test Framework** debe estar instalado en el proyecto desde el **Package Manager**.
2. **Escribir Pruebas Unitarias**:
   - Crear pruebas unitarias para validar que las funciones de la UI funcionan correctamente. Por ejemplo, si se tiene un botón para cambiar de escena, la prueba debería verificar que, al hacer clic en el botón, el juego realmente cambie a la escena correcta.
   
   Ejemplo de prueba unitaria para un botón en el menú:
   ```csharp
   using NUnit.Framework;
   using UnityEngine;
   using UnityEngine.UI;

   public class MenuTest
   {
       [Test]
       public void TestMenuButtonClick()
       {
           // Setup
           var button = new GameObject().AddComponent<Button>();

           // Simular clic en el botón
           button.onClick.Invoke();

           // Verificar que la escena cambió o la función esperada se ejecutó
           Assert.AreEqual(true, SceneManager.GetActiveScene().name == "GameScene", "El botón no cambia la escena correctamente.");
       }
   }
