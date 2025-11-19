import os
import requests

icons = {
    "java": "java-original",
    "spring": "spring-original",
    "python": "python-original",
    "django": "django-plain",  # ===
    "fastapi": "fastapi-original",
    "javascript": "javascript-original",
    "typescript": "typescript-original",
    "nodejs": "nodejs-original",
    "react": "react-original",
    "html": "html5-original",
    "css": "css3-original",
    "tailwindcss": "tailwindcss-original",
    "mysql": "mysql-original",
    "mongodb": "mongodb-original",
    "git": "git-original",
    "docker": "docker-original",
    "linux": "linux-original",
    "aws": "amazonwebservices-original",
    "googlecloud": "googlecloud-original",
    "pandas": "pandas-original",
    "numpy": "numpy-original",
    "scikitlearn": "scikitlearn-original",
    "hadoop": "apachehadoop-original",
    "spark": "apachespark-original",
    "blockchain": "blockchaindotcom-original"
}

output_dir = "assets/icons"
os.makedirs(output_dir, exist_ok=True)

def download_icon(name, path):
    url = f"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{path}.svg"
    dest = os.path.join(output_dir, f"{name}.svg")
    try:
        r = requests.get(url, timeout=10)
        if r.status_code == 200:
            with open(dest, "wb") as f:
                f.write(r.content)
            print(f"✅ {name} - ok")
        else:
            print(f"❌ {name} - {r.status_code}")
    except Exception as e:
        print(f"⚠️ {name} - {e}")

for n, p in icons.items():
    download_icon(n, p)

print("\n🎉 All colorful Devicon logos downloaded into assets/icons/")
