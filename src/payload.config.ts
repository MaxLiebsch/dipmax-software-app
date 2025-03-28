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
      slug: 'developers',
      access: {
        read: () => true, // Allow read access to everyone
      },
      fields: [
        {
          name: 'active',
          type: 'checkbox',
          label: 'Active',
        },
        {
           name: 'slug',
           type: 'text',
           label: 'Slug',
           unique: true,
        },
        {
          name: 'name',
          type: 'text',
          label: 'Name',
        },
        {
          name: 'role',
          type: 'text',
          label: 'Role',
          localized: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
        },
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media', // Assuming you have a media collection
        },
        {
          name: 'bio',
          type: 'textarea',
          label: 'Bio',
          localized: true,
        },
        {
          name: 'email',
          type: 'email',
          label: 'Email',
        },
        {
          name: 'location',
          type: 'text',
          label: 'Location',
        },
        {
          name: 'social',
          type: 'group',
          fields: [
            {
              name: 'linkedin',
              type: 'text',
              label: 'LinkedIn',
            },
            {
              name: 'github',
              type: 'text',
              label: 'GitHub',
            },
            {
              name: 'twitter',
              type: 'text',
              label: 'Twitter',
            },
          ],
        },
        {
          name: 'skills',
          type: 'array',
          fields: [
            {
              name: 'name',
              type: 'text',
              label: 'Skill Name',
            },
            {
              name: 'level',
              type: 'number',
              label: 'Skill Level',
            },
          ],
        },
        {
          name: 'experience',
          type: 'array',
          fields: [
            {
              name: 'company',
              type: 'text',
              label: 'Company',
            },
            {
              name: 'role',
              type: 'text',
              label: 'Role',
              localized: true,
            },
            {
              name: 'period',
              type: 'text',
              label: 'Period',
            },
            {
              name: 'description',
              type: 'textarea',
              label: 'Description',
              localized: true,
            },
          ],
        },
        {
          name: 'education',
          type: 'array',
          fields: [
            {
              name: 'institution',
              type: 'text',
              label: 'Institution',
            },
            {
              name: 'degree',
              type: 'text',
              label: 'Degree',
              localized: true,
            },
            {
              name: 'year',
              type: 'text',
              label: 'Year',
            },
          ],
        },
        {
          name: 'projects',
          type: 'array',
          fields: [
            {
              name: 'project',
              type: 'relationship',
              relationTo: 'projects',
              label: 'Project',
            },
          ],
        },
      ],
    },
    {
      slug: 'projects',
      access: {
        read: () => true, // Allow read access to everyone
      },
      fields: [
        {
          name: 'slug',
          type: 'text',
          unique: true,
          label: 'Slug',
        },
        {
          name: 'published',
          type: 'checkbox',
          label: 'Published',
        },
        {
          name: 'type',
          type: 'text',
          label: 'Type',
        },
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          localized: true,
        },
        {
          name: 'client',
          type: 'text',
          label: 'Client',
          localized: true,
        },
        {
          name: 'completionDate',
          type: 'date',
          label: 'Completion Date',
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Description',
          localized: true,
        },
        {
          name: 'longDescription',
          type: 'textarea',
          label: 'Long Description',
          localized: true,
        },
      {
         name: 'tags',
         type: 'array',
         fields: [
          {
            name: 'tag',
            type: 'text',
            label: 'Tag',
          }
         ]
      },
        {
          name: 'technologies',
          type: 'array',
          fields: [
            {
              name: 'technology',
              type: 'text',
              label: 'Technology',
            },
          ],
        },
        {
          name: 'features',
          type: 'array',
          fields: [
            {
              name: 'feature',
              type: 'text',
              label: 'Feature',
              localized: true,
            },
          ],
        },
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'image',
              type: 'upload',
              label: 'Image',
              relationTo: 'media',
            },
          ],
        },
        {
          name: 'liveUrl',
          type: 'text',
          label: 'Live URL',
        },
        {
          name: 'repoUrl',
          type: 'text',
          label: 'Repository URL',
        },
        {
          name: 'team',
          type: 'array',
          fields: [
            {
              name: 'developer',
              type: 'relationship',
              relationTo: 'developers',
              label: 'Developer',
            },
            {
              name: 'role',
              type: 'text',
              label: 'Role',
              localized: true,
            },
          ],
        },
        {
          name: 'testimonial',
          type: 'group',
          fields: [
            {
              name: 'quote',
              type: 'textarea',
              label: 'Quote',
              localized: true,
            },
            {
              name: 'author',
              type: 'text',
              label: 'Author',
            },
            {
              name: 'position',
              type: 'text',
              label: 'Position',
              localized: true,
            },
          ],
        },
      ],
    },
    {
      slug: 'media',
      access: {
        read: () => true, // Allow read access to everyone
      },
      upload: {
        staticDir: 'media',
        mimeTypes: ['image/*'],
      },
      fields: [
        {
          name: 'altText',
          type: 'text',
          label: 'Alt Text',
          localized: true,
        },
        {
          name: 'caption',
          type: 'textarea',
          label: 'Caption',
          localized: true,
        },
      ],
    }, 
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