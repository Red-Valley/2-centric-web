import '../objects/localeString';
export default {
  type: 'object',
  name: 'textWithoutIllustration',
  fields: [
    {
      type: 'string',
      name: 'number'
    },
    {
      type: 'localeString',
      name: 'title'
    },
    {
      title: 'Text En',
      name: 'TextEn',
      type: 'simpleBlockContent',
    },{
      title: 'Text Es',
      name: 'TextEs',
      type: 'simpleBlockContent',
    }
  ]
}
