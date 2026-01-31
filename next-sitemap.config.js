const axios = require("axios");

module.exports = {
  siteUrl: "https://www.brikzy.in",
  generateRobotsTxt: true,
  additionalPaths: async (config) => {
    const res = await axios.get(
      "https://searchmyspacebackend-production.up.railway.app/api/v1/project/all"
    );
    const projects = res.data.projects || [];

    return projects.map((project) => ({
      loc: `${config.siteUrl}/${project.purl}`,
      lastmod: new Date().toISOString(),
    }));
  },
};
