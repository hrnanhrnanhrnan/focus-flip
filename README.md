# FocusFlip

FocusFlip is a Visual Studio Code extension that lets you quickly switch between two focused layouts: Code View and Terminal View. Each mode optimizes the interface for either editing code or working in the terminal by hiding unnecessary UI elements.

## Features

### Code View
Hides the terminal and sidebar, focusing entirely on your code. This is ideal for distraction-free coding.

### Terminal View
Maximizes the terminal view for efficient terminal-based workflows, hiding the sidebar and other distractions.

⚠️ Note: Due to API limitations in VS Code, switching between these modes may briefly cause UI elements to "flash" as views adjust. This is expected behavior and unavoidable with the current extension capabilities.

## Commands

### Code View

Switch to Code View using the command:
- FocusFlip: Code View

### Terminal View

Switch to Terminal View using the command:
- FocusFlip: Terminal View

You can run these commands from the command palette (Ctrl+Shift+P / Cmd+Shift+P on macOS)

## Installation

Install the extension from the Visual Studio Code Marketplace.

Reload VS Code to activate the extension.

## Keybindings (Optional)
Add custom keybindings to toggle between views easily. Open your keybindings.json file and add the following:

```json
{
  "key": "ctrl+alt+1",
  "command": "focus-flip.codeView"
},
{
  "key": "ctrl+alt+2",
  "command": "focus-flip.terminalView"
}
```

Replace ctrl+alt+1 and ctrl+alt+2 with your preferred key combinations.

### Limitations
While switching between views, you may notice some UI elements momentarily appear or disappear (e.g., the sidebar flashing). Since I could not find any way through the VS Code API to check for views and panels being visible or maximized, and since I don't find this particulary annoying, I don't plan on changing that. 

### Contribution
If you’d like to contribute or report issues, visit the GitHub repository.
