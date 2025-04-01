import { uploadToR2 } from "@/src/storage/uploadToR2";

export const Locale = {
  slug: "locale",
  fields: [
    { name: "locale", type: "select", options: ["en", "de"], required: true, unique: true },
    { name: "content", type: "json", required: true },
  ],
  hooks: {
    afterChange: [
      async ({ doc }: { doc: any }) => {
        const key = `locales/${doc.locale}.json`;
        const body = JSON.stringify(doc.content, null, 2);
        await uploadToR2(key, body);
      },
    ],
  },
};
