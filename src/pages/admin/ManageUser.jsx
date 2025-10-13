import React, { useState } from 'react';

const initialUsers = [
    { id: 1, name: 'Alice', email: 'alice@example.com', role: 'Admin' },
    { id: 2, name: 'Bob', email: 'bob@example.com', role: 'User' },
];

export default function ManageUser() {
    const [users, setUsers] = useState(initialUsers);
    const [form, setForm] = useState({ name: '', email: '', role: 'User' });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAddUser = (e) => {
        e.preventDefault();
        if (!form.name || !form.email) return;
        setUsers([
            ...users,
            { id: Date.now(), ...form }
        ]);
        setForm({ name: '', email: '', role: 'User' });
    };

    const handleDelete = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    return (
        <div>
            <h2>Manage Users</h2>
            <form onSubmit={handleAddUser} style={{ marginBottom: '1rem' }}>
                <input
                    name="name"
                    placeholder="Name"
                    value={form.name}
                    onChange={handleChange}
                />
                <input
                    name="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                />
                <select name="role" value={form.role} onChange={handleChange}>
                    <option value="User">User</option>
                    <option value="Admin">Admin</option>
                </select>
                <button type="submit">Add User</button>
            </form>
            <table border="1" cellPadding="8">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(u => (
                        <tr key={u.id}>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>{u.role}</td>
                            <td>
                                <button onClick={() => handleDelete(u.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}