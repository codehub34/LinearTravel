import React, { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, signOut } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { app } from "../firebase"; // Import initialized Firebase app
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

const db = getFirestore(app); // Initialize Firestore database

const UserAuth = ({ onLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [contact, setContact] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); // Add navigation support

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            if (isLogin) {
                // Firebase Login
                const userCredential = await signInWithEmailAndPassword(auth, email, password);
                onLogin && onLogin(userCredential.user);
                navigate("/"); // Redirect after login
            } else {
                // Validation Checks
                if (!fullName || !email || !password || !contact) throw new Error("Please fill all fields");
                if (!email.includes("@")) throw new Error("Invalid email format");
                if (password.length < 6) throw new Error("Password must be at least 6 characters long");
                if (password !== confirmPassword) throw new Error("Passwords do not match");

                // Firebase Sign-Up
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;

                // Store additional user info in Firestore
                await setDoc(doc(db, "users", user.uid), { fullName, email, contact });

                onLogin && onLogin(user);
                navigate("/"); // Redirect after sign-up
            }
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleResetPassword = async () => {
        if (!email) {
            setError("Please enter your email to reset password");
            return;
        }
        try {
            await sendPasswordResetEmail(auth, email);
            setError("Reset link sent to your email");
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div className="auth-container">
            <h2>{isLogin ? "User Login" : "Sign Up"}</h2>
            <form onSubmit={handleSubmit}>
                {!isLogin && (
                    <div className="input-group">
                        <label htmlFor="fullName">Full Name:</label>
                        <input id="fullName" type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
                    </div>
                )}
                <div className="input-group">
                    <label htmlFor="email">Email:</label>
                    <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password:</label>
                    <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>
                {!isLogin && (
                    <>
                        <div className="input-group">
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input id="confirmPassword" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="contact">Contact:</label>
                            <input id="contact" type="tel" value={contact} onChange={(e) => setContact(e.target.value)} required />
                        </div>
                    </>
                )}
                {error && <div className="error">{error}</div>}
                <button type="submit" disabled={loading}>{loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}</button>
            </form>
            <button type="button" onClick={handleResetPassword} style={{ marginTop: "1rem" }}>Reset Password</button>
            <div style={{ marginTop: "1rem" }}>
                {isLogin ? (
                    <span>Don't have an account?{" "}
                        <button type="button" onClick={() => setIsLogin(false)}>Sign Up</button>
                    </span>
                ) : (
                    <span>Already have an account?{" "}
                        <button type="button" onClick={() => setIsLogin(true)}>Login</button>
                    </span>
                )}
            </div>
        </div>
    );
};

export default UserAuth;