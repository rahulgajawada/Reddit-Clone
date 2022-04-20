const {PrismaClient} = require('@prisma/client')

const prisma = new PrismaClient()

const context = (request) => {
    return {prisma,request}
}
  
module.exports = {context}