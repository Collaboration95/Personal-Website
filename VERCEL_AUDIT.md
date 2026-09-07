# Vercel audit

## Verified

- GitHub repository: `Collaboration95/Personal-Website`
- Default branch: `main`
- GitHub project homepage: https://guruprasathgopal-collaboration95s-projects.vercel.app
- The current production URL responds and exposes the existing Next.js page.
- The repository has no `vercel.json`, `.vercel` directory, or checked-in deployment settings.
- `main` has no branch-protection rule reported by the GitHub API.
- GitHub deployment `6038981910` for commit `4db6a43` completed successfully.
- Preview URL emitted by the deployment status: https://guruprasathgopal-5259bvwoz-collaboration95s-projects.vercel.app

## Not locally verifiable

- Vercel CLI is not installed in the workspace.
- No Vercel project ID, deployment token, environment variable values, or custom domain mapping is present locally; no secrets were inspected or added.
- Preview/production Git integration ownership and deployment logs require the connected Vercel account, so this rebuild documents the route without claiming a deployment from the local shell.
- Opening the preview from this workspace redirects to `vercel.com/login` because
  Vercel Deployment Protection is enabled. The deployment is built, but its
  hosted page cannot be inspected without an authenticated Vercel session or
  project bypass token.

## Safe deployment route

1. Authenticate to the Vercel preview or provide its temporary bypass token.
2. Open and verify the generated preview URL.
3. Merge the reviewed branch into `main` only after the preview and local checks pass.
4. Verify the production URL above after the Git integration deploys `main`.

## Rollback

The pre-rebuild production reference is commit `9da9d19` on `main`. If the connected Vercel project exposes the prior deployment, use its rollback action; otherwise revert the integration commit in a new Git commit rather than force-pushing.
