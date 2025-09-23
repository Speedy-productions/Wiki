---
title: Estándar de código
---

# Estándares y convenciones de codificación

Este documento explica **qué estándar formal seguimos en C#** y **qué convenciones de codificación aplicamos** tanto en C# como en Unity.

---

## 📌 Estándar oficial del lenguaje C#

El proyecto sigue el **ISO/IEC 23270 (equivalente a ECMA-334)**, que es la **especificación oficial del lenguaje C#**.  
Este estándar define **cómo funciona el lenguaje a nivel técnico**: su sintaxis, palabras reservadas, tipos de datos, herencia, manejo de excepciones, etc.  
No dicta cómo nombrar variables o cómo organizar carpetas, sino **las reglas obligatorias que todo compilador de C# debe respetar**.

🔗 Referencias oficiales:  
- [ISO/IEC 23270 — C# Language Specification](https://www.iso.org/standard/75178.html)  
- [ECMA-334 — C# Language Specification](https://www.ecma-international.org/publications-and-standards/standards/ecma-334/)  

### Ejemplos de lo que define la ISO:

<pre><code class="language-cs">
// Definición de una clase con herencia
public class Player : Character
&#123;
    private int _health = 100;   // campo privado
    public void TakeDamage(int dmg) // método público
    &#123;
        _health -= dmg;
    &#125;
&#125;

// Estructura básica de control de flujo
if (_health &lt;= 0)
&#123;
    Console.WriteLine("Game Over");
&#125;
</code></pre>

---

## 📌 Convenciones de codificación en C#

Además del estándar formal, usamos las **Microsoft C# Coding Conventions**.  
Estas convenciones no son obligatorias por el compilador, pero nos ayudan a que **todo el equipo escriba código de la misma forma**, haciéndolo más fácil de leer, mantener y revisar en equipo.  

🔗 Referencia:  
- [Microsoft C# Coding Conventions](https://learn.microsoft.com/en-us/dotnet/csharp/fundamentals/coding-style/coding-conventions)

### Ejemplos de convenciones:

<pre><code class="language-cs">
// ✅ Correcto según Microsoft
public class OrderSystem  // PascalCase para clases
&#123;
    private int _orderCount;   // _camelCase para campos privados
    public int TotalOrders =&gt; _orderCount; // Propiedad en PascalCase
&#125;

// ❌ Incorrecto
public class order_system
&#123;
    public int ordercount; // mal nombrado y público sin necesidad
&#125;
</code></pre>

---

## 📌 Herramientas de análisis (StyleCop)

Para reforzar estas convenciones, aplicamos **StyleCop Analyzers**.  
Esto agrega reglas automáticas al compilador que muestran advertencias o errores si no seguimos el estilo definido (por ejemplo, si dejamos un `using` desordenado o una clase sin llaves).

🔗 Referencia:  
- [StyleCop Analyzers en GitHub](https://github.com/DotNetAnalyzers/StyleCopAnalyzers)

### Ejemplo:

<pre><code class="language-cs">
// ❌ Incorrecto
if (isReady) StartGame();

// ✅ Correcto
if (isReady)
&#123;
    StartGame();
&#125;
</code></pre>

---

## 📌 Convenciones específicas en Unity

Unity no tiene un estándar ISO/ECMA propio.  
Aquí seguimos las **Unity C# Coding Guidelines** y las **Best Practices** recomendadas por Unity y la comunidad.  
Esto incluye la organización de carpetas, uso de Prefabs, ScriptableObjects, Addressables, y prácticas de rendimiento.

🔗 Referencias:  
- [Unity — Best Practices](https://docs.unity3d.com/6000.2/Documentation/Manual/best-practice-guides.html)  
- [Unity C# Coding Standards (ejemplo comunidad)](https://unity.com/resources/c-sharp-style-guide-unity-6)

### Ejemplo:

<pre><code class="language-cs">
// Script organizado correctamente
public sealed class OrderSpawner : MonoBehaviour
&#123;
    [SerializeField] private GameObject _customerPrefab; // prefab serializado

    private void Start()
    &#123;
        SpawnCustomer();
    &#125;

    private void SpawnCustomer()
    &#123;
        Instantiate(_customerPrefab, transform.position, Quaternion.identity);
    &#125;
&#125;
</code></pre>

---


De esta forma, el proyecto combina un **estándar formal (ISO)** con **convenciones claras (Microsoft/StyleCop)** y **buenas prácticas específicas para Unity**.
