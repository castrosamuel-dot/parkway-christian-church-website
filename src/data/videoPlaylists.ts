export interface Playlist {
    id: string;
    title: string;
    description?: string;
}

export const videoPlaylists: Playlist[] = [
    {
        id: 'PLNHewxce_fZdpvuZF8T5jmNN7BaMWeCyd',
        title: 'Sunday Services',
        description: 'Watch our full Sunday service replays.'
    },
    {
        id: 'PLNHewxce_fZd_456abc_placeholder1', // Placeholder
        title: 'Worship Series',
        description: 'A collection of our favorite worship moments.'
    },
    {
        id: 'PLNHewxce_fZd_789xyz_placeholder2', // Placeholder
        title: 'Guest Speakers',
        description: 'Messages from our special guest speakers.'
    }
];
