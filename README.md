# lisharp — Extension VSCode

Extension VSCode officielle pour le langage **lisharp**.

## Fonctionnalités

- ✅ **Coloration syntaxique** complète (formes spéciales, opérateurs, fonctions, constantes)
- ✅ **Snippets** (do, ctx, cmd, if, loops, factorial, overload C++…)
- ✅ **Thème sombre** dédié "lisharp Dark"
- ✅ **Auto-fermeture** des parenthèses et guillemets
- ✅ **Indentation automatique** à l'ouverture de `(`
- ✅ **Exécuter le fichier** avec `F5` (bouton ▶ dans la barre de titre)
- ✅ **Exécuter la sélection** avec `Shift+F5`
- ✅ **Barre de statut** avec bouton ▶ lisharp

## Installation

### Option A — Installer depuis le fichier `.vsix` (recommandé)

```bash
# Dans VSCode, ouvrir la palette de commandes (Ctrl+Shift+P)
# → "Extensions: Install from VSIX…"
# → Choisir le fichier lisharp-language-1.0.0.vsix
```

Ou en ligne de commande :

```bash
code --install-extension lisharp-language-1.0.0.vsix
```

### Option B — Installer en mode développement (sans compiler)

```bash
# Copier le dossier lisharp-vscode dans le dossier extensions VSCode :

# Linux / macOS
cp -r lisharp-vscode ~/.vscode/extensions/lisharp-language

# Windows
xcopy /E lisharp-vscode %USERPROFILE%\.vscode\extensions\lisharp-language\
```

Redémarre VSCode. L'extension est active pour tous les fichiers `.lisharp`.

## Configuration

Dans `settings.json` :

```json
{
  "lisharp.interpreterPath": "/chemin/vers/lisharp",
  "lisharp.enableAutoComplete": true
}
```

## Raccourcis clavier

| Raccourci     | Action                        |
|---------------|-------------------------------|
| `F5`          | Exécuter le fichier courant   |
| `Shift+F5`    | Exécuter la sélection         |

## Snippets disponibles

| Préfixe         | Description                        |
|-----------------|------------------------------------|
| `do`            | Bloc séquentiel                    |
| `key`           | Associer une clé                   |
| `kget`          | Lire une clé                       |
| `cmd-arith`     | Commande arithmétique              |
| `cmd-cmp`       | Commande de comparaison            |
| `cmd-logic`     | Commande logique                   |
| `if`            | Conditionnelle                     |
| `ctx`           | Contexte avec surcharge            |
| `ctx-plus`      | Surcharger + dans un ctx           |
| `ref-direct`    | Référence directe                  |
| `ref-indirect`  | Référence indirecte                |
| `overload`      | Surcharge C++                      |
| `print`         | Afficher une valeur                |
| `loop`          | Boucle avec jump/label             |
| `fact-pattern`  | Patron factorielle récursive       |
| `sin`, `length`, `type-of`, `bit-and` | Fonctions natives |

## Thème

Pour activer le thème **lisharp Dark** :

`Ctrl+K Ctrl+T` → choisir **lisharp Dark**
