import * as vscode from 'vscode';
import axios from 'axios';

interface Answer {
    title: string;
    link: string;
}

let isExtensionActive = true;

let toggleButton = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
toggleButton.text = `$(extensions) Stack Overflow: ON`;
toggleButton.tooltip = "Click to toggle Stack Overflow Helper";
toggleButton.command = "stack-overflow-helper.toggleExtension";
toggleButton.show();

let toggleCommand = vscode.commands.registerCommand("stack-overflow-helper.toggleExtension", () => {
    isExtensionActive = !isExtensionActive;
    toggleButton.text = isExtensionActive ? `$(extensions) Stack Overflow: ON` : `$(extensions) Stack Overflow: OFF`;
    vscode.window.showInformationMessage(`Stack Overflow Helper is now ${isExtensionActive ? "ON" : "OFF"}`);
});

async function fetchStackOverflowAnswers(errorMessage: string): Promise<Answer[]> {
    const query = encodeURIComponent(errorMessage);
    const apiUrl = `https://api.stackexchange.com/2.3/search?order=desc&sort=votes&intitle=${query}&site=stackoverflow&filter=!9_bDDxJY5`;

    try {
        const response = await axios.get(apiUrl);
        return response.data.items
            .filter((item: any) => item.is_answered)
            .map((item: any) => ({
                title: item.title,
                link: item.link
            }))
            .slice(0, 5);
    } catch (error: any) {
        vscode.window.showErrorMessage(`Failed to fetch Stack Overflow answers: ${error.message}`);
        return [];
    }
}


async function showInWebView(errorMessage: string) {
    const answers = await fetchStackOverflowAnswers(errorMessage);

    if (answers.length === 0) {
        vscode.window.showInformationMessage('No Stack Overflow answers found.');
        return;
    }

    const panel = vscode.window.createWebviewPanel(
        'stackOverflowFixes',
        'Stack Overflow Fixes',
        vscode.ViewColumn.One,
        { enableScripts: true }
    );

    const answerHTML = answers.map(a => 
        `<li><a href="${a.link}" target="_blank">${a.title}</a></li>`
    ).join('');

    panel.webview.html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="Content-Security-Policy" content="default-src 'none'; style-src 'unsafe-inline'; script-src 'none'; frame-src https://stackoverflow.com;">
            <title>Stack Overflow Fixes</title>
        </head>
        <body>
            <h2>Top Solutions for "${errorMessage}"</h2>
            <ul>${answerHTML}</ul>
            <p>Solutions provided by <strong>Stack Overflow Helper</strong>.</p>
        </body>
        </html>
    `;
}

async function storeSearch(context: vscode.ExtensionContext, errorMessage: string) {
    let previousSearches: string[] = context.workspaceState.get('recentErrors', []) || [];

    if (!previousSearches.includes(errorMessage)) {
        previousSearches.unshift(errorMessage);
        if (previousSearches.length > 10) previousSearches.pop();
        context.workspaceState.update('recentErrors', previousSearches);
    }
}


export function activate(context: vscode.ExtensionContext) {
    
    console.log('✅ Stack Overflow Helper is now active!');

    vscode.window.showInformationMessage('🚀 Stack Overflow Helper is ready!');

    let hoverProvider = vscode.languages.registerHoverProvider('*', {
        async provideHover(document, position) {
            if (!isExtensionActive) return;  

            const diagnostics = vscode.languages.getDiagnostics(document.uri);
            const diagnostic = diagnostics.find(d => d.range.contains(position));

            if (!diagnostic) {
                return undefined;
            }

            const errorMessage = diagnostic.message;
            const answers = await fetchStackOverflowAnswers(errorMessage);

            if (answers.length === 0) {
                return new vscode.Hover(`**Stack Overflow Helper:** No solutions found.`);
            }

            const hoverText = answers.map(a => `🔗 [${a.title}](${a.link})`).join('\n\n');
            return new vscode.Hover(`**Stack Overflow Helper Solutions:**\n\n${hoverText}`);
        }
    });

    context.subscriptions.push(hoverProvider);

    context.subscriptions.push(toggleButton, toggleCommand);
}


export function deactivate() {}
