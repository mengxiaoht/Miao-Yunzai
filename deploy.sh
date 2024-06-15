#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git init
git add -A
git commit -m 'update: 修复引用'

git push -f git@github.com:yoimiya-kokomi/Miao-Yunzai.git master:genshin