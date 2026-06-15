import * as vscode from 'vscode';
import * as cp from 'child_process';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {

    // ── Run current file ───────────────────────────────────────────────────────
    const runFile = vscode.commands.registerCommand('lisharp.runFile', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            vscode.window.showErrorMessage('No active file to run.');
            return;
        }

        const filePath  = editor.document.fileName;
        const config    = vscode.workspace.getConfiguration('lisharp');
        const interp    = config.get<string>('interpreterPath', 'lisharp');
        const workDir   = path.dirname(filePath);

        // Save the file before running.
        editor.document.save().then(() => {
            const terminal = getOrCreateTerminal();
            terminal.show(true);
            terminal.sendText(`"${interp}" "${filePath}"`);
        });
    });

    // ── Run selected expression ────────────────────────────────────────────────
    const runSelection = vscode.commands.registerCommand('lisharp.runSelection', () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor || editor.selection.isEmpty) {
            vscode.window.showErrorMessage('No selection to evaluate.');
            return;
        }

        const selected = editor.document.getText(editor.selection);
        const config   = vscode.workspace.getConfiguration('lisharp');
        const interp   = config.get<string>('interpreterPath', 'lisharp');

        const terminal = getOrCreateTerminal();
        terminal.show(true);
        // Use the -e flag for inline evaluation.
        const escaped = selected.replace(/"/g, '\\"').replace(/\n/g, ' ');
        terminal.sendText(`"${interp}" -e "${escaped}"`);
    });

    context.subscriptions.push(runFile, runSelection);

    // ── Status bar item ────────────────────────────────────────────────────────
    const statusBar = vscode.window.createStatusBarItem(
        vscode.StatusBarAlignment.Right, 100);
    statusBar.text  = '$(play) lisharp';
    statusBar.tooltip = 'Run lisharp file (F5)';
    statusBar.command = 'lisharp.runFile';

    const updateStatusBar = () => {
        const editor = vscode.window.activeTextEditor;
        if (editor && editor.document.languageId === 'lisharp') {
            statusBar.show();
        } else {
            statusBar.hide();
        }
    };

    context.subscriptions.push(
        vscode.window.onDidChangeActiveTextEditor(updateStatusBar),
        statusBar
    );
    updateStatusBar();
}

function getOrCreateTerminal(): vscode.Terminal {
    const existing = vscode.window.terminals.find(t => t.name === 'lisharp');
    return existing ?? vscode.window.createTerminal('lisharp');
}

export function deactivate() {}
