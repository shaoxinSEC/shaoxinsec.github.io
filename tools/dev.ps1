$ErrorActionPreference = "Stop"
Set-Location (Split-Path $PSScriptRoot -Parent)

$env:HTTP_PROXY = "http://127.0.0.1:7890"
$env:HTTPS_PROXY = "http://127.0.0.1:7890"
$env:NO_PROXY = "127.0.0.1,localhost"

Write-Host "[RUN] Starting Hexo dev server at http://127.0.0.1:4000/"
npx hexo clean
npx hexo server
