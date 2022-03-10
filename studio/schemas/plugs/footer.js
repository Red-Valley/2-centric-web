import '../objects/localeString';
export default {
  type: 'object',
  name: 'footer',
  title: 'footer',
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
        name: 'email',
        type: 'localeString',
        title: 'Email'
    },
    {   
      name: 'copyRight',
      type: 'localeString',
      title: 'copyRight'
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
        title: `footer: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
