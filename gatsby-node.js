exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;

  createRedirect({
    fromPath: `/blog/index.xml`,
    toPath: `/rss.xml`,
  });
};
