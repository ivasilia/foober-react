import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { host } from '../../common/constants';
import Comment from '../Comment';
import './About.css';

const About = () => {

    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
        await fetch(`${host}/comments/all`)
            .then(res => res.json())
            .then(data => setComments(data));
        }
        fetchData();
    }, []);



    return (
        <div className="about-container">
            <p>Why share a route with Foober? Here's why:</p>
            <Tabs>
                <TabList>
                    <Tab>Why Foober</Tab>
                    <Tab>Statistics</Tab>
                    <Tab>Comments</Tab>
                </TabList>

                <TabPanel>
                    <article>It's like Uber, but not yet prohibited by law...</article>
                </TabPanel>
                <TabPanel>
                    <article><h3>-- 1 555 666 777 have joint Foober by today! -- </h3></article>
                    <img src="https://res.cloudinary.com/duvtwfpom/image/upload/v1598646358/samples/sheep.jpg" className="image-wrapper"/>
                </TabPanel>
                <TabPanel>
                <div className="segment">
                    <p>Comments</p>
                    {comments.map(c => {
                        return <Comment key={c.id} title={c.title} content={c.content} />
                    })}
                </div>
                </TabPanel>
            </Tabs>
        </div>
    );
}

export default About;