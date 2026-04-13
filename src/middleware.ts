import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
	if (context.url.pathname === "/api/auth/callback") {
		return context.rewrite(`/api/auth/callback/${context.url.search}`);
	}

	return next();
});
