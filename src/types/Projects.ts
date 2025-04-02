import { Developer, Image } from "./Developer"
import { PayloadWrapper } from "./PayloadWrapper"

export interface Project {
    createdAt: string
    updatedAt: string
    repoUrl: string
    liveUrl: string
    completionDate:string
    slug: string
    published: boolean
    type: string
    title: string
    client: string
    technologies: Techno[]
    longDescription: string
    features: any[]
    images: {id: string, image: Image}[]
    team: Team[]
    testimonial: Testimonial
    description: string
    id: string
    tags: Tags[]
  }
  
  export interface Tags {
    tag: string
    id: string
  }

  export interface Techno {
    technology: string
    id: string
  }
  
  export interface Team {
    developer: Developer
    id: string
  }
  
  export interface Project {
    project: Project2
    id: string
  }
  
  export interface Project2 {
    createdAt: string
    updatedAt: string
    slug: string
    published: boolean
    type: string
    title: string
    client: string
    technologies: any[]
    features: any[]
    images: any[]
    team: Team2[]
    testimonial: Testimonial
    id: string
    tags: any[]
  }
  
  export interface Team2 {
    developer: string
    id: string
  }
  
  export interface Testimonial {
    quote: string
    author: string
    position: string
  }
  
  export interface ProjectWrapper extends PayloadWrapper<Project> {}