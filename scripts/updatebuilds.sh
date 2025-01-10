#!/bin/bash -e
SCRIPT=$(realpath $0)
cd $(dirname ${SCRIPT})/..

PACKAGES="../swift-package-builds/index/packages.json"
INDEX="../swift-package-builds/index/android.json"
STATS="_data/android_stats.json"

cd ../swift-package-builds
git pull
cd -

cat ${INDEX} | jq 'to_entries | map(.value) | sort_by(.stars) | reverse' > _data/android.json

echo "{}" > ${STATS}

COUNT=$(cat ${INDEX} | jq 'length')
jq --arg COUNT "$COUNT" '."total_packages" = $COUNT' $STATS > $STATS.new && mv $STATS.new $STATS

SUCCESS=$(cat ${INDEX} | jq '[.[] | select(.status == "success")] | length')
jq --arg SUCCESS "$SUCCESS" '."success_packages" = $SUCCESS' $STATS > $STATS.new && mv $STATS.new $STATS


cat "${STATS}"
