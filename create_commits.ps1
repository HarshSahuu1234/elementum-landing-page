$ErrorActionPreference = "Continue"

# Remove existing Git repo cleanly
if (Test-Path ".git") {
    Remove-Item -Recurse -Force .git
}

git init
git config user.name "Harsh"
git config user.email "harshsahuu1234@gmail.com"

# Explicitly clear staging area just in case (though git init is fresh)
git rm -rf --cached . | Out-Null

# Commit 1
Write-Host "Creating Commit 1..."
git add package.json package-lock.json vite.config.ts tsconfig.json tsconfig.app.json tsconfig.node.json index.html public/ .gitignore eslint.config.js
git commit -m "chore: Initial project setup with React, Vite, and TypeScript"

# Commit 2
Write-Host "Creating Commit 2..."
git add tailwind.config.js postcss.config.js src/index.css src/main.tsx src/App.tsx
git commit -m "feat: Configure Tailwind CSS and base styling"

# Commit 3
Write-Host "Creating Commit 3..."
git add src/components/Navbar.tsx src/assets/
git commit -m "feat: Implement global Navigation component"

# Commit 4
Write-Host "Creating Commit 4..."
git add src/components/Hero.tsx
git commit -m "feat: Build animated Hero section from Figma designs"

# Commit 5
Write-Host "Creating Commit 5..."
git add src/components/Features.tsx src/components/Services.tsx
git commit -m "feat: Add responsive Features and Services sections"

# Commit 6
Write-Host "Creating Commit 6..."
git add src/components/Testimonials.tsx src/components/Footer.tsx
git commit -m "feat: Integrate Testimonials and Footer components"

# Commit 7
Write-Host "Creating Commit 7..."
git add Dockerfile .dockerignore
git commit -m "chore: Dockerize application for consistent deployment"

# Commit 8
Write-Host "Creating Commit 8..."
git add README.md
git commit -m "docs: Add comprehensive project documentation"

# Commit 9
Write-Host "Creating Commit 9 (Catch all remaining files)..."
git add .
$status = git status --porcelain
if ($status) {
    git commit -m "chore: Final project polish and assemble core components"
}

Write-Host "Done staging commits!"
