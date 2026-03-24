# Deployment Guide | Triforce of the Gods

Follow these steps to deploy the project to **GitHub Pages** using the automated workflow.

## Prerequisites
- A GitHub repository with this codebase.
- DNS access for `triforceofthegods.com` (if using the custom domain).

## GitHub Configuration
1. **GitHub Pages Settings**:
   - Navigate to your repository on GitHub: **Settings > Pages**.
   - Under **Build and deployment > Source**, select **GitHub Actions**.

2. **Custom Domain Setup**:
   - In the **Custom domain** field, enter `triforceofthegods.com`.
   - Ensure the **Enforce HTTPS** checkbox is checked (once the domain is verified).

3. **DNS Configuration**:
   - Point your domain's A records to the GitHub Pages IP addresses:
     - `185.199.108.153`
     - `185.199.109.153`
     - `185.199.110.153`
     - `185.199.111.153`
   - Set up a CNAME record for `www` pointing to your GitHub Pages URL (e.g., `hallofthegods.github.io`).

## Automated Deployment
The deployment workflow (`.github/workflows/deploy.yml`) is triggered automatically on every push to the `main` branch. It will:
- Install dependencies with `pnpm`.
- Build the project for production.
- Upload the `dist/` folder to GitHub Pages.

You can monitor the progress of each deployment in the **Actions** tab of your repository.
