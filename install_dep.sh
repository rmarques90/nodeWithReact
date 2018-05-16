#!/usr/bin/env bash
echo "Iniciando instalacao de pacotes..."
npm install
echo "instalacao pacotes server ok"
cd client
npm install
echo "instalacao pacotes front-end ok"

