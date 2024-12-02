import * as vscode from "vscode";

const extensionName = "focus-flip";

export function activate(context: vscode.ExtensionContext) {
  const codeViewCommandDisposable = vscode.commands.registerCommand(
    `${extensionName}.codeView`,
    async () => runCodeViewCommand()
  );

  const terminalViewCommandDisposable = vscode.commands.registerCommand(
    `${extensionName}.terminalView`,
    async () => runTerminalViewCommand()
  );

  context.subscriptions.push(codeViewCommandDisposable);
  context.subscriptions.push(terminalViewCommandDisposable);
}

async function runCodeViewCommand() {
  await hidePrimaryBar();
  await hideTerminalView();
}

async function runTerminalViewCommand() {
  await hidePrimaryBar();
  await showTerminalMaximizedView();
}

async function hidePrimaryBar() {
  await vscode.commands.executeCommand("workbench.view.explorer");
  await vscode.commands.executeCommand(
    "workbench.action.toggleSidebarVisibility"
  );
}

async function hideTerminalView() {
  await focusEditor();
  await focusTerminal();
  const terminals = vscode.window.terminals;

  for (let index = 0; index < terminals.length; index++) {
    terminals[index].hide();
  }
}

async function showTerminalMaximizedView() {
  await focusEditor();
  await focusTerminal();
  await vscode.commands.executeCommand("workbench.action.toggleMaximizedPanel");
}

async function focusEditor() {
  await vscode.commands.executeCommand(
    "workbench.action.focusActiveEditorGroup"
  );
}

async function focusTerminal() {
  await vscode.commands.executeCommand("terminal.focus");
}
