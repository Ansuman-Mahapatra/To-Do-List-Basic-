import React from 'react';
import { auth, googleProvider } from '../firebase';
import { signInWithPopup, signOut } from 'firebase/auth';

interface AuthProps {
    user: any; // Type 'any' for now, will refine
}

export const Auth: React.FC<AuthProps> = ({ user }) => {
    const handleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Error signing in: ", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Error signing out: ", error);
        }
    };

    return (
        <div className="auth-container" style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'flex-end' }}>
            {user ? (
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <img
                        src={user.photoURL}
                        alt={user.displayName}
                        style={{ width: '32px', height: '32px', borderRadius: '50%' }}
                    />
                    <button onClick={handleLogout} className="btn-secondary">Logout</button>
                </div>
            ) : (
                <button onClick={handleLogin} className="btn-primary">
                    Sign in with Google
                </button>
            )}
        </div>
    );
};
