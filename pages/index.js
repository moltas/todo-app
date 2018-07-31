import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import TodoList from '../containers/TodoList';
import todoStore from '../stores/todoStore';

const Index = () => (
    <div className="container">
        <div>
            {true ? (
                <div>
                    youre logged in!
                    <TodoList store={todoStore} />
                </div>
            ) : (
                <div>
                    <h1>log in</h1>
                    <Link href="/login">
                        <Button>log in</Button>
                    </Link>
                </div>
            )}
        </div>
        <Styling />
    </div>
);

const Styling = () => (
    <style jsx="true">{`
        .container {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .login-button {
            color: red;
            border: 1px solid black;
            padding: 0.5rem 1rem;
        }
    `}</style>
);

export default Index;
