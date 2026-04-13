Set-StrictMode -Version Latest
$ErrorActionPreference = "Stop"

Set-Location -LiteralPath (Split-Path -Parent $PSScriptRoot)

$files = @(
	"src/pages/api/auth/callback.ts",
	"src/middleware.ts",
	"vercel.json",
	"public/admin/config.yml"
)

git add -- $files
git commit -m "Add GitHub OAuth callback for Sveltia CMS"
