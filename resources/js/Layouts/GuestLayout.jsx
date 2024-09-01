import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function Guest({ children }) {
    return (
        <div className="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-white">
            <div>
                <Link href="/">
                    <img src="https://www.svgrepo.com/show/331588/standard-notes.svg" alt="" className="w-20 h-20" />
                </Link>
            </div>

            <div className="w-full sm:max-w-md mt-6 px-4 py-4 bg-blue-600 drop-shadow-md overflow-hidden">
                {children}
            </div>
        </div>
    );
}
