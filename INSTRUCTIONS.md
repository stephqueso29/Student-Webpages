# 🎓 Final Project – Personal Portfolio Website

You will build your own website that introduces you as a programmer and showcases the JavaScript projects you’ve built this year.

---

## 🔧 What You Need to Include

### 🧑‍💻 About You Section

* A short description of yourself as a programmer
* A reflection on what you learned this year in Computer Science

### 🗂 Project Gallery Section

* Showcase all your graded JavaScript projects
* Include:

  * A short description of each project
  * A working version that visitors can use or view

> **Reminder:** If you took the AP Exam, do **not** include your Create Performance Task project on this website.

### 🎨 Design Requirement

* Your website should have a modern, clean look
* Make sure all linked projects match your website’s style (update CSS if necessary)

### 🌍 Deployment Requirement

* Deploy using GitHub Pages or Netlify
* Submit your live website link in the Google Form on Classroom

---

## 💡 Ways to Display Your Projects

Choose whichever works best for your layout:

### 🔗 Option 1: Link to Separate Pages

Move your project files into folders like `/calculator/index.html`

**Example:** <a href="calculator/index.html">Try My Calculator App</a>

---

### 📄 Option 2: Build a Projects Page (`projects.html`)

Create a `projects.html` file and render all your projects as cards or sections. You can include:

* An image preview
* A description
* Clickable links or live previews

---

## 🎨 Styling Help – CSS Grid (Optional but Recommended)

Use CSS Grid to organize your layout cleanly.

**Docs:** [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout)
**Tutorial:** [CSS Grid Crash Course (YouTube)](https://www.youtube.com/watch?v=jV8B24rSN5o)

### Example CSS Grid with Areas:

CSS
```
.container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
  "header header"
  "sidebar content"
  "footer footer";
}
.header { grid-area: header; }
.sidebar { grid-area: sidebar; }
.content { grid-area: content; }
.footer { grid-area: footer; }
```

---

### Scale Your Grid as Needed

CSS
```
.container {
  grid-template-columns: repeat(6, 1fr);
  grid-template-areas:
  "header header header header header header"
  "sidebar sidebar content content content content"
  "footer footer footer footer footer footer";
}
```

---

### Why Use `grid-template-areas`?

* Easier to manage layout
* Named sections make HTML cleaner and easier to work with

---

## 📁 How to Set Up Your Repository on GitHub

### Step-by-step Instructions

1. Go to [github.com](https://github.com) and sign in or create an account
2. Click the “+” icon in the top right → **New repository**
3. Name it something like `final-project-portfolio`
4. Set it to **Public** and click **Create repository**

### How to Add Your Files

#### Option 1: Upload Files

* Go to your repo → Click **Add file** → **Upload files**
* Upload your files (e.g., `index.html`, `style.css`, `images`, etc.)
* Click **Commit changes** (this means "upload and save")

#### Option 2: Chromebook Users

* If you can’t download files:

  * Click a file like `index.html` in your repo
  * Click the pencil ✏️ to edit
  * Copy and paste your code from CodePen or another source
  * Scroll down and click **Commit changes**
* If you *can* download files, use Option 1 instead

### How to Edit Files

1. Click any file
2. Click the ✏️ icon to open the editor
3. Edit your content
4. Scroll down and click **Commit changes**

---

## 🌐 How to Publish Your Website Using GitHub Pages

### Steps:

1. Go to your GitHub repository
2. Click the **Settings** tab
3. In the left sidebar, scroll to **Pages**
4. Under “Branch”, select:

   * `main`
   * `/ (root)`
5. Click **Save**
6. Copy the live link GitHub gives you
7. Open it in a new tab and test that it works

👉 [GitHub Pages Official Guide](https://pages.github.com/)

---

## 📄 What is a README.md?

A `README.md` file is a special file used to describe what your project is, how it works, and how to view or use it. GitHub automatically displays the contents of this file on your repo’s main page.

### ✅ Use the Prompt Below to Generate Your `README.md` File Using ChatGPT

> 💡 **Note from Mr. Alvarado:**  
> AI is a huge component in computer science, and learning to use it as a tool to accelerate your learning is essential. When used responsibly, AI can be a powerful assistant that helps you learn, grow, and become a better developer.

Please make sure to **update the example links in the prompt before pasting** it into ChatGPT — this ensures that the AI includes your actual GitHub repo and live site.  
If you forget to update them, ChatGPT may include placeholders or incorrect links.

Copy and paste the prompt below, and once you have added your links to the repo and live site, you can submit the prompt to ChatGPT:

> Can you write a professional `README.md` file for my final portfolio project?  
>  
> Include the following:  
> - My first name and last initial  
> - A short introduction about me as a student developer (My main portfolio page already has this, so you can include a **revised version of what I wrote there** in the README.)  
> - A short paragraph about what this project is and what I learned this year  
> - An overview of what my portfolio site includes  
> - A section that lists the projects featured in my portfolio, with a brief description of each project’s features or purpose  
> - A link to my GitHub repository: `https://github.com/yourusername/final-project-portfolio`  
> - A link to my live site that is running through GitHub Pages: `https://yourusername.github.io/final-project-portfolio/`  
>  
> **Make sure to update the two links above to match your actual GitHub repository and your live site URL.**

---

### Formatting Reminder

ChatGPT can help you write it, but it can sometimes make formatting mistakes. Make sure everything renders correctly on GitHub.

---

## 📁 How to Submit Your Files to the Class Repo

1. Fork the class repo (click “Fork” in the top-right)
2. Navigate to your class folder (e.g., `3rd-period/`)
3. Create a folder using your first name and last initial (e.g., `alex-g`)
4. Upload all your project files and your personal `README.md`

**Example folder structure:**

```
3rd-period/
└── alex-g/
├── index.html
├── style.css
├── script.js
└── README.md
```

Your filenames may vary. Just make sure all necessary files are included and clearly organized.

---

## 💾 Commit Your Files

1. Add a commit message like:
   `Add final project - Alex G.`
2. Click **Commit changes**

---

## 🔁 Submit a Pull Request

1. Go to the main page of your **forked copy** of the class repo
2. Click **Contribute > Open pull request**
3. Review your changes
4. Click **Create pull request**
5. Title it like:
   `Final project submission - Alex G.`

---

## ✅ Final Submission Checklist

You will be graded on:

1. Your styling (ensuring the design is modern and clean)
2. Your files being correctly linked in both your personal repository and your folder in the class repository
3. Projects working directly in your webpage (not through redirecting to CodePen)

   * Either opened in a new tab hosted by your repo
   * Or embedded directly in a `div` on your landing page
4. Including a professional and complete `README.md` file in your repo

Please confirm the following before submission:

* [ ] Website includes an About You section and Project Gallery
* [ ] Website is clean, modern, and functional
* [ ] All projects are working and visually match your website
* [ ] Website is deployed using GitHub Pages or Netlify
* [ ] A `README.md` is included in your project repo
* [ ] Your folder in the class repo includes all your project files and your `README.md`

Let me know if you have any questions or need help!
