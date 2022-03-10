import '../objects/localeString';
export default {
  type: 'object',
  name: 'illWork',
  title: 'illWork',
  fields: [
    {
        type: 'color',
        name: 'backgroundColor'
    },
    {   
      name: 'title',
      type: 'localeString',
      title: 'Title'
    },
    {
        name: 'image',
        type: 'illustration'
    },
    {
        type: 'color',
        name: 'lineColor'
    },
    {
      type: 'array',
      name: 'TextWithIcon',
      of: [{ type: 'textWithIllustration' }]
    },
    {
      name: 'id',
      type: 'string'

    }
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'title',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `illWork: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
