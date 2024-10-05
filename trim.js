Object.defineProperty(String.prototype,"trimmed",{ get: function trimmed(){
    
        return this.trim()
    }
})

let str = " \t word \r\n".trimmed 

console.log(`str is \"${str}\"`);