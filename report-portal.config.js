const timestampLocal = new Date().toISOString().replace(/[:.]/g, '-');

const RPconfig = {
  apiKey:
    'qascholar_uvIDXt8CSrq9OfRSCjdRHYXiR3oOfLbvlKSTLhOnijOnyCzpxmKVtqVIkPn_N9pU', // your token
  endpoint: 'https://demo.reportportal.io/api/v1', // API URL
  project: 'cchelloji_personal', // project name
  launch: `Playwright Launch - ${timestampLocal}`,
  description: 'Automated Playwright test run',
  attributes: [{ key: 'env', value: 'staging' }],
  debug: true,
};


module.exports = { RPconfig };
