const versions = require('./docs/api/v2024/versions.json');
const {
  versionSelector,
  versionCrumb,
} = require('docusaurus-plugin-openapi-docs/lib/sidebars/utils');

const sidebars = {
  openApiSidebar: [
    {
      type: 'category',
      label: 'Documentation',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'docs',
      },
      items: [
        {
          type: 'category',
          label: 'Extensibility',
          link: {
            type: 'doc',
            id: 'extensibility',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'extensibility',
            },
          ],
        },
        {
          type: 'category',
          label: 'Connectivity',
          link: {
            type: 'doc',
            id: 'connectivity',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'connectivity',
            },
          ],
        },
        {
          type: 'category',
          label: 'Tools',
          link: {
            type: 'doc',
            id: 'tools',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'tools',
            },
          ],
        },
        {
          type: 'category',
          label: 'Reporting',
          link: {
            type: 'doc',
            id: 'reporting',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'reporting',
            },
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          link: {
            type: 'doc',
            id: 'guides',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'guides',
            },
          ],
        },
        {
          type: 'link',
          label: 'Product Documentation',
          href: 'https://documentation.sailpoint.com',
        },
      ],
    },
  ],
  iiqSideBar: [
    {
      type: 'category',
      label: 'Documentation',
      collapsible: false,
      link: {
        type: 'doc',
        id: 'iiq',
      },
      items: [
        {
          type: 'category',
          label: 'Plugin Developer Guide',
          link: {
            type: 'doc',
            id: 'plugin-developer-guide',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'iiq/plugin-developer-guide',
            },
          ],
        },
        {
          type: 'link',
          label: 'Product Documentation',
          href: 'https://documentation.sailpoint.com/#identityiq',
        },
      ],
    },
  ],
  iiqApiSideBar: [
    {
      type: 'category',
      label: 'API Specifications',
      collapsible: false,
      link: {
        type: 'generated-index',
        title: 'API Specifications',
        description:
          "These are the SCIM APIs for SailPoint's on-premise service, IdentityIQ. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.",
        slug: '/api/iiq',
      },
      // @ts-ignore
      items: require('./docs/api/iiq/sidebar.ts'),
    },
  ],
  nermSideBar: [
    {
      type: 'category',
      label: 'NERM',
      collapsible: true,
      link: {
        type: 'doc',
        id: 'api/non-employee',
      },
      customProps: {
        description: 'NERM API specifications.',
      },
      items: [
        {
          type: 'doc',
          id: 'api/nerm/getting-started',
        },
        {
          type: 'doc',
          id: 'api/nerm/authentication',
        },
        {
          type: 'doc',
          id: 'api/nerm/pagination-metadata-filtering',
        },
        {
          type: 'category',
          label: 'NERM v1 API',
          link: {
            type: 'generated-index',
            title: 'NERM v1 API',
            description:
              'These are the Non-employee Risk Management APIs for SailPoint. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
            slug: '/api/nerm/v1',
          },
          // @ts-ignore
          items: require('./docs/api/nerm/v1/sidebar.ts'),
        },
      ],
    },
  ],
  isc_2024_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v2024`),
    },
    //   {
    //     type: "html",
    //     defaultStyle: true,
    //     value: `  <select id="featureToggle" onchange="toggleFeatures()">
    //   <option value="all" selected>All</option>
    //   <option value="public">Public</option>
    //   <option value="experimental">Experimental</option>
    // </select>`,
    //   },
    {
      type: 'doc',
      id: 'api/getting-started',
    },
    {
      type: 'doc',
      id: 'api/authentication',
    },
    {
      type: 'doc',
      id: 'api/authorization',
    },
    {
      type: 'doc',
      id: 'api/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/patch-requests',
    },
    {
      type: 'category',
      label: 'V2024 APIs',
      link: {
        type: 'generated-index',
        title: 'v2024 APIs',
        description:
          'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v2024',
      },
      // @ts-ignore
      items: require('./docs/api/v2024/sidebar.ts'),
    },
  ],
  isc_beta_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`beta`),
    },
    {
      type: 'doc',
      id: 'api/getting-started',
    },
    {
      type: 'doc',
      id: 'api/authentication',
    },
    {
      type: 'doc',
      id: 'api/authorization',
    },
    {
      type: 'doc',
      id: 'api/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/patch-requests',
    },
    {
      type: 'category',
      label: 'Beta APIs',
      link: {
        type: 'generated-index',
        title: 'Beta APIs',
        description:
          'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/beta',
      },
      // @ts-ignore
      items: require('./docs/api/beta/sidebar.ts'),
    },
  ],
  isc_v3_sidebar: [
    {
      type: 'html',
      defaultStyle: true,
      value: versionSelector(versions),
      className: 'version-button',
    },
    {
      type: 'html',
      defaultStyle: true,
      value: versionCrumb(`v3`),
    },
    {
      type: 'doc',
      id: 'api/getting-started',
    },
    {
      type: 'doc',
      id: 'api/authentication',
    },
    {
      type: 'doc',
      id: 'api/authorization',
    },
    {
      type: 'doc',
      id: 'api/api-versioning-strategy',
    },
    {
      type: 'doc',
      id: 'api/standard-collection-parameters',
    },
    {
      type: 'doc',
      id: 'api/rate-limit',
    },
    {
      type: 'doc',
      id: 'api/postman-collections',
    },
    {
      type: 'doc',
      id: 'api/patch-requests',
    },
    {
      type: 'category',
      label: 'V3 APIs',
      link: {
        type: 'generated-index',
        title: 'V3 APIs',
        description:
          'Use these APIs to interact with the IdentityNow platform to achieve repeatable, automated processes with greater scalability. We encourage you to join the SailPoint Developer Community forum at https://developer.sailpoint.com/discuss to connect with other developers using our APIs.',
        slug: '/api/v3',
      },
      // @ts-ignore
      items: require('./docs/api/v3/sidebar.ts'),
    },
  ],
};
module.exports = sidebars;
