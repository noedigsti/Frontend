name: Update Packages Table

on:
  push:
    branches:
      - main
    paths:
      - 'package.json'

jobs:
  update-packages-table:
    runs-on: ubuntu-latest
    steps:
      - name: Check out repository
        uses: actions/checkout@v2

      - name: Set up Node.js
        uses: actions/setup-node@v2
        with:
          node-version: 14

      - name: Install dependencies
        run: npm ci

      - name: Update Packages Table
        run: npm run update-packages-table

      - name: Commit changes
        run: |
          git config user.name "GitHub Action"
          git config user.email "action@github.com"
          git add README.md
          git commit -m "Update packages table in README.md" || true
          git push
