import Link from 'next/link';

export default function Header() {
    return (
        <div>
            <a href="/api/login">Login</a>
            <a href="/api/logout">Logout</a>
        </div>
    )
}