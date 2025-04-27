// Programación asíncrona

// Código síncrono

console.log("Inicio")

for (let i = 0; i < 100000000; i++) { }

console.log("Fin")

// Event Loop (Bucle de eventos)

// Componentes del Event Loop:
// 1. Call Stack (Pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js:
// 3. Task Queue (setTimeout()) y Microtask Queue (Promesas)

// Flujo del Event Loop:
// 1. Call Stack
// 2. Operaciones asíncronas -> Web APIs o Node.js
// 3. Operación termina -> La coloca en Task Queue o Microtask Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al Call Stack
// 5. El proceso se repite

// Código asíncrono

// Callbacks

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000)

console.log("Fin")

// Problema: Callback Hell

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback()
    }, 1000)
}

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback()
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})