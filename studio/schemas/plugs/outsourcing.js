import '../objects/localeString';
export default {
  type: 'object',
  name: 'outsourcing',
  title: 'outsourcing',
  fields: [
    {
        type: 'color',
        name: 'backgroundColor'
    },
    {
        name: 'icon',
        type: 'illustration'
    },
    {
        type: 'color',
        name: 'colorBar'
    },
    {   
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
      type: 'localeString',
      name: 'pargraph'
    },
    {
        type: 'color',
        name: 'colorLine'
    },
    {
        name: 'imageGlobal',
        type: 'illustration'
    },
    {
      type: 'array',
      name: 'textWithNumberLeftColumn',
      of: [{ type: 'textWithoutIllustration' }]
    },
    {
      type: 'array',
      name: 'textWithNumberRightColumn',
      of: [{ type: 'textWithoutIllustration' }]
    },
    {
      name: 'id',
      type: 'string'

    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'pargraph',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `outsourcing: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
