interface CareerHighlight {
  title: string;
  detail: string;
  icon: 'code' | 'database' | 'layers' | 'mapPin' | 'activity';
}

export const CAREER_HIGHLIGHTS: Record<string, CareerHighlight[]> = {
  cynosure: [
    { title: 'Product delivery', detail: 'Client-facing applications with PHP and React', icon: 'code' },
    { title: 'Search at scale', detail: 'Elasticsearch across investor records', icon: 'database' },
    { title: 'Connected systems', detail: 'Payments, live updates, and transcription', icon: 'layers' },
  ],
  azure: [
    { title: 'Responsive APIs', detail: 'Node.js services with Redis caching', icon: 'layers' },
    { title: 'Location-aware services', detail: 'Geofencing and real-time notifications', icon: 'mapPin' },
    { title: 'Live data streams', detail: 'Go, PostgreSQL, and MongoDB', icon: 'activity' },
  ],
};
