import { notFound } from 'next/navigation';
import { events } from '@/data/events';
import EventDetails from '@/components/EventDetails';

export default function EventDetailsPage({ params }) {
    const event = events.find((e) => e.id.toString() === params.id);

    if (!event) {
        notFound();
    }

    return (
        <main className="flex flex-col items-center justify-center h-full p-4">
            <EventDetails event={event} />
        </main>
    );
}

