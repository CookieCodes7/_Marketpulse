# MarketPulse — Local Vite Version

Standalone Vite + React frontend with a local Express API server. Replit-specific runtime code has been removed.

## Requirements
- Node.js 20+ (Node 22 is supported)
- npm

## Run

From this folder:

```powershell
npm install
npm run dev
```

Open http://localhost:5173

The API runs on http://localhost:8787.

## Environment

Copy `server/.env.example` to `server/.env` if you want optional API keys such as OpenAI. The core market-data routes use Yahoo Finance.

## Important

The API logger uses standard Pino output in local development, so no `pino-pretty` transport package is required. `lightweight-charts` is included because the stock chart components use it.
