import React, { useState } from 'react';

const externalLinks = {
    Akagera: 'https://faustintravels.rw/day1akagera.html',
    gorilla: 'https://faustintravels.rw/gorilla.html',
    goldenmonkey: 'https://faustintravels.rw/goldenMonkey.html',
    kigali: 'https://faustintravels.rw/kigali.html',
    palace: 'https://faustintravels.rw/king.html',
    nyungwe: 'https://faustintravels.rw/nyungwe.html',
    trekking: 'https://faustintravels.rw/trekking.html',
    Akagera: 'https://faustintravels.rw/2daysakagera.html',
    Chippanze: 'https://faustintravels.rw/chimpanzee.html',
    Gorilla: 'https://faustintravels.rw/2daysgorilla.html',
    Akagera: 'https://faustintravels.rw/3daysakagera.html',
    Chippanze: 'https://faustintravels.rw/3dayschimpanzee.html',
    Gorilla: 'https://faustintravels.rw/3daysgorilla.html',
    classic: 'https://faustintravels.rw/9daysclassic.html',
};

function ExternalPageViewer() {
    const [selectedPage, setSelectedPage] = useState(null);

    const handlePageSelect = (pageId) => {
        window.open(externalLinks[pageId], '_blank');
    };

    const handleBackClick = () => {
        setSelectedPage(null);
    };

    return (
        <div className="container mx-auto mt-8">
            <div className="bg-white rounded-lg shadow-md p-4">
                {selectedPage ? (
                    <>
                        <button
                            className="px-2 font-extrabold text-gray-500 hover:text-green-900 bg-white p-2"
                            onClick={handleBackClick}
                        >
                            Back
                        </button>
                    </>
                ) : (
                    <>
                        <select
                           
                            onChange={(e) => handlePageSelect(e.target.value)}
                            value={selectedPage || ''}
                        >
                            <option value="">Select packages</option>
                            {Object.keys(externalLinks).map((pageId) => (
                                <option key={pageId} value={pageId}>
                                    {pageId}
                                </option>
                            ))}
                        </select>
                    </>
                )}
            </div>
        </div>
    );
}

export default ExternalPageViewer;
