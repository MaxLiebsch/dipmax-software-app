export const Project = {
  slug: "projects",
  access: {
    read: () => true, // Allow read access to everyone
  },
  fields: [
    {
      name: "slug",
      type: "text",
      unique: true,
      label: "Slug",
    },
    {
      name: "published",
      type: "checkbox",
      label: "Published",
    },
    {
      name: "type",
      type: "text",
      label: "Type",
    },
    {
      name: "title",
      type: "text",
      label: "Title",
      localized: true,
    },
    {
      name: "client",
      type: "text",
      label: "Client",
      localized: true,
    },
    {
      name: "completionDate",
      type: "date",
      label: "Completion Date",
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      localized: true,
    },
    {
      name: "longDescription",
      type: "textarea",
      label: "Long Description",
      localized: true,
    },
    {
      name: "tags",
      type: "array",
      fields: [
        {
          name: "tag",
          type: "text",
          label: "Tag",
        },
      ],
    },
    {
      name: "technologies",
      type: "array",
      fields: [
        {
          name: "technology",
          type: "text",
          label: "Technology",
        },
      ],
    },
    {
      name: "features",
      type: "array",
      fields: [
        {
          name: "feature",
          type: "text",
          label: "Feature",
          localized: true,
        },
      ],
    },
    {
      name: "images",
      type: "array",
      fields: [
        {
          name: "image",
          type: "upload",
          label: "Image",
          relationTo: "media",
          admin: {
            useAsTitle: "alt"
          }
        },
      ],
    },
    {
      name: "liveUrl",
      type: "text",
      label: "Live URL",
    },
    {
      name: "repoUrl",
      type: "text",
      label: "Repository URL",
    },
    {
      name: "team",
      type: "array",
      fields: [
        {
          name: "developer",
          type: "relationship",
          relationTo: "developers",
          label: "Developer",
          admin: {
            useAsTitle: "name"
          }
        },
        {
          name: "role",
          type: "text",
          label: "Role",
          localized: true,
        },
      ],
    },
    {
      name: "testimonial",
      type: "group",
      fields: [
        {
          name: "quote",
          type: "textarea",
          label: "Quote",
          localized: true,
        },
        {
          name: "author",
          type: "text",
          label: "Author",
        },
        {
          name: "position",
          type: "text",
          label: "Position",
          localized: true,
        },
      ],
    },
  ],
};
