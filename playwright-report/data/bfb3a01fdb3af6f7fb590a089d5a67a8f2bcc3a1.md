# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: example.spec.ts >> has title
- Location: tests/example.spec.ts:3:5

# Error details

```
Error: browserType.launch: Failed to launch the browser process.
Browser logs:

╔════════════════════════════════════════════════════════════════════════════════════════════════╗
║ Looks like you launched a headed browser without having a XServer running.                     ║
║ Set either 'headless: true' or use 'xvfb-run <your-playwright-app>' before running Playwright. ║
║                                                                                                ║
║ <3 Playwright Team                                                                             ║
╚════════════════════════════════════════════════════════════════════════════════════════════════╝
Call log:
  - <launching> /ms-playwright/firefox-1522/firefox/firefox -no-remote -wait-for-browser -foreground -profile /tmp/playwright_firefoxdev_profile-vEjpLu -juggler-pipe -silent
  - <launched> pid=550
  - [pid=550][err] [550] Sandbox: CanCreateUserNamespace() clone() failure: EPERM
  - [pid=550][err] Error: no DISPLAY environment variable specified
  - [pid=550] <process did exit: exitCode=1, signal=null>
  - [pid=550] starting temporary directories cleanup
  - [pid=550] <gracefully close start>
  - [pid=550] <kill>
  - [pid=550] <skipped force kill spawnedProcess.killed=false processClosed=true>
  - [pid=550] finished temporary directories cleanup
  - [pid=550] <gracefully close end>

```