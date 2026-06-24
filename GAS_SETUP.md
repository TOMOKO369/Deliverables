# GAS Webhook Proxy Setup

1. Create a new Google Apps Script project.
2. Copy `gas-webhook-proxy.gs` into `Code.gs`.
3. Open `Project Settings` and add this script property:
   - Property: `DISCORD_WEBHOOK_URL`
   - Value: your Discord webhook URL
4. Deploy as a web app:
   - Execute as: `Me`
   - Who has access: `Anyone`
5. Copy the web app URL and replace `YOUR_GAS_WEB_APP_URL` in:
   - `index.html`
   - `self-introduction/index.html`
6. Rotate the Discord webhook that was previously committed or published.
