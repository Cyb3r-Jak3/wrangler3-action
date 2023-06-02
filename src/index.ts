export interface Env {}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
		const resp = await fetch("https://example.com");
		return new Response(resp.body, resp);
	},
};
