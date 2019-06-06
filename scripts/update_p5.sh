#!/usr/bin/env bash

set -euo pipefail

function download_released_file_from_github {
    user_repo=$1
    file=$2
    destiny=$3

    latest_release=$(curl -L -s -H 'Accept: application/json' \
        https://github.com/processing/p5.js/releases/latest)
    # shellcheck disable=SC2001
    latest_version=$(echo "$latest_release" |\
        sed -e 's/.*"tag_name":"\([^"]*\)".*/\1/')

    cd "$destiny" || exit 1

    mv "$file" "old_$file"

    wget -qc "https://github.com/$user_repo/releases/download/$latest_version/$file"

    rm old_*
    cd - || exit 1
}

download_released_file_from_github "processing/p5.js" "p5.dom.min.js" "lib"
download_released_file_from_github "processing/p5.js" "p5.min.js" "lib"
download_released_file_from_github "processing/p5.js" "p5.sound.min.js" "lib"
