// Fastify
import Fastify from 'fastify';
import fastifySecureSession from '@fastify/secure-session';
import cors from '@fastify/cors';
import fastifyStatic from "@fastify/static";

import 'dotenv/config';

// TypeORM
import "reflect-metadata"
import typeorm from './plugins/typeorm';
import { DataSource } from 'typeorm';
import { User, Application, ApplicationVersion, Domain, Log, Product, Resource, CloudServer } from './models';
import { db, server } from "./config/config.json";

// middlewares
import queryArrayMiddleware from './middlewares/queryArray';

// routes
import routes from './routes';

import { readFileSync } from 'fs';
import path from 'path';
import logPlugin from './plugins/logAction';
import fastifyWebsocket from '@fastify/websocket';

// --------------------------
// Stage 1: Setup plugins
// --------------------------

const app = Fastify({
    logger: true
});

app.register(fastifyStatic, {
    root: path.join(__dirname, "client"),
});

app.register(cors, {
    credentials: true,
    origin: (origin, cb) => {
        if (!origin) {
            cb(null, true);
            return;
        }
        const hostname = new URL(origin).hostname;
        // console.log(hostname, server.allowedOrigins)
        if (server.allowedOrigins.includes(hostname)) {
            //  Request from localhost will pass
            cb(null, true);
            return;
        }
        // Generate an error on other origins, disabling access
        cb(new Error("Not allowed"), false);
    },
});

// Register the typeorm plugin with the database configuration
app.register(typeorm, {
    ...db,
    entities: [User, Application, ApplicationVersion, Domain, Log, Product, Resource, CloudServer],
    synchronize: true
});

// Register the log plugin
app.register(logPlugin);

// Register the fastify-secure-session plugin
app.register(fastifySecureSession, {
    sessionName: 'axSession',
    cookieName: 'ax-session-cookie',
    key: readFileSync(path.join(__dirname, '../secret-key')),
    expiry: 60 * 60,
    cookie: {
        path: '/',
        httpOnly: true,
        secure: true,
        sameSite: 'none',
    }
});

app.addHook('preHandler', queryArrayMiddleware);

app.register(fastifyWebsocket);
app.register(routes);

// static files
app.get('/', function (req, reply) {
    reply.sendFile('index.html');
});

app.get('/help', function (req, reply) {
    reply.sendFile('index.html');
});

app.get('/post/:id', function (req, reply) {
    reply.sendFile('index.html');
});

app.get('/message/chat', function (req, reply) {
    reply.sendFile('index.html');
});

app.get('/user/:method', function (req, reply) {
    reply.sendFile('index.html');
});

app.get('/system/log', function (req, reply) {
    reply.sendFile('index.html');
});

// --------------------------
// Stage 2: Define data format and routes
// --------------------------

// Extend the FastifyInstance to include the typeorm plugin
declare module 'fastify' {
    interface FastifyInstance {
        dataSource: DataSource;
    }
    interface FastifyRequest {
        setCookie(name: string, value: string, options: any): void;
        axSession: {
            set(key: string, value: any): void;
            get(key: string): any;
        };
    }
}

// Run the server!
app.listen(server, function (err, address) {
    if (err) {
        app.log.error(err)
        process.exit(1)
    }

    console.log(`Server listening at ${address}`)
});
