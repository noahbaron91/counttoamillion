// Generated by Wrangler

import { type WebSocketCountServer } from './src';

// After adding bindings to `wrangler.toml`, regenerate this interface via `npm run cf-typegen`
interface Env {
	DATABASE_URL: stirng;
	FRONTEND_HOST: string;
	CF_TURNSTILE_SECRET: string;
	SUPABASE_URL: string;
	SUPABASE_SECRET_KEY: string;
	WEBSOCKET_COUNT_SERVER: DurableObjectNamespace<WebSocketCountServer>;
	WEBSOCKET_RANK_SERVER: DurableObjectNamespace<WebSocketRankServer>;
}
