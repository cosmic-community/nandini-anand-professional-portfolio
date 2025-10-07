import { createBucketClient } from '@cosmicjs/sdk'

export const cosmic = createBucketClient({
  bucketSlug: process.env.COSMIC_BUCKET_SLUG as string,
  readKey: process.env.COSMIC_READ_KEY as string,
})

// Helper function for error handling with status checking
function hasStatus(error: unknown): error is { status: number } {
  return typeof error === 'object' && error !== null && 'status' in error;
}

// Fetch portfolio settings
export async function getPortfolioSettings() {
  try {
    const response = await cosmic.objects
      .findOne({
        type: 'portfolio-settings',
        slug: 'nandini-anand-portfolio-settings'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.object;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return null;
    }
    throw new Error('Failed to fetch portfolio settings');
  }
}

// Fetch all experience entries
export async function getExperiences() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'experience-entries'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    // Sort by start date (newest first)
    return response.objects.sort((a, b) => {
      const dateA = new Date(a.metadata?.start_date || '').getTime();
      const dateB = new Date(b.metadata?.start_date || '').getTime();
      return dateB - dateA;
    });
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch experiences');
  }
}

// Fetch all projects
export async function getProjects() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'projects'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch projects');
  }
}

// Fetch all skills
export async function getSkills() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'skills'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch skills');
  }
}

// Fetch all certificates
export async function getCertificates() {
  try {
    const response = await cosmic.objects
      .find({
        type: 'certificates'
      })
      .props(['id', 'title', 'slug', 'metadata'])
      .depth(1);
    
    return response.objects;
  } catch (error) {
    if (hasStatus(error) && error.status === 404) {
      return [];
    }
    throw new Error('Failed to fetch certificates');
  }
}