export interface Env {}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const cache = caches.default
		let response = await cache.match(request)
		if (response) return response
		response = await fetch("https://example.com");
		ctx.waitUntil(cache.put(request, response.clone()))
		return new Response(response.body, response);
	},
};
