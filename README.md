Here’s the updated **README.md** file with the new **Hover and Links** features included:  

---

# **Stack Overflow Helper 🚀**  

A VS Code extension that helps you quickly find **Stack Overflow solutions** for errors in your code.  

---

## **🔹 Features**  

✅ **Automatically detects errors** from the Problems panel.  
✅ **Fetches only accepted answers** and sorts them by votes.  
✅ **Displays results** in a **VS Code WebView panel**.  
✅ **Keeps track of your recent searches** (last 10).  
✅ **Hover over errors** to see Stack Overflow links directly.  
✅ **Status Bar Toggle Button** to turn the extension ON/OFF.  

---

## **📌 Installation**  

### **From VS Code Marketplace**  
1️⃣ Open **VS Code**.  
2️⃣ Go to **Extensions** (**Cmd + Shift + X** or **Ctrl + Shift + X**).  
3️⃣ Search for `"Stack Overflow Helper"`.  
4️⃣ Click **Install**.  

### **Manual Installation (VSIX File)**  
1️⃣ Download the `.vsix` package from **GitHub Releases**.  
2️⃣ Open a terminal and run:  
   ```sh
   code --install-extension stack-overflow-helper-1.0.0.vsix
   ```
3️⃣ Restart VS Code.  

---

## **🎯 Usage**  

### **🔍 Find Fixes for Errors (WebView Panel)**  
1️⃣ Open a file with an error.  
2️⃣ Open **Command Palette** (**Cmd + Shift + P** or **Ctrl + Shift + P**).  
3️⃣ Type **"Find Fixes on Stack Overflow"** and select it.  
4️⃣ A **WebView Panel** will open with Stack Overflow solutions.  

### **🔗 Hover to See Stack Overflow Links**  
- Hover over an error in your code.  
- If solutions exist, you’ll see clickable **Stack Overflow links** in a hover popup.  

### **📌 Toggle Extension with Status Bar Button**  
- A **toggle button** is always visible in the **VS Code status bar**.  
- Click it to **enable/disable** Stack Overflow Helper.  

---

## **🛠️ How It Works**  

🔸 Extracts **error messages** from the Problems panel.  
🔸 Uses **Stack Exchange API** to fetch **top-voted accepted answers**.  
🔸 Displays results in a **VS Code WebView panel**.  
🔸 **Hover feature:** Shows links directly when hovering over errors.  
🔸 Saves your last **10 searches** for quick reference.  

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
Then press **F5** to start a new VS Code window with the extension loaded.  

### **Package for Publishing**  
```sh
vsce package
```
This will generate a `.vsix` file for local installation.  

---

## **📜 License**  
This project is licensed under the **MIT License**. See [LICENSE](./LICENSE) for details.  

---

## **🌟 Contributing**  
💡 Want to improve this extension? Follow these steps:  

1️⃣ **Fork the repository**.  
2️⃣ Create a new branch:  
   ```sh
   git checkout -b feature-branch
   ```
3️⃣ Make changes and commit:  
   ```sh
   git commit -m "Added new feature"
   ```
4️⃣ Push your changes:  
   ```sh
   git push origin feature-branch
   ```
5️⃣ Create a **Pull Request** on GitHub.  

---

## **📩 Contact & Support**  
📧 **Email:** varunsahu258@gmail.com  
🐙 **GitHub:** [varunsahu258](https://github.com/varunsahu258)  

🌟 If you find this extension useful, **give it a ⭐ on GitHub!** 🚀  

---

This README includes all the requested features and is optimized for **better readability**. Let me know if you need further tweaks! 🚀