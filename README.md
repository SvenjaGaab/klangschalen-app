# Klangschalen

Kleine PWA für Klangschalen-Meditation: Schale wählen, Timer stellen, Gong am Ende.

## Dateien
- `index.html` – Oberfläche, Timer und Audio
- `manifest.json` – macht die Seite als App installierbar
- `sw.js` – Service Worker für Offline-Betrieb (bei Änderungen `V` hochzählen)
- `*.mp3` – echte Klangschalen-Aufnahmen (Quelle: pixabay.com, Lizenz vor Weitergabe prüfen)

## Neue Schale hinzufügen
1. mp3 in den Ordner legen
2. In `index.html` eine Zeile in `BOWLS` ergänzen: `{name:"Name",note:"Text",file:"datei.mp3"}`
3. Dateiname in `sw.js` in die Liste eintragen und die Versionsnummer erhöhen

## Hosting
Netlify (Deploy aus diesem GitHub-Repo, kein Build-Befehl, Publish directory: `.`).
