cd career-recommendation 
cd frontend
npm cache clean --force
npm cache verify
rm -rf node_modules
npm install
npm audit fix
npm run build