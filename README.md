# lisharp — VS Code Extension

The **lisharp** extension for Visual Studio Code provides syntax highlighting, snippets, a dedicated theme, and integrated execution commands for `.lisharp` files.

## Features

- Complete syntax highlighting (special forms, operators, functions, and constants)
- Built-in snippets (`do`, `ctx`, `cmd`, `if`, loops, factorial patterns, C++ overloads, and more)
- Dedicated dark theme: **lisharp Dark**
- Automatic closing of parentheses and quotation marks
- Automatic indentation when opening `(`
- Run the current file with `F5` or the ▶ button in the editor title bar
- Run the selected code with `Shift+F5`
- Status bar integration with a dedicated lisharp execution button

## Installation

### Option A — Install from the `.vsix` package (recommended)

From Visual Studio Code:

```text
Open the Command Palette (Ctrl+Shift+P)
→ Extensions: Install from VSIX...
→ Select the file lisharp-language-1.0.0.vsix
```

Alternatively, install from the command line:

```bash
code --install-extension lisharp-language-1.0.0.vsix
```

### Option B — Development installation

Copy the `lisharp-vscode` directory to the VS Code extensions folder.

#### Linux / macOS

```bash
cp -r lisharp-vscode ~/.vscode/extensions/lisharp-language
```

#### Windows

```cmd
xcopy /E lisharp-vscode %USERPROFILE%\.vscode\extensions\lisharp-language\
```

Restart Visual Studio Code. The extension will then be enabled for all `.lisharp` files.

## Configuration

Add the following settings to `settings.json`:

```json
{
  "lisharp.interpreterPath": "/path/to/lisharp",
  "lisharp.enableAutoComplete": true
}
```

## Keyboard Shortcuts

| Shortcut | Action |
|-----------|---------|
| `F5` | Run the current file |
| `Shift+F5` | Run the selected code |

## Available Snippets

| Prefix | Description |
|----------|-------------|
| `do` | Sequential block |
| `key` | Associate a key |
| `kget` | Retrieve a key |
| `cmd-arith` | Arithmetic command |
| `cmd-cmp` | Comparison command |
| `cmd-logic` | Logical command |
| `if` | Conditional expression |
| `ctx` | Context definition with overload support |
| `ctx-plus` | Overload the `+` operator inside a context |
| `ref-direct` | Direct reference |
| `ref-indirect` | Indirect reference |
| `overload` | C++ operator overload |
| `print` | Print a value |
| `loop` | Loop with jump and label |
| `fact-pattern` | Recursive factorial pattern |
| `sin`, `length`, `type-of`, `bit-and` | Built-in functions |

## Theme

To enable the **lisharp Dark** theme:

```text
Ctrl+K Ctrl+T
→ Select "lisharp Dark"
```
