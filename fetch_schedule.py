import urllib.request
import ssl

ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = "https://tomoko369.github.io/schedule/"
req = urllib.request.Request(
    url, 
    headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
)

try:
    with urllib.request.urlopen(req, context=ctx) as response:
        html = response.read().decode('utf-8')
        with open("schedule_source_py.html", "w", encoding="utf-8") as f:
            f.write(html)
        print("Success, file saved! Length:", len(html))
except Exception as e:
    print("Error:", e)
