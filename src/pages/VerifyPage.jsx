import React, { useState } from 'react';

const VerifyPage = () => {
    const [code, setCode] = useState('');
    const [message, setMessage] = useState('');

    const handleVerify = (e) => {
        e.preventDefault();
        // Simulate verification logic
        if (code === '123456') {
            setMessage('Verification successful!');
        } else {
            setMessage('Invalid code. Please try again.');
        }
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ddd', borderRadius: 8 }}>
            <h2>Verify Your Account</h2>
            <form onSubmit={handleVerify}>
                <label htmlFor="code">Enter Verification Code:</label>
                <input
                    id="code"
                    type="text"
                    value={code}
                    onChange={e => setCode(e.target.value)}
                    style={{ width: '100%', padding: 8, margin: '12px 0' }}
                    required
                />
                <button type="submit" style={{ padding: '8px 16px' }}>Verify</button>
            </form>
            {message && <p style={{ marginTop: 16 }}>{message}</p>}
        </div>
    );
};

export default VerifyPage;