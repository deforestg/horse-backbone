#!/bin/bash

# check that npm is installed
which npm >/dev/null 2>&1
if [ "$?" != "0" ]; then
    echo "npm is not installed. Please install using your preferred method (ports, brew, etc.)"
    exit 1
fi

# npm opts, including hack to get as much out of cache as possible
npmopts="--save --offline --cache-min 999999999"

npm install $npmopts
