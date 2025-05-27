const axios = require('axios');
const fs = require('fs');
const path = require('path');

const GITHUB_USERNAME = 'edonberishaa';

async function fetchRepos() {
  try {
    const reposResponse = await axios.get(`https://api.github.com/users/${GITHUB_USERNAME}/repos`);
    const repos = reposResponse.data;

    const processedRepos = [];

    for (const repo of repos) {
      if (repo.private) continue;

      let readme = '';
      try {
        const readmeResponse = await axios.get(`https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/readme`, {
          headers: { Accept: 'application/vnd.github.v3.raw' }
        });
        readme = readmeResponse.data;
      } catch (e) {
        readme = 'No README found.';
      }

      processedRepos.push({
        name: repo.name,
        description: repo.description,
        url: repo.html_url,
        readme: readme
      });
    }

    const outputPath = path.join(__dirname, '../src/data/repos.json');
    fs.writeFileSync(outputPath, JSON.stringify(processedRepos, null, 2));
    console.log('Repos saved to repos.json ✅');
  } catch (error) {
    console.error('Error fetching repos:', error.message);
  }
}

fetchRepos();
