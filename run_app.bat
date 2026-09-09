@echo off
set "PATH=%~dp0..\nodejs;%PATH%"
cd /d "%~dp0"
echo ========================================================
echo   GAJANANA CONSTRUCTIONS & materials - React Vite App
echo ========================================================
echo Starting development server on http://localhost:5173 ...
call npm run dev -- --host --port 5173
pause
