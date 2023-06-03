import fastify from "fastify";
import dotenv from "dotenv";

dotenv.config();
const server = fastify();

                   //callback  
server.get('/', (request, reply) => {return "Servidor On...."});

const port: any = process.env.PORT;

server.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log('Servidor rodando na porta {3000}');
    }
});