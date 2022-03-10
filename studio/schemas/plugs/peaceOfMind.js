import '../objects/localeString';
export default {
  type: 'object',
  name: 'peaceOfMind',
  title: 'peaceOfMind',
  fields: [
    {
      type: 'color',
      name: 'backgroundColor'
    },
    {
      name: 'background',
      type: 'illustration'
    },
    {
      name: 'imageGlobal',
      type: 'illustration'
    },
    {   
      name: 'titleA',
      type: 'localeString',
      title: 'Title Part A'
    },
    {   
      name: 'titleB',
      type: 'localeString',
      title: 'Title Part B'
    },
    {   
      name: 'titleC',
      type: 'localeString',
      title: 'Title Part C'
    },
    {
      type: 'localeString',
      name: 'pargraph'
    },
    {
      name: 'id',
      type: 'string'

    }
  ],
  preview: {
    select: {
      title: 'heading',
      subtitle: 'label',
      disabled: 'disabled'
    },
    prepare({ title, disabled }) {
      return {
        title: `peaceOfMind: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
