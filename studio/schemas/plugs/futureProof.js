import '../objects/localeString';
export default {
  type: 'object',
  name: 'futureProof',
  title: 'FutureProof',
  fields: [
    {
        name: 'backgroundIllustration',
        type: 'illustration'
    },
    {
        type: 'color',
        name: 'backgroundColor'
    },
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
      type: 'array',
      name: 'Proofs',
      of: [{ type: 'textWithIllustration' }]
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
        title: `FutureProof: ${disabled ? 'DISABLED' : title}`
      }
    }
  }
}
