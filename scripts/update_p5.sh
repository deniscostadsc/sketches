#!/usr/bin/env bash

set -euo pipefail

LATEST_RELEASE=$(curl -L -s -H 'Accept: application/json' \
    https://github.com/processing/p5.js/releases/latest)
# shellcheck disable=SC2001
LATEST_VERSION=$(echo "$LATEST_RELEASE" |\
    sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')

cd lib || exit 1

mv p5.min.js old_p5.min.js
mv p5.sound.min.js old_p5.sound.min.js
mv p5.dom.min.js old_p5.dom.min.js

wget -qc "https://github.com/processing/p5.js/releases/download/$LATEST_VERSION/p5.min.js"
wget -qc "https://github.com/processing/p5.js/releases/download/$LATEST_VERSION/p5.sound.min.js"
wget -qc "https://github.com/processing/p5.js/releases/download/$LATEST_VERSION/p5.dom.min.js"

rm old_*
