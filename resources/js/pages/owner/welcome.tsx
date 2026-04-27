import { Head, Link } from '@inertiajs/react';

type OwnerWelcomeProps = {
    ownerName: string;
};

export default function OwnerWelcome({ ownerName }: OwnerWelcomeProps) {
    return (
        <>
            <Head title="Owner Portal Guide" />

            <div className="min-h-screen flex items-center justify-center px-4 py-10">
                <div className="w-full max-w-4xl rounded-3xl bg-white/95 p-8 shadow-lg border-2 border-cyan-400">
                    
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4 rounded-2xl bg-white p-6 border border-cyan-400">
                        <div className="text-center md:text-left">
                            <p className="text-sm font-semibold tracking-widest text-cyan-700 uppercase">
                                SmartVet Owner Portal
                            </p>

                            <h1 className="mt-2 text-4xl font-bold text-gray-900 leading-tight">
                                Welcome, {ownerName}!
                            </h1>

                            <p className="mt-3 text-gray-600">
                                This page explains what you can access inside your account.
                            </p>
                        </div>

                        <img
                            src="/images/logo.png"
                            alt="SmartVet Logo"
                            className="h-40 w-40 object-contain"
                        />
                    </div>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        <div className="rounded-2xl bg-cyan-50 p-4 border-2 border-cyan-200 shadow-sm">
                            <div className="text-3xl">🐾</div>
                            <h2 className="mt-3 font-bold text-gray-900">
                                View Pet Records
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                You can view your pet’s profile, visit history, vaccinations, prescriptions, and medical summaries.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-yellow-50 p-4 border-2 border-yellow-200 shadow-sm">
                            <div className="text-3xl">🔒</div>
                            <h2 className="mt-3 font-bold text-gray-900">
                                View Only Access
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                You cannot edit consultations, medical records, prescriptions, billing, or clinic-managed information.
                            </p>
                        </div>

                        <div className="rounded-2xl bg-green-50 p-4 border-2 border-green-200 shadow-sm">
                            <div className="text-3xl">🏥</div>
                            <h2 className="mt-3 font-bold text-gray-900">
                                Clinic Managed
                            </h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Only the veterinary clinic can update your pet’s official health records to keep them accurate.
                            </p>
                        </div>
                    </div>

                    <div className="mt-6 rounded-2xl bg-orange-50 p-4 text-sm text-orange-800 border border-orange-200 text-center">
                        <strong>Reminder:</strong> All medical and clinic-related records are managed and updated by the veterinary clinic.
                    </div>

                    <div className="mt-5 flex justify-center">
                        <Link
                            href="/owner/pets"
                            className="inline-flex rounded-xl bg-cyan-900 px-8 py-3 text-white font-semibold hover:bg-cyan-700 shadow-md"
                        >
                            Continue to My Pets
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}