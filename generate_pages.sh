#!/bin/bash

# Navigate to the src directory
cd src || exit

# Create the pages directory
mkdir -p pages

# Define an array of component names
components=(
  "IntroScreen"
  "InventoryScreen"
  "TrophiesScreen"
  "SocialScreen"
  "UpgradesScreen"
  "MapScreen"
  "MapChinatownScreen"
  "MarketScreen"
  "MarketTradeScreen"
  "ProductionScreen"
  "ProductionActiveScreen"
  "RaidLobbyScreen"
  "ActiveRaidScreen"
  "RaidPlayersScreen"
  "RaidProtectedPlayerScreen"
  "RaidWinScreen"
  "AirdropScreen"
)

# Create a file for each component
for component in "${components[@]}"
do
  cat <<EOF > "pages/${component}.tsx"
import React from "react";

export const ${component} = () => {
  return (
    <div>
      <h1>${component}</h1>
    </div>
  );
};
EOF
  echo "Created pages/${component}.tsx"
done

echo "✅ All component pages created successfully in src/pages/"
