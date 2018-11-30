let obj = {
    aNumber:10,
    aString:"aaadi",
    aFunction:function(){
        return (this.aNumber + this.aString)
    }
}

console.log(obj.aFunction())