# Vercel audit

## Verified

- GitHub repository: `Collaboration95/Personal-Website`
- Default branch: `main`
- GitHub project homepage: https://guruprasathgopal-collaboration95s-projects.vercel.app
- The current production URL responds and exposes the existing Next.js page.
- The repository has no `vercel.json`, `.vercel` directory, or checked-in deployment settings.
- `main` has no branch-protection rule reported by the GitHub API.

## Not locally verifiable

- Vercel CLI is not installed in the workspace.
- No Vercel project ID, deployment token, environment variable values, or custom domain mapping is present locally; no secrets were inspected or added.
- Preview/production Git integration ownership and deployment logs require the connected Vercel account, so this rebuild documents the route without claiming a deployment from the local shell.

## Safe deployment route

1. Push `codex/portfolio-integration` for a Vercel preview through the repository's existing Git integration.
2. Open and verify the generated preview URL.
3. Merge the reviewed branch into `main` only after the preview and local checks pass.
4. Verify the production URL above after the Git integration deploys `main`.

## Rollback

The pre-rebuild production reference is commit `9da9d19` on `main`. If the connected Vercel project exposes the prior deployment, use its rollback action; otherwise revert the integration commit in a new Git commit rather than force-pushing.
