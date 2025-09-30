---
title: Introdución
slug: /
sidebar_position: 1
---

# 👋 Bienvenido a la Wiki de Speedy production

Este espacio centraliza la **documentación**, con el objetivo de trabajar de manera consistente y eficiente en el desarrollo de nuestro videojuego.  

## 📝 Historias de Usuario

  **Como** [tipo de usuario]  
  **quiero** [objetivo]  
  **para** [beneficio]

- Incluir **criterios de aceptación** claros y medibles.  
- Dividir en subtareas o historias más pequeñas, si es posible.  
- Relacionar cada historia con los **objetivos del sprint**.

---

## ♠️ Poker Planning

Después de definir las historias de usuario, realizamos la estimación utilizando nuestra versión del poker planning.
Usamos una baraja española. Cada participante recibe un palo y 7 cartas:
Los números 1, 2, 3, 5, 7 y 12 se utilizan para estimar los puntos de historia.
El número 10, de un palo distinto, funciona como comodín para tomar la palabra. Puede usarse para pedir una pausa o aclarar una duda.

### Flujo

1. Se reparten las 7 cartas a cada participante.
2. Se pone en discusión un ítem del product backlog.
3. Cada persona levanta una carta al mismo tiempo:
  - Si todas las cartas muestran el mismo número, se continúa con el siguiente ítem.
  - De lo contrario, quienes eligieron la estimación más baja y la más alta exponen su punto de vista.
4. Se repite el paso 3 hasta que todos los ítems del backlog estén estimados.

---

## Manejo de ramas

```bash
# Ver las ramas existentes
git branch

# Crear una nueva rama y cambiarte a ella
git checkout -b nombre-de-la-rama

# O solo cambiar a una rama existente
git checkout nombre-de-la-rama

# Ver archivos modificados
git status

# Ver diferencias
git diff

# Añadir todos los cambios
git add -A

# Subir la rama y los commits
git commit -m "Mensaje descriptivo del commit"
git push origin nombre-de-la-rama

# Cambiar a la rama principal
git checkout main

# Traer cambios remotos
git pull origin main

# Fusionar tu rama
git merge nombre-de-la-rama

# Subir cambios a remoto
git push origin main
```

---

## Prototipo de bajo nivel

<iframe
  style={{ border: "1px solid rgba(0, 0, 0, 0.1)" }}
  width="800"
  height="450"
  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/design/f5PanUd8Z5TmEHBvGGVSn3/Speedy-productions?node-id=0-1&m=dev&t=aYFMm0Eq7u3c8sGq-1"
  allowFullScreen
/>

