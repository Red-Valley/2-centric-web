import '../objects/localeString';
export default {
  type: 'object',
  name: 'textWithoutIllustration',
  fields: [
    {
      type: 'localeString',
      name: 'title'
    },
    {
      title: 'Text En',
      name: 'TextEn',
      type: 'code',
      options: {
        language: 'html'
      }
    },{
      title: 'Text Es',
      name: 'TextEs',
      type: 'code',
      options: {
        language: 'html'
      }
    }
  ]
}
