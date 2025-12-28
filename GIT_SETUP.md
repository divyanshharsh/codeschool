# Git Setup Guide for CodeSchool

## Fixing "src refspec main does not match any" Error

This error occurs when you try to push but:
1. No commits have been made yet, OR
2. Your branch is named something other than "main" (like "master")

## Solution Steps

### Step 1: Check Current Status
```powershell
git status
git branch
```

### Step 2: Initialize Repository (if not already done)
```powershell
git init
```

### Step 3: Add All Files
```powershell
git add .
```

### Step 4: Make Your First Commit
```powershell
git commit -m "Initial commit: CodeSchool K-12 EdTech Platform"
```

### Step 5: Rename Branch to Main (if needed)
If your branch is named "master" instead of "main":
```powershell
git branch -M main
```

### Step 6: Add Remote Repository
```powershell
git remote add origin https://github.com/divyanshharsh/codeschool.git
```

### Step 7: Push to Remote
```powershell
git push -u origin main
```

## Complete Setup Script (Run All at Once)

```powershell
# Navigate to project directory
cd C:\Users\HP\Downloads\EDTECH

# Initialize git (if not already done)
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: CodeSchool K-12 EdTech Platform - Enhanced landing page with comprehensive features"

# Rename branch to main (if needed)
git branch -M main

# Add remote (if not already added)
git remote add origin https://github.com/divyanshharsh/codeschool.git

# Or update existing remote
git remote set-url origin https://github.com/divyanshharsh/codeschool.git

# Push to remote
git push -u origin main
```

## If Remote Already Exists

If you get "remote origin already exists" error:
```powershell
# Remove existing remote
git remote remove origin

# Add new remote
git remote add origin https://github.com/divyanshharsh/codeschool.git

# Push
git push -u origin main
```

## Alternative: If Repository is Empty on GitHub

If your GitHub repository is completely empty, you might need to:
1. Create a README.md on GitHub first, OR
2. Use force push (be careful!):
```powershell
git push -u origin main --force
```

## Verify Setup

After pushing, verify with:
```powershell
git remote -v
git branch -a
```

## Common Issues

### Issue: "fatal: not a git repository"
**Solution:** Run `git init` first

### Issue: "nothing to commit, working tree clean"
**Solution:** You already have commits. Just run `git push -u origin main`

### Issue: "error: failed to push some refs"
**Solution:** 
- Make sure you have commits: `git log`
- Check remote: `git remote -v`
- Try: `git push -u origin main --force` (only if safe to overwrite)

## Recommended .gitignore

Make sure you have a `.gitignore` file (already created) that excludes:
- node_modules/
- .env files
- dist/ and build/ folders
- IDE files

