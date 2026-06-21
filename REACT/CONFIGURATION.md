# 📋 Configuration Files Documentation

This guide explains all the configuration files used across React projects in the workspace.

---

## ⚙️ package.json

**Purpose:** Project metadata and dependency management

### What It Does:
- Defines project name, version, description
- Lists all dependencies (libraries needed)
- Lists dev dependencies (tools for development)
- Defines npm scripts (build, dev, lint, preview commands)
- Specifies Node.js version requirements

### Common Structure:
```json
{
  "name": "react-app",
  "version": "0.0.1",
  "type": "module",
  "scripts": {
    "dev": "vite",                    // Start dev server
    "build": "vite build",            // Build for production
    "lint": "eslint .",               // Run linting
    "preview": "vite preview"         // Preview production build
  },
  "dependencies": {
    "react": "^19.2.6",               // React library
    "react-dom": "^19.2.6"            // React DOM library
  },
  "devDependencies": {
    "vite": "^8.0.12",                // Build tool
    "@vitejs/plugin-react": "^4.0.0", // React plugin for Vite
    "eslint": "^8.50.0"               // Code quality tool
  }
}
```

### Key Dependencies:

#### Runtime Dependencies
- **react** - Core React library
- **react-dom** - React rendering to DOM
- **react-router-dom** - Routing (some projects)
- **uuid** - Unique ID generation (todo app)

#### Dev Dependencies
- **vite** - Build tool and dev server
- **@vitejs/plugin-react** - React JSX transformation
- **eslint** - Code linting
- **eslint-plugin-react** - React linting rules
- **eslint-plugin-react-hooks** - Hooks linting rules

#### Special Dependencies
- **tailwindcss** - Utility CSS (todo app)
- **@tailwindcss/vite** - Tailwind Vite plugin

### Available Scripts:

```bash
npm run dev      # Start development server (with hot reload)
npm run build    # Create production build
npm run lint     # Check code quality
npm run preview  # Preview production build locally
```

### Version Ranges:
```
^1.2.3   → Allows 1.2.3, 1.2.4, 1.3.0 (minor/patch updates)
~1.2.3   → Allows 1.2.3, 1.2.4 (patch updates only)
1.2.3    → Exact version 1.2.3
*        → Any version
```

---

## 🔨 vite.config.js

**Purpose:** Vite build tool configuration

### What It Does:
- Configures Vite dev server behavior
- Sets up React JSX transformation
- Defines build output settings
- Configures module resolution
- Sets up optimization rules

### Standard Configuration:
```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],  // Enable React JSX support
})
```

### What `react()` Plugin Does:
- Transforms JSX to JavaScript function calls
- Enables React Fast Refresh (hot module replacement)
- Optimizes React code for development

### Key Features:

#### Hot Module Replacement (HMR)
- Changes to code reload instantly
- Preserves component state during edits
- No full page reload needed

#### Module Resolution
- Resolves import statements
- Handles file extensions
- Alias configuration

#### Build Optimization
- Code splitting
- Tree shaking (removing unused code)
- Minification in production
- Source maps for debugging

### Dev Server Features:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,              // Dev server port
    open: true,              // Auto-open browser
    strictPort: false        // Try different port if taken
  }
})
```

---

## 🔍 eslint.config.js

**Purpose:** Code quality and style enforcement

### What It Does:
- Defines code quality rules
- Enforces consistent style
- Catches common errors
- Prevents bad patterns
- Validates React best practices
- Checks hooks usage

### Standard Configuration:
```javascript
import js from '@eslint/js'
import globals from 'globals'
import react from 'eslint-plugin-react'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'

export default [
  {
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser
    }
  },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx}'],
    languageOptions: { parserOptions: { ecmaFeatures: { jsx: true } } },
    rules: {
      ...react.configs.recommended.rules,
      ...reactHooks.configs.recommended.rules,
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    }
  }
]
```

### What Each Plugin Does:

#### ESLint Core
```javascript
js.configs.recommended  // Basic JavaScript rules
```
- Enforces var/let/const usage
- Prevents duplicate variable names
- Catches syntax errors
- Best practices for JavaScript

#### React Plugin
```javascript
react.configs.recommended  // React-specific rules
```
- Components must return JSX/null
- Checking props usage
- Event handler naming (on*)
- React-specific best practices

#### React Hooks Plugin
```javascript
reactHooks.configs.recommended  // Hooks-specific rules
```
- Hooks can only be called in React functions
- Dependency array validation
- Hooks call order
- useEffect cleanup functions

#### React Refresh Plugin
```javascript
reactRefresh.recommended  // Fast Refresh rules
```
- Allows functional components
- Validates component exports

### Common ESLint Rules:

| Rule | Purpose | Example |
|------|---------|---------|
| `no-unused-vars` | Find unused variables | Warns if declared but not used |
| `no-const-assign` | Prevent const reassignment | `const x = 1; x = 2;` ❌ |
| `no-duplicate-keys` | Prevent duplicate object keys | `{ a: 1, a: 2 }` ❌ |
| `no-undef` | Find undefined variables | `console.log(notDefined)` ❌ |
| `react/no-unescaped-entities` | Escape special characters | `<div>Don't</div>` ❌ |
| `react-hooks/rules-of-hooks` | Hooks in right place | Hooks at component top level only ✅ |

