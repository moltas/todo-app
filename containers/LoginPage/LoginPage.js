import React from 'react';
import Link from 'next/link';
import Button from '../../components/Button';

const LoginPage = () => (
    <div>
        <h1>log in</h1>
        <Link href="/login">
            <Button>log in</Button>
        </Link>
    </div>
);

export default LoginPage;
