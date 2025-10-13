import React from 'react';

const notifications = [
    {
        id: 1,
        title: 'New User Registered',
        message: 'A new user has signed up.',
        date: '2024-06-10',
        read: false,
    },
    {
        id: 2,
        title: 'System Update',
        message: 'System will be updated at midnight.',
        date: '2024-06-09',
        read: true,
    },
];

const NotificationItem = ({ notification }) => (
    <div
        style={{
            background: notification.read ? '#f5f5f5' : '#e3f2fd',
            padding: '16px',
            marginBottom: '8px',
            borderRadius: '6px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.05)',
        }}
    >
        <strong>{notification.title}</strong>
        <p>{notification.message}</p>
        <small>{notification.date}</small>
    </div>
);

const Alerts = () => (
    <div style={{ maxWidth: 600, margin: '32px auto' }}>
        <h2>Notifications</h2>
        {notifications.length === 0 ? (
            <p>No notifications.</p>
        ) : (
            notifications.map((n) => (
                <NotificationItem key={n.id} notification={n} />
            ))
        )}
    </div>
);

export default Alerts;