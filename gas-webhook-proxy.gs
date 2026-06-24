const DISCORD_WEBHOOK_PROPERTY = 'DISCORD_WEBHOOK_URL';

function doGet() {
  return jsonResponse_({
    ok: true,
    message: 'GAS webhook proxy is running. Send POST requests from the website form.',
  });
}

function doPost(e) {
  try {
    const data = parseRequest_(e);
    const webhookUrl = PropertiesService.getScriptProperties().getProperty(DISCORD_WEBHOOK_PROPERTY);

    if (!webhookUrl) {
      throw new Error('Script property DISCORD_WEBHOOK_URL is not set.');
    }

    UrlFetchApp.fetch(webhookUrl, {
      method: 'post',
      contentType: 'application/json',
      muteHttpExceptions: true,
      payload: JSON.stringify(buildDiscordPayload_(data)),
    });

    return jsonResponse_({ ok: true });
  } catch (error) {
    return jsonResponse_({ ok: false, error: String(error && error.message ? error.message : error) });
  }
}

function parseRequest_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    return {};
  }

  return JSON.parse(e.postData.contents);
}

function buildDiscordPayload_(data) {
  const type = data.type || 'message';
  const source = data.source || 'Website';
  const pageUrl = data.pageUrl || '';
  const timestamp = data.time || new Date().toISOString();

  if (type === 'visit') {
    return {
      content: `New access to **${source}**\nURL: ${pageUrl}\nTime: ${timestamp}`,
    };
  }

  if (type === 'contact') {
    return {
      username: 'Contact Form',
      embeds: [{
        title: `New contact from ${source}`,
        color: 16032446,
        fields: [
          { name: 'Name', value: String(data.name || '(no name)'), inline: true },
          { name: 'Message', value: String(data.message || '(no message)') },
          { name: 'URL', value: pageUrl || '(unknown)' },
        ],
        timestamp,
      }],
    };
  }

  return {
    content: `New message from **${source}**\n${JSON.stringify(data, null, 2)}`,
  };
}

function jsonResponse_(body) {
  return ContentService
    .createTextOutput(JSON.stringify(body))
    .setMimeType(ContentService.MimeType.JSON);
}
