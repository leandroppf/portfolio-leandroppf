export type Company = {
  name: string
  website: string
  location: {
    city: string
    state: string
    country: string
  }
}

export type Position = {
  title: string
  description: string
  startDate: string
  endDate: string
  experienceTime: string
  skills: string[]
}

export type Experience = {
  company: Company
  positions: Position[]
}
