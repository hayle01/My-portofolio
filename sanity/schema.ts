import { type SchemaTypeDefinition } from 'sanity'

import { siteSettings } from './schemas/siteSettings'
import { profile } from './schemas/profile'
import { project } from './schemas/project'
import { skill } from './schemas/skill'
import { certificate } from './schemas/certificate'
import { testimonial } from './schemas/testimonial'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [siteSettings, profile, project, skill, certificate, testimonial],
}
