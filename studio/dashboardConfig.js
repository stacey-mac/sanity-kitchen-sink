export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eba9e6a6f64a85891a0af15',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-btonopo8',
                  apiId: '10aec5c3-c250-4eab-ba88-8db4e6b42b40'
                },
                {
                  buildHookId: '5eba9e6af5037aff42cad13c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-1j1h9y4y',
                  apiId: '220da563-0045-4566-9856-ce582b09ba58'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/stacey-mac/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-1j1h9y4y.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
