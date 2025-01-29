// components/EventCard.jsx
import Link from 'next/link';

export default function EventCard({ event }) {
    return (
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-primary">{event.title}</h2>
            <p className="text-textSecondary">{event.description}</p>
            <p className="text-textSecondary">
                <strong>Date:</strong> {event.date}
            </p>
            <p className="text-textSecondary">
                <strong>Lieu:</strong> {event.location}
            </p>
            <Link href={`/events/${event.id}`} className="text-blue-500 hover:underline">
                Voir les détails
            </Link>
        </div>
    );
}
