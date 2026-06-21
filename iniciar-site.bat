@echo off
cd /d "%~dp0"

where node >nul 2>nul
if errorlevel 1 (
  echo Node.js nao foi encontrado.
  echo Instale o Node.js em https://nodejs.org e abra este arquivo de novo.
  pause
  exit /b 1
)

echo.
echo AdC - Sala Viva
echo Link neste computador: http://127.0.0.1:4173/
echo Para abrir em outro aparelho na mesma rede, use o link "Link na rede local" que aparecera abaixo.
echo Mantenha esta janela aberta para o site continuar funcionando.
echo.
start "" "http://127.0.0.1:4173/"
node server.mjs
pause
