import '../objects/localeString';
export default {
  type: 'object',
  name: 'textWithIllustration',
  fields: [
    {
      type: 'localeString',
      name: 'title'
    },
    {
      type: 'localeString',
      name: 'text'
    },
    {
      type: 'illustration',
      name: 'illustration'
    }
  ]
}
