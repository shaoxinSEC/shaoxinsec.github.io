# 本地开发服务器（绕过 Clash 代理，避免 localhost 502）
$env:NO_PROXY = "localhost,127.0.0.1"
$env:no_proxy = "localhost,127.0.0.1"

$env:Path = [System.Environment]::GetEnvironmentVariable("Path", "Machine") + ";" + [System.Environment]::GetEnvironmentVariable("Path", "User")

Set-Location $PSScriptRoot\..

Write-Host "Starting Hugo at http://127.0.0.1:1313/" -ForegroundColor Green
Write-Host "Do NOT open public/index.html directly — use the URL above." -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop." -ForegroundColor Yellow

hugo server -D --disableFastRender --bind 127.0.0.1 --baseURL http://127.0.0.1:1313/
