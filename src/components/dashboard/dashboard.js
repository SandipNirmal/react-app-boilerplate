import React from 'react';
import { Card, CardTitle, CardText } from 'react-md';

const Dashboard = () => {
  return (
    <div className="container content-centered">
      <section>
        <div className="page-content">
          <Card>
            <CardTitle title="Progressive Web Apps" />

            <CardText>
              <h4>
                Progressive Web Apps take advantage of new technologies to bring
                the best of mobile sites & native apps to users. They’re
                reliable, fast, and engaging. They originate from a secure
                origin and load regardless of network state.
              </h4>

              <h4>
                There’s much new in the world of Progressive Web Apps (PWAs) and
                you might be wondering how compatible they are with existing
                architectures using libraries like React and JS module bundlers
                like Webpack. Does a PWA require a wholesale rewrite? What web
                performance metrics do you need to keep an eye on? In this
                series of posts I’ll share my experience turning React-based web
                apps into PWAs. We’ll also cover why shipping just what users
                need for a route & throwing out all other scripts are good ideas
                for fast perf.
              </h4>

              <h3> Feature Requirements </h3>

              <ul>
                <li> Network connection is secure </li>
                <li>User can be prompted to Add to Homescreen </li>
                <li>Installed web app will launch with custom splash screen</li>
                <li>App can load on offline/flaky connections</li>
                <li>Page load performance is fast </li>
                <li>Design is mobile-friendly</li>
                <li>Site is progressively enhanced</li>
                <li> Address bar matches brand colors</li>
              </ul>
            </CardText>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
