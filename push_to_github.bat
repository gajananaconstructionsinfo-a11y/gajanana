@echo off
cd /d "%~dp0"
echo ========================================================
echo   GAJANANA CONSTRUCTIONS & materials - GitHub Push
echo ========================================================
echo Pushing committed files to https://github.com/gajananaconstructionsinfo-a11y/gajanana.git ...
echo.
git push -u origin main
echo.
if %ERRORLEVEL% equ 0 (
    echo Successfully pushed to GitHub!
) else (
    echo If prompted, sign in with your GitHub account in the browser window or enter a Personal Access Token.
)
pause
