// app/events/[id]/page.jsx
import { events } from '@/data/events';
import EventDetails from '@/components/EventDetails'; // On va créer ce composant
import { events } from '@/data/events'; // On va créer ce fichier

export default function EventDetailsPage({ params }) {
    const event = events.find((e) => e.id === parseInt(params.id));

    if (!event) {
        return <div>Événement non trouvé</div>;
    }

    return (
        <main className="flex flex-col items-center justify-center h-full p-4">
            <EventDetails event={event} />
        </main>
    );
}
