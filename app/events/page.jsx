// app/events/page.jsx

import EventCard from '@/components/EventCard'; // On va créer ce composant
import { events } from '@/app/data/events'; // Correct path

export default function EventsPage() {
    return (
        <main className="flex flex-col items-center justify-center h-full p-4">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
                Événements à venir
            </h1>
            <div className="w-full max-w-4xl space-y-4">
                {events.map((event) => (
                    <EventCard key={event.id} event={event} />
                ))}
            </div>
        </main>
    );
}

