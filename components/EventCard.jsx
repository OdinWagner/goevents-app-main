import Link from 'next/link';

export default function EventCard({ event }) {
    if (!event) return null;

    return (
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <Link href={`/events/${event.id.toString()}`} className="block hover:bg-gray-100 p-4 rounded-lg transition">
                <h2 className="text-xl font-semibold text-primary mb-2">{event.title}</h2>
                <p className="text-textSecondary">{event.description}</p>
                <p className="text-textSecondary">
                    <strong>Date:</strong> {event.date}
                </p>
                <p className="text-textSecondary">
                    <strong>Lieu:</strong> {event.location}
                </p>
                <span className="text-blue-500 hover:underline block mt-2">
                    Voir les détails →
                </span>
            </Link>
        </div>
    );
}
