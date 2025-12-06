// src/components/Footer.jsx
import React from "react";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="tf-footer">
            <div className="tf-container">
                <div>© {new Date().getFullYear()} Task flow — Made with ❤️</div>
                <div className="tf-footer-links">
                    <a href="/privacy">Privacy</a>
                    <a href="/terms">Terms</a>
                </div>
            </div>
        </footer>
    );
}
