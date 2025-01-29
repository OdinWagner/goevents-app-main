import Image from 'next/image';
import Link from 'next/link';

export default function EventDetails({ event }) {
    if (!event) return <p className="text-red-500">Événement non trouvé</p>;

    return (
        <div className="w-full max-w-4xl space-y-4 bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-2xl md:text-4xl font-bold text-primary mb-8">
                {event.title}
            </h1>
            <Image 
                src={event.image} 
                alt={event.title} 
                width={800} 
                height={400} 
                className="w-full h-64 object-cover rounded-lg" 
            />
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
