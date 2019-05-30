function isvalidnumber(number){
    var numreg = /\d{11}/
    return numreg.test(number)
}