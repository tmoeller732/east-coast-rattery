/**
 * Runware API Service
 * Provides utility functions for interacting with the Runware API
 */

// Types for Runware API responses
export interface RunwareImage {
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
  description: string;
  tags: string[];
}

export interface RunwareSearchParams {
  query?: string;
  tags?: string[];
  page?: number;
  limit?: number;
}

export interface RunwareSearchResponse {
  images: RunwareImage[];
  totalCount: number;
  currentPage: number;
  totalPages: number;
}

// Mock data for development until real API credentials are available
const MOCK_IMAGES: RunwareImage[] = [
  {
    id: '1',
    title: 'Mountain Landscape',
    url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300',
    description: 'Beautiful mountain landscape with sunrise',
    tags: ['nature', 'mountains', 'sunrise']
  },
  {
    id: '2',
    title: 'Ocean Waves',
    url: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&h=300',
    description: 'Ocean waves breaking on shore during sunset',
    tags: ['ocean', 'waves', 'sunset', 'beach']
  },
  {
    id: '3',
    title: 'Urban Architecture',
    url: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&h=300',
    description: 'Modern urban architecture with glass facades',
    tags: ['urban', 'architecture', 'modern', 'building']
  },
  {
    id: '4',
    title: 'Forest Path',
    url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300',
    description: 'Peaceful path through a dense forest',
    tags: ['forest', 'nature', 'path', 'trees']
  },
  {
    id: '5',
    title: 'Desert Landscape',
    url: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?w=400&h=300',
    description: 'Expansive desert landscape with sand dunes',
    tags: ['desert', 'dunes', 'landscape', 'nature']
  },
  {
    id: '6',
    title: 'City Skyline',
    url: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=400&h=300',
    description: 'City skyline view at night with lights',
    tags: ['city', 'night', 'lights', 'skyline', 'urban']
  },
  {
    id: '7',
    title: 'Autumn Forest',
    url: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=400&h=300',
    description: 'Colorful autumn forest with falling leaves',
    tags: ['autumn', 'forest', 'fall', 'nature', 'leaves']
  },
  {
    id: '8',
    title: 'Winter Landscape',
    url: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=400&h=300',
    description: 'Snowy winter landscape with mountains',
    tags: ['winter', 'snow', 'mountains', 'cold', 'nature']
  },
  {
    id: '9',
    title: 'Waterfall',
    url: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=400&h=300',
    description: 'Powerful waterfall cascading down rocks',
    tags: ['waterfall', 'water', 'nature', 'rocks']
  },
  {
    id: '10',
    title: 'Starry Night Sky',
    url: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&h=600',
    thumbnailUrl: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=400&h=300',
    description: 'Clear night sky full of stars',
    tags: ['stars', 'night', 'sky', 'astronomy', 'space']
  }
];

/**
 * Fetch images from the Runware API - using mock data for development
 */
export const searchRunwareImages = async (params: RunwareSearchParams): Promise<RunwareSearchResponse> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Filter mock data based on query
    let filteredImages = [...MOCK_IMAGES];
    
    if (params.query) {
      const query = params.query.toLowerCase();
      filteredImages = filteredImages.filter(img => 
        img.title.toLowerCase().includes(query) || 
        img.description.toLowerCase().includes(query) || 
        img.tags.some(tag => tag.toLowerCase().includes(query))
      );
    }
    
    if (params.tags?.length) {
      filteredImages = filteredImages.filter(img => 
        params.tags!.some(searchTag => 
          img.tags.some(imgTag => imgTag.toLowerCase().includes(searchTag.toLowerCase()))
        )
      );
    }
    
    // Calculate pagination
    const page = params.page || 1;
    const limit = params.limit || 10;
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;
    const paginatedImages = filteredImages.slice(startIndex, endIndex);
    
    return {
      images: paginatedImages,
      totalCount: filteredImages.length,
      currentPage: page,
      totalPages: Math.ceil(filteredImages.length / limit)
    };
  } catch (error) {
    console.error('Error searching Runware images:', error);
    throw error;
  }
};

/**
 * Get a single image by ID - using mock data for development
 */
export const getRunwareImage = async (imageId: string): Promise<RunwareImage> => {
  try {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const image = MOCK_IMAGES.find(img => img.id === imageId);
    
    if (!image) {
      throw new Error(`Image with ID ${imageId} not found`);
    }
    
    return image;
  } catch (error) {
    console.error(`Error fetching Runware image ${imageId}:`, error);
    throw error;
  }
};

/**
 * Save a reference to a Runware image in our database
 */
export const saveRunwareImageReference = async (image: RunwareImage, userId: string) => {
  try {
    const response = await window.ezsite.apis.tableCreate(4516, {
      image_id: image.id,
      title: image.title,
      url: image.url,
      thumbnail_url: image.thumbnailUrl,
      description: image.description,
      tags: image.tags.join(','),
      user_id: userId
    });
    
    if (response.error) throw response.error;
    
    return response.data;
  } catch (error) {
    console.error('Error saving Runware image reference:', error);
    throw error;
  }
};

/**
 * Get saved Runware image references for a user
 */
export const getSavedRunwareImages = async (userId: string, page = 1, limit = 20) => {
  try {
    const response = await window.ezsite.apis.tablePage(4516, {
      PageNo: page,
      PageSize: limit,
      OrderByField: "ID",
      IsAsc: false,
      Filters: [
        {
          name: "user_id",
          op: "Equal",
          value: userId
        }
      ]
    });
    
    if (response.error) throw response.error;
    
    return {
      images: response.data.List,
      totalCount: response.data.VirtualCount
    };
  } catch (error) {
    console.error('Error fetching saved Runware images:', error);
    throw error;
  }
};