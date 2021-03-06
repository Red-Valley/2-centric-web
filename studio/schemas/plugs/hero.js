import '../objects/localeString';
export default {
  type: 'object',
  name: 'hero',
  title: 'Hero',
  fields: [
    {
      name: 'headingpartA',
      type: 'localeString',
      title: 'Heading Part A'
    },
    {
      name: 'headingpartB',
      type: 'localeString',
      title: 'Heading Part B'
    },
    {
      type: 'localeString',
      name: 'Subtitle'
    },
    {
      name: 'backgroundIllustration',
      type: 'illustration'
    },
    {
      name: 'cta',
      type: 'cta'
    },
    {
      type: 'color',
      name: 'backgroundColor'
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
        title: `Hero: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
