# **Stack Overflow Helper** 🚀  
A **VS Code extension** that helps you quickly find **Stack Overflow solutions** for errors in your code.  

## **🔹 Features**
✅ Automatically detects errors from the **Problems panel**.  
✅ Fetches only **accepted answers** and sorts them by **votes**.  
✅ Displays results in a **VS Code WebView panel**.  
✅ Keeps track of your **recent searches**.  

---

## **📌 Installation**  

### **From VS Code Marketplace**  
1. Open **VS Code**.  
2. Go to **Extensions** (`Cmd + Shift + X` or `Ctrl + Shift + X`).  
3. Search for **"Stack Overflow Helper"**.  
4. Click **Install**.

### **Manual Installation (VSIX File)**  
1. Download the `.vsix` package from **[GitHub Releases](https://github.com/varunsahu258/stack-overflow-helper/releases)**.  
2. Open a terminal and run:  
   ```sh
   code --install-extension stack-overflow-helper-1.0.0.vsix
   ```
3. Restart **VS Code**.

---

## **🎯 Usage**
### **Find Fixes for Errors**  
1. Open a file with an **error**.  
2. Open **Command Palette** (`Cmd + Shift + P` or `Ctrl + Shift + P`).  
3. Type **"Find Fixes on Stack Overflow"** and select it.  
4. A **webview panel** will open with **Stack Overflow solutions**.  

---

## **🛠️ How It Works**
1. Extracts **error messages** from the **Problems panel**.  
2. Uses **Stack Exchange API** to fetch **top-voted accepted answers**.  
3. Displays results in a **VS Code WebView panel**.  
4. Saves your **last 10 searches** for quick reference.  

---

## **📦 Development**
### **Clone & Install Dependencies**
```sh
git clone https://github.com/varunsahu258/stack-overflow-helper.git
cd stack-overflow-helper
npm install
```

### **Run the Extension in Debug Mode**
```sh
npm run compile
code .
```
Then press `F5` to start a new VS Code window with the extension loaded.

### **Package for Publishing**
```sh
vsce package
```
This will generate a `.vsix` file for local installation.

---

## **📜 License**
This project is licensed under the **MIT License**. See [LICENSE](LICENSE) for details.  

---

## **🌟 Contributing**
1. **Fork** the repository.  
2. **Create a branch** (`git checkout -b feature-branch`).  
3. **Commit your changes** (`git commit -m "Added new feature"`).  
4. **Push to the branch** (`git push origin feature-branch`).  
5. **Create a Pull Request**.

---

## **📩 Contact & Support**
📧 Email: [varunsahu258@gmail.com](varunsahu258@gmail.com)  
🐙 GitHub: [varunsahu258](https://github.com/varunsahu258)  

If you find this extension useful, give it a **⭐ on GitHub**! 🚀  