import React from 'react';
import Link from 'next/link';

import Button from '../components/Button';

const Login = () => (
    <div>
        <h1 className="test">Login</h1>
        <div>
            <div>
                <input type="email" name="email" placeholder="email" />
            </div>
            <div>
                <input type="password" name="password" placeholder="password" />
            </div>
            <div>
                <Link href="/">
                    <Button>log in</Button>
                </Link>
            </div>
        </div>
    </div>
);

export default Login;
