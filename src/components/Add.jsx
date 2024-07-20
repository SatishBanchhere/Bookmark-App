import { useState } from 'react';
import { Bookmarks } from './Bookmarks';

export function Add({ add, setAdd }) {
    console.log("This is add " + add);
    if (add) {
        return (
            <div className={`fixed z-10 inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity ${add ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="bg-white p-4 rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
                    <button
                        className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                        onClick={() => setAdd(false)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                    <Bookmarks />
                </div>
            </div>
        );
    }
}
