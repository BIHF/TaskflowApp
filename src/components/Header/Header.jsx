import React from "react";
import "./Header.css"; // optional extra styles or put in index.css

export default function Header() {
    return (
        <header className="tf-header">
            <div className="tf-container">
                <div className="tf-brand">
                    <a href="/" className="tf-logo">Task flow</a>
                </div>

                <nav className="tf-nav">
                    <a href="#features" className="tf-link">Features</a>
                    <a href="#about" className="tf-link">About</a>
                    <a href="#contact" className="tf-link">Contact</a>
                </nav>

                <div className="tf-actions">
                    <button className="tf-btn tf-btn-primary">Add Task</button>
                    <div className="tf-avatar" title="Profile">AH</div>
                </div>
            </div>
        </header>
    );
}
