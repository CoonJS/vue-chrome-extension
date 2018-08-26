#!/usr/bin/env bash

rm -rf ./dist

mkdir dist/
mkdir dist/icons/

cp ./index.html ./dist/
cp ./manifest.json ./dist/
cp ./icons/* ./dist/icons/