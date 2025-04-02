export const Developer = {
  slug: "developers",
  access: {
    read: () => true, // Allow read access to everyone
  },
  fields: [
    {
      name: "active",
      type: "checkbox",
      label: "Active",
    },
    {
      name: "slug",
      type: "text",
      label: "Slug",
      unique: true,
    },
    {
      name: "name",
      type: "text",
      label: "Name",
    },
    {
      name: "role",
      type: "text",
      label: "Role",
      localized: true,
    },
    {
      name: "description",
      type: "textarea",
      label: "Description",
      localized: true,
    },
    {
      name: "image",
      type: "upload",
      label: "Image",
      relationTo: "media", // Assuming you have a media collection
      admin: {
        useAsTitle: "alt"
      }
    },
    {
      name: "bio",
      type: "textarea",
      label: "Bio",
      localized: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
    },
    {
      name: "location",
      type: "text",
      label: "Location",
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "linkedin",
          type: "text",
          label: "LinkedIn",
        },
        {
          name: "github",
          type: "text",
          label: "GitHub",
        },
        {
          name: "twitter",
          type: "text",
          label: "Twitter",
        },
      ],
    },
    {
      name: "skills",
      type: "array",
      fields: [
        {
          name: "name",
          type: "text",
          label: "Skill Name",
        },
        {
          name: "level",
          type: "number",
          label: "Skill Level",
        },
      ],
    },
    {
      name: "experience",
      type: "array",
      fields: [
        {
          name: "company",
          type: "text",
          label: "Company",
        },
        {
          name: "role",
          type: "text",
          label: "Role",
          localized: true,
        },
        {
          name: "period",
          type: "text",
          label: "Period",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
          localized: true,
        },
      ],
    },
    {
      name: "education",
      type: "array",
      fields: [
        {
          name: "institution",
          type: "text",
          label: "Institution",
        },
        {
          name: "degree",
          type: "text",
          label: "Degree",
          localized: true,
        },
        {
          name: "year",
          type: "text",
          label: "Year",
        },
      ],
    },
    {
      name: "projects",
      type: "array",
      fields: [
        {
          name: "project",
          type: "relationship",
          relationTo: "projects",
          hasMany: true,
          label: "Project",
          admin: {
            useAsTitle: "title"
          }
        },
      ],
    },
  ],
};
