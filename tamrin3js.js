

function counter(string) {
    string = string.split('')
    let result = string.reduce((prev,  curr) => {
        if (!prev[curr]) {
            prev[curr] = 1
        }
        else {
            prev[curr] += 1
        }
        return prev
    },{})
    return result
     
    
}
console.log(counter('hello world IM WOODY'))