Honolulu Tech Week Event Manager is web application for the submission, evaluation, and management of events for Honolulu Tech Week, an annual week long series of events focused on fostering technology and innovation in Hawaii.

As a decentralized community event, establishing the event calendar for Honolulu Tech Week involves event hosts proposing events, Honolulu Tech Week Staff review the events, communicates feedback or requests for more information to the Event Host, and eventually either approves or declines the event.

When Event Hosts submit an even they should specify a list of dates and times when they are willing to host the event. Honolulu Tech Week Staff can then select a time slot that works best with other events to minimize overlap.

Once an event is approved, it needs to be created in [Luma](https://luma.com/) either manually by the Host, or via the Luma API. If an Event Host creates there own event, they should provide the event URL and invite the official Honolulu Tech Week Luma account to be a manager of the event. The event should then automatically be added to the official Honolulu Tech Week calendar. If the account is created via the Luma API then the Event Host should be invited to be a manager of the event.

Once an event is approved and exists marketing communication needs to be sent out at regular intervals via both official Honolulu Tech Week channels and via the Event Host's channels to drive awareness and registration. The Event Host is responsible for authoring the content of these posts, and can use the Honolulu Tech Week Event Manager to create and send these via integration with Facebook, Instagram, Twitter, and other social media platforms. The Event Hosts can also submit promotional post content for Honolulu Tech Week staff review for them to approve and automatically post via official channels.

# Personas

## Honolulu Tech Week Staff

Honolulu Tech Week Staff are administrators of the official Event Calendar. They review the incoming queue of Event proposals, send communication to Event Hosts, and eventually either approve or decline an Event. Once an Event has been approved, Honolulu Tech Week Staff manage official marketing posts for the events. They also continue to communicate with Event Hosts in the event that changes need to be made.

Honolulu Tech Week Staff also review analytics for the Event Calendar including the number of attendees registered for the approved Events, and after the fact the number of attendees who were actually present.

## Event Hosts

Event hosts are responsible for proposing, arranging, and actually hosting the events that make up Honolulu Tech Week. They may first use the site solely to find information and learn about the process of hosting a Honolulu Tech Week Event. Once they are ready to propose an event, they will create an account and manage one or more event proposals which start out in a draft status and are eventually submitted. They will then correspond with Honolulu Tech Week Staff via the site to provide more information or make adjustments to their event proposal based on feedback. 

# Tech Stack

The Honolulu Tech Week Event Manager is comprised of a React.js frontend compiled using the Vite build system, and an Express.js based TypeScript backend. Postgres is used for relational data storage with TypeORM for code-first schema definition (using the typeorm CLI for database synchronization and migration).

The backend provides a OpenAI specification and Swagger UI via [TSOA](https://tsoa-community.github.io/docs/getting-started.html). The frontend generates a type safe API client using [swagger-typescript-api](https://github.com/acacode/swagger-typescript-api).

The front end should use material-ui React components and design standards. No other UI or CSS libraries or methodologies should be introduced unnecessarily.