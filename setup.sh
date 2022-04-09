echo 'Enter Project Name:'
read NEW_PROJECT_NAME

echo "ProjectName=$NEW_PROJECT_NAME"

# doing the replacement
sed -i "s/template-react-typescript-webpack/$NEW_PROJECT_NAME/" package.json
sed -i "s/template-react-typescript-webpack/$NEW_PROJECT_NAME/" src/components/HelloWorld.tsx
echo "# $NEW_PROJECT_NAME" > README.md

# clean up the sh file
rm setup.sh testLib.js
