import React, { useEffect, useRef } from 'react';
import './App.css';

const App = () => {
    const tableauRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

    useEffect(() => {
        const scriptElement = document.createElement('script');
        scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
        scriptElement.async = true;
        scriptElement.onload = () => {
            tableauRefs.forEach((ref, index) => {
                const divElement = ref.current;
                if (divElement) {
                    const intervalId = setInterval(() => {
                        const vizElement = divElement.getElementsByTagName('object')[0];
                        if (vizElement) {
                            vizElement.style.width = '100%';
                            vizElement.style.height = '100%';
                            clearInterval(intervalId);
                        }
                    }, 100);
                }
            });
        };
        document.body.appendChild(scriptElement);
    }, []);

    const dashboards = [
        {
            id: 'viz1717566886821',
            src: 'https://public.tableau.com/static/images/Hi/HitsoftheDecade_17175668706270/Dashboard1/1_rss.png',
            name: 'HitsoftheDecade_17175668706270/Dashboard1',
        },
        {
            id: 'viz1717568881409',
            src: 'https://public.tableau.com/static/images/Mo/MostStreamedArtists-Spotify_17175684748490/Dashboard1/1_rss.png',
            name: 'MostStreamedArtists-Spotify_17175684748490/Dashboard1',
        },
        {
            id: 'viz1717569030944',
            src: 'https://public.tableau.com/static/images/Ke/KeyMusicalAttributes_17175684351470/Dashboard2/1_rss.png',
            name: 'KeyMusicalAttributes_17175684351470/Dashboard2',
        },
        {
            id: 'viz1717567363472',
            src: 'https://public.tableau.com/static/images/Mu/MusicalValencewithWordCloud/Dashboard2/1_rss.png',
            name: 'MusicalValencewithWordCloud/Dashboard2',
        }
    ];

    return (
        <div className="App">
            <div className="app-title-container">
                <h1 className="app-title">A Visual Exploration of Music</h1>
                <h2 className="app-title-context"> Hi there! We are two music enthusiasts passionate about exploring the evolving trends in the music industry. Our project delves into historical music trends, providing insights that could help music labels and artists identify patterns to craft their next big hit. We hope you enjoy our work and find it as fascinating as we do.
                    The dataset for our analysis was sourced from Kaggle.</h2>
            </div>
            <div className="dashboard">
                {dashboards.map((dashboard, index) => (
                    <div
                        key={dashboard.id}
                        className="tableauPlaceholder dashboard-item"
                        id={dashboard.id}
                        ref={tableauRefs[index]} // Assigning different refs
                        style={{ position: 'relative' }}
                        dangerouslySetInnerHTML={{
                            __html: `
                                <noscript>
                                    <a href='#'>
                                        <img alt='Dashboard' src='${dashboard.src}' style='border: none' />
                                    </a>
                                </noscript>
                                <object class='tableauViz' style='width:100%; height:100%; display:block;'>
                                    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
                                    <param name='embed_code_version' value='3' />
                                    <param name='site_root' value='' />
                                    <param name='name' value='${dashboard.name}' />
                                    <param name='tabs' value='no' />
                                    <param name='toolbar' value='yes' />
                                    <param name='static_image' value='${dashboard.src}' />
                                    <param name='animate_transition' value='yes' />
                                    <param name='display_static_image' value='yes' />
                                    <param name='display_spinner' value='yes' />
                                    <param name='display_overlay' value='yes' />
                                    <param name='display_count' value='yes' />
                                    <param name='language' value='en-US' />
                                </object>
                            `,
                        }}
                    />
                ))}
            </div>


            <footer className="footer">
                <a> Analysis by: </a>
                <a href="https://www.linkedin.com/in/uma-kanetkar/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Person 1" className="linkedin-icon" />
                    Uma Kanetkar
                </a>
                <a href="https://www.linkedin.com/in/veerasibi/" target="_blank" rel="noopener noreferrer">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png" alt="LinkedIn Person 2" className="linkedin-icon" />
                    Veera Sibi
                </a>
            </footer>
        </div>

        



    );
};

export default App;