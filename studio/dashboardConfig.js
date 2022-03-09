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
                  buildHookId: '6228e84078424e1e1e92755d',
                  title: 'Sanity Studio',
                  name: '2-centric-web-studio',
                  apiId: '93d14ad1-d915-477d-8db6-2f3b21bd97d2'
                },
                {
                  buildHookId: '6228e84042f9881fb819fb70',
                  title: 'Blog Website',
                  name: '2-centric-web',
                  apiId: 'e8b1e3ee-aed0-4d9a-8e0a-f35ef893a0ce'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/conkerdevelopment/2-centric-web',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://2-centric-web.netlify.app', category: 'apps'}
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
