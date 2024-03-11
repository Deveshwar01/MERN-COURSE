import Button from "./Button";
const MainContent = () => {
    return (
        <main>
            <section>
                <h2>Welcome to Our Product</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit....</p>
                <Button label="Learn More" onClick={() => console.log('Learn More clicked')} />
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <li>Feature 1</li>
                    <li>Feature 2</li>
                    <li>Feature 3</li>
                </ul>
            </section>
        </main>
    );
};

export default MainContent;