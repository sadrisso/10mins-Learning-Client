import React from 'react';


const DashboardLanding = () => {
    // Dummy data (same as before)
    const upcomingSessions = [
        { id: 1, title: 'Mathematics Basics', date: '2023-10-25', time: '10:00 AM' },
        { id: 2, title: 'Advanced Physics', date: '2023-10-27', time: '02:00 PM' },
        { id: 3, title: 'History of Science', date: '2023-10-30', time: '11:00 AM' },
    ];

    const recentNotes = [
        { id: 1, title: 'Algebra Formulas', lastUpdated: '2023-10-20' },
        { id: 2, title: 'Quantum Mechanics Notes', lastUpdated: '2023-10-18' },
        { id: 3, title: 'World War II Summary', lastUpdated: '2023-10-15' },
    ];

    const progress = {
        sessionsAttended: 12,
        notesCreated: 8,
        materialsReviewed: 15,
    };

    const notifications = [
        { id: 1, message: 'New study material uploaded for Mathematics Basics.', date: '2023-10-22' },
        { id: 2, message: 'Your session on Advanced Physics has been rescheduled.', date: '2023-10-21' },
        { id: 3, message: 'Reminder: History of Science session starts in 2 days.', date: '2023-10-20' },
    ];

    return (
        <div className='min-h-screen w-full p-4 md:p-8 bg-gray-50'> {/* Adjusted padding */}
            {/* Header */}
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-4 md:mb-8'> {/* Changed to column on smaller screens */}
                <h1 className='text-2xl font-bold mb-2 md:mb-0'>Dashboard</h1>
                <div className='flex flex-col md:flex-row items-center gap-2 md:gap-4 w-full md:w-auto'> {/* Added width control */}
                    <input
                        type='text'
                        placeholder='Search...'
                        className='w-full md:w-auto p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                    <button className='w-full md:w-auto p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all'>
                        Create New Note
                    </button>
                </div>
            </div>

            {/* Grid Layout */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-4 md:mb-8'> {/* Added sm breakpoint */}
                {/* ... (Upcoming Sessions, Recent Notes, Progress Tracker - same structure as below) */}
                <div className='bg-white p-4 rounded-lg shadow-md'> {/* Adjusted padding */}
                    <h2 className='text-xl font-semibold mb-2'>Upcoming Sessions</h2> {/* Adjusted margin */}
                    <ul className='space-y-2'> {/* Adjusted spacing */}
                        {upcomingSessions.map((session) => (
                            <li key={session.id} className='p-2 bg-gray-100 rounded-lg'> {/* Adjusted padding */}
                                <p className='font-medium'>{session.title}</p>
                                <p className='text-sm text-gray-600'>
                                    {session.date} at {session.time}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Recent Notes (Similar structure as Upcoming Sessions) */}
                <div className='bg-white p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-2'>Recent Notes</h2>
                    <ul className='space-y-2'>
                        {recentNotes.map((note) => (
                            <li key={note.id} className='p-2 bg-gray-100 rounded-lg'>
                                <p className='font-medium'>{note.title}</p>
                                <p className='text-sm text-gray-600'>
                                    Last updated: {note.lastUpdated}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Progress Tracker (Similar structure) */}
                <div className='bg-white p-4 rounded-lg shadow-md'>
                    <h2 className='text-xl font-semibold mb-2'>Progress Tracker</h2>
                    <div className='space-y-2'>
                        <p className='text-gray-700'>Sessions Attended: {progress.sessionsAttended}</p>
                        <p className='text-gray-700'>Notes Created: {progress.notesCreated}</p>
                        <p className='text-gray-700'>Materials Reviewed: {progress.materialsReviewed}</p>
                    </div>
                </div>
            </div>

            {/* Notifications Section */}
            <div className='bg-white p-4 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold mb-2'>Notifications</h2>
                <ul className='space-y-2'>
                    {notifications.map((notification) => (
                        <li key={notification.id} className='p-2 bg-gray-100 rounded-lg'>
                            <p className='text-gray-700'>{notification.message}</p>
                            <p className='text-sm text-gray-600'>{notification.date}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DashboardLanding;