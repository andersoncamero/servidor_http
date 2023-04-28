const bcrypt = require('bcrypt')


async function verifyPass() {
    const myPassword = 'admin 123 202' 
    const hash = '$2b$10$FdQ55wVvFP2dkVmEvRFVTeiJ2r5O6Zal7y03fA.UlsSPc1D1XMGSq'
    const isMatch = await bcrypt.compare(myPassword, hash)
    console.log(isMatch);
}

verifyPass();