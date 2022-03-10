import '../objects/localeString';
export default {
  type: 'object',
  name: 'contact',
  title: 'contact',
  fields: [
    {
        type: 'color',
        name: 'backgroundColor'
    },
    {   
      name: 'titlePartA',
      type: 'localeString',
      title: 'Title Part A'
    },
    {   
      name: 'titlePartB',
      type: 'localeString',
      title: 'Title Part B'
    },
    {   
      name: 'titlePartC',
      type: 'localeString',
      title: 'Title Part C'
    },
    {   
      name: 'titlePartD',
      type: 'localeString',
      title: 'Title Part D'
    },
    {
      type: 'localeString',
      name: 'pargraph'
    },
    {   
      name: 'labelName',
      type: 'localeString',
      title: 'labelName'
    },
    {   
      name: 'labelEmail',
      type: 'localeString',
      title: 'labelEmail'
    },
    {   
      name: 'labelCompany',
      type: 'localeString',
      title: 'labelCompany'
    },
    {   
      name: 'labelInterest',
      type: 'localeString',
      title: 'labelInterest'
    },
    {   
      name: 'labelMessage',
      type: 'localeString',
      title: 'labelMessage'
    },
    {
      name: 'cta',
      type: 'cta'
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
        title: `contact: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
