# Git Commands to Push to GitHub

## Step 1: Initialize Git Repository
```bash
cd /Users/raghavi/Documents/Raghavi-Birthday-Webpage
git init
```

## Step 2: Add All Files
```bash
git add .
```

## Step 3: Create Initial Commit
```bash
git commit -m "Initial commit: Birthday trip diary webpage with handwritten font and old book styling"
```

## Step 4: Create Repository on GitHub
1. Go to https://github.com/new
2. Create a new repository (e.g., "birthday-trip-webpage" or "raghavi-birthday-diary")
3. **DO NOT** initialize with README, .gitignore, or license (since you already have files)

## Step 5: Connect to GitHub and Push
Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Example (if your username is "raghavi" and repo is "birthday-trip"):
```bash
git remote add origin https://github.com/raghavi/birthday-trip.git
git branch -M main
git push -u origin main
```

## Step 6: Enable GitHub Pages
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be live at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## Quick Copy-Paste (After creating repo on GitHub):
```bash
cd /Users/raghavi/Documents/Raghavi-Birthday-Webpage
git init
git add .
git commit -m "Initial commit: Birthday trip diary webpage with handwritten font and old book styling"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```
