interface CareerHighlight {
  title: string;
  detail: string;
  icon: 'code' | 'database' | 'layers' | 'mapPin' | 'activity';
}

export const CAREER_HIGHLIGHTS: Record<string, CareerHighlight[]> = {
  cynosure: [
    { title: 'Product delivery', detail: '30+ Laravel, Livewire, and React apps', icon: 'code' },
    { title: 'User engagement', detail: '35% lift across 500+ users', icon: 'activity' },
    { title: 'Connected systems', detail: 'RabbitMQ, WebSockets, AWS, and Stripe', icon: 'layers' },
  ],
  azure: [
    { title: 'Faster APIs', detail: '50% lower latency with Node.js and Redis', icon: 'layers' },
    { title: 'Quicker releases', detail: 'Deployments cut from 45 to 12 minutes', icon: 'activity' },
    { title: 'Live data streams', detail: '1,000+ concurrent GPS streams in Go', icon: 'mapPin' },
  ],
};
