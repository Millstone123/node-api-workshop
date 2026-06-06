# Node.js API Workshop

A hands-on starter kit for learning how to build and test REST APIs with Node.js.
No frameworks, no build step — just the standard library so you can see exactly
what's happening under the hood.

## What You'll Learn

- How HTTP servers work at the Node.js level
- Routing, request parsing, and response formatting
- Writing simple automated checks for your server
- Structuring a small API project

## Requirements

- Node.js 18 or later
- No npm install needed — everything uses built-in modules

## Quick Start

1. Clone the repo:

   ```bash
   git clone https://github.com/Millstone123/node-api-workshop.git
   cd node-api-workshop
   ```

2. Verify your setup:

   ```bash
   npm run health
   ```

3. Start the mock API server:

   ```bash
   npm run server
   ```

4. In a second terminal, send a test request:

   ```bash
   curl -s -X POST http://127.0.0.1:8787/ \
     -H "Content-Type: application/json" \
     -d '{"message": "hello"}' | jq
   ```

5. Watch the server terminal — it logs every request as JSON.

## Project Structure

```
docs/          workshop slides and exercise prompts
notes/         participant notes template
scripts/
  health-check.mjs   verifies Node version and project setup
  server.mjs         bare-bones HTTP server for exercises
tests/
  health.test.mjs    sanity check for the project config
```

## Running the Tests

```bash
npm test
```

## Exercises

Exercises live in `docs/`. Start with `01-setup.md` and work through them in order.
Each one builds on the last.
