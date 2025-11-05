// Event   log

console.log("first task")
console.time()
for (let i=0;i<100000;i++){
    // some code
    const h3 = document.querySelector('h3')
    h3.textContent = `Hey everyone is waiting for me`
}

console.timeEnd()

console.log("Next Task ");