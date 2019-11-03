#!/bin/bash

sleep 2

echo "Running makemigrations..."
python3 manage.py makemigrations

echo 
echo "Migrating apps..."

python3 manage.py migrate
python3 manage.py showmigrations

echo
echo "Job completed"
