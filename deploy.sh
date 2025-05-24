#!/bin/bash
rsync -av --progress -e "ssh -p 30022" \
.output/ \
package.json
 root@47.250.131.8:/var/www/tjgwebsite/.output/


# Configuration
USER="root"
HOST="47.250.131.8"
PORT=30022
SOURCE=".output/ "
DESTINATION="/var/www/tjgwebsite/.output/"
# SSH_KEY="$HOME/.ssh/id_rsa"  # Optional: specify SSH key if not using default

# Rsync command
# rsync -avz -e "ssh -i -p $PORT" "$SOURCE" "$USER@$HOST:$DESTINATION"
# rsync -avz -e "ssh -i $SSH_KEY -p $PORT" "$SOURCE" "$USER@$HOST:$DESTINATION"

ITEMS_TO_COPY=(".output/" "package.json")

# Rsync copy operation
for item in "${ITEMS_TO_COPY[@]}"; do
  if [ -e "$item" ]; then
    rsync -avz -e "ssh -i -p $PORT" "$item" "$USER@$HOST:$DESTINATION"
  else
    echo "Warning: $item not found in current directory."
  fi
done