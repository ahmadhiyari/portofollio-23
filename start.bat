@echo off
title Portfolio - dev server
cd /d "%~dp0"
start "Portfolio dev server" cmd /k "npm run dev"
timeout /t 5 /nobreak >nul
start "" "http://127.0.0.1:3000"
