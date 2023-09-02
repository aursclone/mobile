@echo off
echo AUTO PUSH TO GITHUB
git init -b main
git add .
git commit -m "update"
git pull
git push
pause