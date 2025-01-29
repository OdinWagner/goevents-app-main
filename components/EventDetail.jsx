// components/EventDetails.jsx
import Link from 'next/link';

export default function EventDetails({ event }) {
    return (
        <div className="w-full max-w-4xl space-y-4">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
                {event.title}
            </h1>
            <img src={event.image} alt={event.title} className="w-full h-64 object-cover rounded-lg" />
            <p className="text-textSecondary">{event.description}</p>
            <p className="text-textSecondary">
                <strong>Date:</strong> {event.date}
            </p>
            <p className="text-textSecondary">
                <strong>Lieu:</strong> {event.location}
            </p>
            <Link href="/events" className="mt-8 text-blue-500 hover:underline">
                Retour à la liste des événements
            </Link>
        </div>
    );
}
