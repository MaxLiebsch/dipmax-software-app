import { mongooseAdapter } from "@payloadcms/db-mongodb";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import sharp from "sharp";
import { Developer } from "./payload/collections/developer";
import { Locale } from "./payload/collections/locale";
import { Media } from "./payload/collections/media";
import { Project } from "./payload/collections/project";

const {
  NODE_ENV,
  PAYLOAD_SECRET,
  DATABASE_URI,
  R2_BUCKET,
  R2_ACCESS_KEY_ID,
  R2_SECRET_ACCESS_KEY,
  R2_ENDPOINT,
} = process.env;

export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),
  admin: {
    livePreview: {
      url: ({ data, req, collectionConfig, locale }) => {
        const id =
          collectionConfig?.slug === "developers" ? data.slug : data.id;
        console.log(
          `${req.protocol}//${req.host}/${locale.code}/${collectionConfig?.slug}/${id}`
        );
        return `${NODE_ENV === "development" ? "http" : "https"}://${req.host}/${locale.code}/${collectionConfig?.slug}/${id}`;
      },
      collections: ["developers", "projects"],
    },
  },
  // Define and configure your collections in this array
  collections: [Developer as any, Project as any, Media, Locale],
  telemetry: false,
  localization: {
    locales: ["de", "en"], // required
    defaultLocale: "de", // required
  },
  cors: "*",
  // Your Payload secret - should be a complex and secure string, unguessable
  secret: PAYLOAD_SECRET || "secret",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: mongooseAdapter({
    url: DATABASE_URI || "mongodb://localhost:27017/dipmax-software",
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!
  sharp,
  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: R2_BUCKET || "",
      config: {
        credentials: {
          accessKeyId: R2_ACCESS_KEY_ID || "",
          secretAccessKey: R2_SECRET_ACCESS_KEY || "",
        },
        region: "auto",
        endpoint: R2_ENDPOINT || "",
      },
    }),
  ],
});
