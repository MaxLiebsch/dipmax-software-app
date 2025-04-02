import { PayloadWrapper } from "./PayloadWrapper"
import { Project } from "./Projects"

 export interface Developer {
    createdAt: string
    updatedAt: string
    slug: string
    name: string
    role: string
    bio: string
    description: string
    email: string
    location: string
    social: Social
    image: Image
    skills: any[]
    experience: any[]
    education: any[]
    projects: {project: Project[], id: string}[]
    active: boolean
    id: string
  }
  
  export interface ImageSize {
    width: number
    height: number
    mimeType: string
    filesize: number
    filename: string
    url: string
  }
  export interface ImageSizes {
    thumbnail: ImageSize
    card: ImageSize
  }
  export interface Image {
    createdAt: string
    updatedAt: string
    altText: string
    filename: string
    mimeType: string
    filesize: number
    width: number
    height: number
    focalX: number
    focalY: number
    id: string
    url: string
    sizes: ImageSizes
    thumbnailURL: any
  }

  export interface Social {[key: string]: string}

  export interface DeveloperWrapper extends PayloadWrapper<Developer> {}