export interface PhotoGallery {
    id: string;
    title: string;
    coverImage: string;
    googlePhotosUrl: string;
}

export const photoGalleries: PhotoGallery[] = [
    {
        id: 'gallery-1',
        title: 'Sunday Service Highlights',
        coverImage: 'https://images.unsplash.com/photo-1511649475669-e288648b2339?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        googlePhotosUrl: 'https://photos.google.com' // Placeholder
    },
    {
        id: 'gallery-2',
        title: 'Community Outreach',
        coverImage: 'https://images.unsplash.com/photo-1543666170-496a77d33b28?auto=format&fit=crop&w=1000&q=80',
        googlePhotosUrl: 'https://photos.google.com' // Placeholder
    },
    {
        id: 'gallery-3',
        title: 'Youth Events',
        coverImage: 'https://images.unsplash.com/photo-1529070538774-1843cb3265df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80',
        googlePhotosUrl: 'https://photos.google.com' // Placeholder
    }
];
