import React from 'react';
import Head from 'next/head';
import CssBaseline from '@material-ui/core/CssBaseline';

import TodoPage from '../containers/TodoPage/TodoPage';
import authStore from '../stores/authStore';
import LoginPage from '../containers/LoginPage/LoginPage';

const { isAuthenticated } = authStore;

const Index = () => (
    <div>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" />
        </Head>
        <CssBaseline />
        <div className="main-wrapper">
            <div>{isAuthenticated ? <TodoPage /> : <LoginPage />}</div>
            <style jsx global>{`
                :root {
                    --main-bg-color: #e5e5e5;
                    --white: #fff;
                    --red: #fe4a49;
                    --green: #50e3a4;
                    --light-gray: #e6e6ea;

                    --small: only screen and (max-width: 480px);
                    --medium-down: only screen and (min-width: 481px) and (max-width: 1080px);
                    --large-up: only screen and (min-width: 1081);
                }

                body {
                    background-color: var(--main-bg-color);
                    font-family: 'Roboto', sans-serif;
                    font-size: 16px;
                }

                .main-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding: 5rem;
                }
            `}</style>
        </div>
    </div>
);

export default Index;
