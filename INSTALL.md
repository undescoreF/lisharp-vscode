# Installation de l'extension VSCode lisharp

## Méthode la plus simple (sans compiler TypeScript)

L'extension fonctionne **sans compilation** pour la coloration syntaxique,
les snippets et le thème. Il suffit de copier le dossier dans les extensions VSCode.

### Linux / macOS

```bash
cp -r lisharp-vscode ~/.vscode/extensions/lisharp-language
```

### Windows (PowerShell)

```powershell
Copy-Item -Recurse lisharp-vscode "$env:USERPROFILE\.vscode\extensions\lisharp-language"
```

### Windows (CMD)

```cmd
xcopy /E /I lisharp-vscode "%USERPROFILE%\.vscode\extensions\lisharp-language"
```

Ensuite **redémarre VSCode**.  
Ouvre un fichier `.lisharp` → la coloration syntaxique est active !

---

## Activer le bouton ▶ Run (optionnel — nécessite Node.js)

```bash
cd lisharp-vscode
npm install
npm run compile
```

Puis copie le dossier entier (avec `out/`) dans les extensions.

---

## Configurer le chemin de l'interpréteur

Dans VSCode → `Ctrl+,` → chercher **lisharp** :

```json
"lisharp.interpreterPath": "C:/chemin/vers/lisharp.exe"
```

Ensuite `F5` sur un fichier `.lisharp` lance l'interpréteur dans le terminal intégré.
