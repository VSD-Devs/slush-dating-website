#!/bin/bash

# Ensure PostgreSQL service is running
brew services start postgresql@14

# Wait for PostgreSQL to be ready
until pg_isready -h localhost; do
  echo "Waiting for PostgreSQL to be ready..."
  sleep 2
done

# Create the database if it doesn't exist
createdb slush_db 2>/dev/null || true

# Run Prisma migrations and generate client
echo "Generating Prisma client..."
npx prisma generate

echo "Pushing database changes..."
npx prisma db push

echo "Seeding the database..."
npx prisma db seed

echo "Production database initialized successfully!" 