#!/bin/bash

pushd static

git init
git remote add webpages git@github.com:smooks/web.git
git fetch --depth=1 webpages gh-pages

git add --all
git commit -m "webpages"
git merge --no-edit -s ours remotes/webpages/gh-pages

git push webpages master:gh-pages

rm -rf .git

popd