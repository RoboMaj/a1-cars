import ghpages from 'gh-pages';
import fs from 'fs';
import { execSync } from 'child_process';
import path from 'path';

try {
    // 1. Build the project
    console.log('Building project...');
    execSync('npm run build', { stdio: 'inherit' });

    // 2. Create .nojekyll file to allow files starting with _ (like _assets)
    console.log('Creating .nojekyll file...');
    fs.writeFileSync(path.resolve('dist', '.nojekyll'), '');

    // 3. Deploy to gh-pages
    console.log('Deploying to GitHub Pages...');
    ghpages.publish('dist', (err) => {
        if (err) {
            console.error('Deployment failed:', err);
            process.exit(1);
        } else {
            console.log('Deployment successful!');
            console.log('Please wait a few minutes for GitHub to update the site.');
        }
    });

} catch (error) {
    console.error('An error occurred:', error);
    process.exit(1);
}
