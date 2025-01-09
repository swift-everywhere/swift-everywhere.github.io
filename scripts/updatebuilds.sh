#!/bin/sh -ex

cd ../swift-package-builds
git pull
cd -

cat ../swift-package-builds/index/android.json | jq 'to_entries | map(.value) | sort_by(.stars) | reverse' > _data/android.json

