#!/bin/bash
#6xargs monorepo

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

PRODUCTION=false
CLEAN=false

while [[ $# -gt 0 ]]; do
  case $1 in
    --production)
      PRODUCTION=true
      shift
      ;;
    --clean)
      CLEAN=true
      shift
      ;;
    *)
      echo -e "${RED}Unknown option: $1${NC}"
      echo "Usage: $0 [--production] [--clean]"
      exit 1
      ;;
  esac
done

echo -e "${BLUE}Building 6xargs monorepo...${NC}"

if [ "$CLEAN" = true ]; then
  echo -e "${YELLOW}Cleaning previous builds...${NC}"
  rm -rf node_modules
  rm -rf apps/*/node_modules
  rm -rf packages/*/node_modules
  rm -rf apps/*/dist
  rm -rf apps/*/build
  rm -rf packages/*/dist
  rm -rf packages/*/lib
fi

echo -e "${YELLOW}Installing dependencies...${NC}"
npm ci --workspaces

echo -e "${YELLOW}Building shared packages...${NC}"
npm run build --workspace=@sixargs/types
npm run build --workspace=@sixargs/utils
npm run build --workspace=@sixargs/constants

echo -e "${YELLOW}Building applications...${NC}"

if [ "$PRODUCTION" = true ]; then
  echo -e "${BLUE}Building for production...${NC}"
  NODE_ENV=production npm run build --workspace=@sixargs/backend
  NODE_ENV=production npm run build --workspace=@sixargs/frontend
else
  echo -e "${BLUE}Building for development...${NC}"
  npm run build --workspace=@sixargs/backend
  npm run build --workspace=@sixargs/frontend
fi

echo -e "${YELLOW}Running tests...${NC}"
npm run test --workspaces --if-present

echo -e "${YELLOW}Type checking...${NC}"
npm run typecheck --workspaces --if-present

echo -e "${GREEN}Build completed successfully!${NC}"

if [ "$PRODUCTION" = true ]; then
  echo -e "${GREEN}Production build ready for deployment${NC}"
else
  echo -e "${GREEN}Development build ready${NC}"
fi