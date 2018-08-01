import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Button from '../components/Button';
import DayView from '../containers/DayView/DayView';
import '@fortawesome/fontawesome-free/js/all';

const Index = () => (
    <div>
        <Head>
            <title>hello!</title>
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" />
        </Head>
        <div className="main-wrapper">
            <div>
                {true ? (
                    <DayView />
                ) : (
                    <div>
                        <h1>log in</h1>
                        <Link href="/login">
                            <Button>log in</Button>
                        </Link>
                    </div>
                )}
            </div>
            <style jsx global>{`
                :root {
                    --main-bg-color: #e5e5e5;
                    --white: #f4f4f8;
                    --red: #fe4a49;
                }

                body {
                    background-color: var(--main-bg-color);
                    font-family: 'Open Sans', sans-serif;
                }

                .main-wrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    </div>
);

export default Index;