### Running Linting:
```bash
npm run lint           # Check for violations
npm run lint -- --fix  # Auto-fix fixable violations
```

---

## 📋 Other Configuration Files

### index.html
**Purpose:** React app entry point HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <title>React App</title>
  </head>
  <body>
    <div id="root"></div>          <!-- React renders here -->
    <script type="module" src="/src/main.jsx"></script>  <!-- App entry -->
  </body>
</html>
```

**What Happens:**
1. Browser loads index.html
2. JavaScript loads main.jsx
3. React mounts to `<div id="root">`
4. App component renders

### .gitignore
**Purpose:** Tell Git which files to ignore

```
node_modules/        # Dependencies (too many files)
dist/               # Build output
.env                # Environment secrets
.DS_Store           # macOS system files
```

**Why:**
- `node_modules/` can have 100,000+ files
- Don't commit generated files
- Keep repository size small
- Protect sensitive information

### .env (Environment Variables)
**Purpose:** Store configuration and secrets

```
VITE_API_URL=https://api.example.com
VITE_API_KEY=secret_key_here
```

**Access in Code:**
```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```

---

## 🚀 Development Workflow

### Initial Setup
```bash
npm install  # Install all dependencies from package.json
```

### Development
```bash
npm run dev  # Start dev server with hot reload
# Visit http://localhost:5173
```

### Code Quality
```bash
npm run lint         # Check for issues
npm run lint --fix   # Auto-fix issues
```

### Production Build
```bash
npm run build   # Create optimized build
npm run preview # Test production build locally
```

---

## 📚 Configuration Hierarchy

```
package.json (dependencies, scripts)
    ↓
vite.config.js (build configuration)
    ↓
index.html (entry point)
    ↓
main.jsx (React entry)
    ↓
App.jsx (app component)

ESLint runs alongside (code quality)
```

---

## 🎯 Key Takeaways

| File | Controls |
|------|----------|
| **package.json** | What libraries to use |
| **vite.config.js** | How to build/dev |
| **eslint.config.js** | Code quality rules |
| **index.html** | HTML entry point |
| **.gitignore** | What NOT to commit |
| **.env** | Configuration values |

---

## 🔧 Modifying Configurations

### Add New Dependency
```bash
npm install package-name
# or for dev dependency
npm install --save-dev package-name
```

### Update Script
Edit `package.json`:
```json
"scripts": {
  "dev": "vite",
  "newscript": "command here"  // Add new script
}
```

### Change Lint Rules
Edit `eslint.config.js`:
```javascript
rules: {
  'no-console': 'warn'  // Add new rule
}
```

### Configure Vite
Edit `vite.config.js`:
```javascript
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000  // Change port
  }
})
```

---

## ⚠️ Common Configuration Issues

### Issue: Port Already in Use
**Solution:** Change port in vite.config.js or kill process on port

### Issue: Module Not Found
**Solution:** Install dependency with `npm install`

### Issue: ESLint Errors
**Solution:** Run `npm run lint --fix` or adjust rules

### Issue: Old Dependencies
**Solution:** Run `npm update` to update to latest versions

---

## 📖 More Information

- [Vite Docs](https://vitejs.dev/config/)
- [ESLint Docs](https://eslint.org/docs/latest/)
- [npm Docs](https://docs.npmjs.com/)
- [Tailwind Config](https://tailwindcss.com/docs/configuration) (if using Tailwind)
- [React Router Config](https://reactrouter.com/en/main)

---

## 🎓 Learning Focus

When working with configurations:
1. **Understand What** - What does this file do?
2. **Understand Why** - Why do we need it?
3. **Understand How** - How does it work?
4. **Experiment** - Try changing values
5. **Debug** - Check error messages for clues

Most of the time, default configurations work great. As you grow, you'll customize them for your needs.
