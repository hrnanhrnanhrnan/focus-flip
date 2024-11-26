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
  await vscode.commands.executeCommand("workbench.action.toggleSidebarVisibility");
}

async function hideTerminalView() {
  await vscode.commands.executeCommand("workbench.action.focusFirstEditorGroup");
  await vscode.commands.executeCommand("terminal.focus");
  const terminals = vscode.window.terminals;
  
  for (let index = 0; index < terminals.length; index++) {
    terminals[index].hide();
  }
}

async function showTerminalMaximizedView() {
  await vscode.commands.executeCommand("workbench.action.focusFirstEditorGroup");
  await vscode.commands.executeCommand("terminal.focus");
  await vscode.commands.executeCommand("workbench.action.toggleMaximizedPanel");
}