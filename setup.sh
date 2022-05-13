#!/bin/bash
if [[ "$OSTYPE" == "linux-gnu" ]]; then
  rm -rf node_modules/ && \
  rm -rf package-lock.json && \
  npm install --force && \
  npm run clean
  elif [[ "$OSTYPE" == "darwin"* ]]; then
  rm -rf node_modules/ && \
  rm -rf package-lock.json && \
  npm install --force && \
  npm run clean
else
  echo "eleos"
fi
