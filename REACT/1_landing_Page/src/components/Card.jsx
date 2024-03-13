import React from 'react';
import Card from '../App.css'; // Import the Card component of styles

const MainContent = () => {
    const items = [
        { id: 1, name: 'Item 1', description: 'Description for item 1', imageUrl: 'https://via.placeholder.com/150' },
        { id: 2, name: 'Item 2', description: 'Description for item 2', imageUrl: 'https://via.placeholder.com/150' },
        { id: 3, name: 'Item 3', description: 'Description for item 3', imageUrl: 'https://via.placeholder.com/150' }
    ];

    return (
        <main>
            <section>
                <h2>Welcome to Our Product</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>

            <section>
                <h2>Items</h2>
                <div className="card-container">
                    {items.map(item => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default MainContent;
