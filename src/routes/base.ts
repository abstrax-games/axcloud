import { FastifyInstance, FastifyRequest } from "fastify";

import svgCaptcha from "svg-captcha";
import { website } from "../config/config.json"

export default async function baseRoutes(fastify: FastifyInstance) {
    fastify.get(
        "/config",
        async (request, reply) => {
            return website
        }
    );

    fastify.get(
        "/captcha",
        async (request, reply) => {
            const captcha = svgCaptcha.create({
                ignoreChars: "0o1il",
                color: true,
                noise: 4,
            });
            request.axSession.set("captcha", captcha.text);
            reply.type("image/svg+xml");
            return reply.send(captcha.data);
        }
    );
}
