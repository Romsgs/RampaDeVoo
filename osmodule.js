const os = require('os')
console.log(os.type())
console.log(os.arch())
console.table(os.networkInterfaces().lo[0])
console.log(os.homedir())
console.log(os.hostname())
console.log(os.uptime())

const obj = {
  expiração: 3600,
  expiraçãoString: "3600",
}
console.log(obj.expiração == obj.expiraçãoString)
console.log(obj.expiração === obj.expiraçãoString)