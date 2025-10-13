import React from 'react';

const UserLayout = ({ children }) => {
    return (
        <div className="user-layout">
            <header>
                <h1>User Dashboard</h1>
            </header>
            <main>
                {children}
            </main>
        </div>
    );
};

export default UserLayout;