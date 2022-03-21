module.exports = {
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-theme-amaranth',
      options: {
        basePath: `/blog`,
        website: {
          fbAppId: '1825356251115265',
          twitterName: 'Uvi_jr',
          url: 'https://joshuvi-portfolio.herokuapp.com',
          googleAnalyticsId: 'UA-47311644-5',
          copyright: '© Copyright 2022 | Josh Uvi',
          disqusShortname: 'https-vagr9k-github-io-gatsby-advanced-starter',
          logoUrl: '/logos/logo.png',
        },

        user: {
          id: 'JoshUvi',
          firstName: 'Josh',
          lastName: 'Uvi',
          twitterName: 'Uvi_jr',
          linkedIn: 'your-linkedin',
          github: 'Josh-Uvi',
          email: 'joshuauvbiekpahor@gmail.com',
          location: 'London, United Kingdom',
          about: 'A full-stack web developer looking for a challenge!',
          avatar: 'https://i.pravatar.cc/300',
        },

        organization: {
          name: 'Uvi Media',
          description: 'A tech startup company',
          logoUrl: '/logos/logo.png',
          url: 'https://joshuvi-portfolio.herokuapp.com',
        },
      },
    },
  ],
};
