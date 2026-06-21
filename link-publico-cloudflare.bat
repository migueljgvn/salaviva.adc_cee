@echo off
cd /d "%~dp0"

where cloudflared >nul 2>nul
if errorlevel 1 (
  echo O cloudflared nao esta instalado.
  echo Instale o Cloudflare Tunnel e rode este arquivo de novo.
  echo Site oficial: https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/downloads/
  pause
  exit /b 1
)

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado.
  pause
  exit /b 1
)

start "AdC Sala Viva Local" cmd /c "node server.mjs"
echo.
echo Quando aparecer uma URL parecida com https://alguma-coisa.trycloudflare.com, esse sera o link publico.
echo Esse link funciona fora da sua rede enquanto esta janela ficar aberta.
echo Para link fixo para sempre, precisa hospedar o site ou configurar um tunel permanente com conta Cloudflare.
echo.
cloudflared tunnel --url http://127.0.0.1:4173
pause
