import fastify from "fastify";

const server = fastify();

server.listen({ port: 3000 }, (error, address) => {
    if (error) {
        console.error(error);
        process.exit(1);
    } else {
        console.log('Servidor rodando na porta 3000');
    }
});