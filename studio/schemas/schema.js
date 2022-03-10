// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localeString from './objects/localeString'

// document schemas
import navMenu from './documents/navMenu'
import author from './documents/author'
import category from './documents/category'
import post from './documents/post'
import page from './documents/page'
import siteSettings from './documents/siteSettings'
import route from './documents/route'

import experiment from './objects/experiment'
import simpleBlockContent from './objects/simpleBlockContent'

import * as plugs from './plugs'
import plugDefaultFields from './plugs/_plugDefaultFields'

// Object types
import { instagram, videoEmbed } from './objects/embeds'
import cta from './objects/cta'
import bodyPortableText from './objects/bodyPortableText'
import excerptPortableText from './objects/excerptPortableText'
import mainImage from './objects/mainImage'
import authorReference from './objects/authorReference'
import link from './objects/link'
import variation from './objects/variation'
import openGraph from './objects/openGraph'
import latex from './latex'
import futureProof from './plugs/futureProof'
import outsourcing from './plugs/outsourcing'
import peaceOfMind from './plugs/peaceOfMind'
import illWork from './plugs/illWork'
import contact from './plugs/contact'
import footer from './plugs/footer'
import textWithoutIllustration from './plugs/textWithoutIllustration'

const allPlugs = Object.values(plugs).map((plug) => {
  return { ...plug, fields: plugDefaultFields.concat(plug.fields) }
})

export default createSchema({
  name: 'blog',
  types: schemaTypes // Built-in types
    // Our custom types
    .concat([
      latex,
      localeString,
      variation,
      openGraph,
      experiment,
      route,
      link,
      simpleBlockContent,
      cta,
      futureProof,
      outsourcing,
      peaceOfMind,
      illWork,
      contact,
      footer,
      textWithoutIllustration,
      siteSettings,
      post,
      navMenu,
      page,
      category,
      author,
      mainImage,
      authorReference,
      instagram,
      videoEmbed,
      bodyPortableText,
      excerptPortableText,
    ])
    .concat(allPlugs),
})
