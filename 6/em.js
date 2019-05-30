function isvalidemail(email){
    var numreg = /\w*@\w*\.\w*/
    return numreg.test(email)
}