#!/usr/bin/env bash


export APP_NAME="frontend"
export PROJECT_ID="dseafit"

cd $APP_NAME

# install app
npm install
npm audit fix # just in case vulnerabilities

# test it works, view in browser, then CTRL+C

# build app for production (creates build/ folder)
npm run build

# create app engine config file (app.yaml)
cat > app.yaml << EOF
env: standard
runtime: nodejs10
service: default
handlers:
  - url: /static
    static_dir: build/static
  - url: /(.*\.(json|ico|js))$
    static_files: build/\1
    upload: build/.*\.(json|ico|js)$
  - url: .*
    static_files: build/index.html
    upload: build/index.html
EOF

# deploy app to app engine (if first deploy potentially select region)
gcloud app deploy --project=$PROJECT_ID --quiet

# wait several minutes then visit the URL provided in output
gcloud app browse -s $APP_NAME
