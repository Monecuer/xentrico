// scripts/postinstall.js
const { execSync } = require('child_process');

if (process.env.CI) {
  console.log('🧱 CI detected: skipping Sanity GraphQL deploy during Netlify build.');
  process.exit(0);
}

try {
  console.log('🚀 Deploying Sanity GraphQL API...');
  execSync('sanity graphql deploy --dataset production --playground', { stdio: 'inherit' });
} catch (err) {
  console.error('❌ Sanity GraphQL deploy failed:', err);
  process.exit(1);
}
