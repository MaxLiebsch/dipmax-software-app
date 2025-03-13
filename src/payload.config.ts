import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import sharp from 'sharp'

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [
    {
      slug: 'pages',
      fields: [
        {
          name: 'title',
          type: 'text'
        }
      ]
    }
  ],
  telemetry: false,
  localization: {
    locales: ['de', 'en'], // required
    defaultLocale: 'de', // required
  },
  cors: '*' ,
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || 'secret',
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: process.env.DATABASE_URI || 'mongodb://localhost:27017/dipmax-software',
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
})