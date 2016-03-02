# node-mentoring-express-mongo
Examples and presentation for mentoring program.

It is second part of mentoring node program. It is include information about express, MongoDB and mongoose. In branch gh-pages you can find presentation.

If you have any suggestions or ideas for improvement, please let me know.

## Plan:
### Express.js – a node.js web framework

 * Based on [Connect](https://github.com/senchalabs/connect)
 * De facto standard framework of node web apps
 * Minimalistic, unopinionated
 * Supports a variety of middleware
 * Alternatives: hapi, restify, geddy, koa

REST
express is based on a [Connect](https://github.com/senchalabs/connect)

### Basics
 * Middleware concept
 * REST request type filter
 * configuration of express
    * app.get('env')
    * app.set('token', 'express')
    * app.get('token')
    * app.locals // do not uses in express core, you can use it as global storage
    * key sensetive Routing
    * view dirrectory
 * Request
    * req.app
    * req.accepts
    * req.protocol
    * req.query
    * req.subdomain
    * req.xhr
 * Response
    * res.app
    * res.send
    * res.status
    * res.sendFile
    * res.download
    * res.format
    * res.redirect
    * res.sendStatus
    *
    * res.body
    * res.files
    * res.setheaders
    * res.attachment
    * res.links
 * coockies
    * res.coockies
    * signed coockies

### Middleware concepts

 * Some useful built in middleware (like bodyParser)
 * Useful for preprocessing requests
 * Authentication/Authorization
parsing request
body-parser
    * .json()
    * .urlencoded
multer (npm package)
express.static // only build in middleware
//todo: create middleware
use new application as middleware

next('route')
1. middleware levels
    * app
    * Router
    * Error (4 args)
    * third-party

### Routing

 * Respond to HTTP requests with a callback
 * Supports variable placement in routes
 * Easy to serve JSON
express.Router()
app.route().get etc.
1. routing path filter type:
 * String
 * String pattern
    * url parameters ? in some midlewear ?
 * regexp
    * url parameters

### Rendering, Layouts, Templating
 res.render
 engine registration
 * jade
 * EJS

### Publishing

 * heroku
 * mongolab

### MongoDB
 * SQL libraries supported, but not especially popular
 * Best community support is around Postgres (JSON column)
 * Document stores more popular, good fit for JS
 * MongoDB or CouchDB are popular primary durable data stores
 * redis is popular for fast, in-memory data storage


1. mongo
    * documents
    * collections
    *

mongo shell

Work
    * READ, Projections, filtration
    * insert, bulkinsert
    * update
    * remove
    * aggregation
    * Map reduce
    *

### ORM-way: Mongoose
 * Object Document Mapper (ODM)
 * Most popular ODM in npm
 * Nice high level APIs
 * Fairly extensive docs
1. MONGOOSE CONCEPTS: SCHEMA
     * MongoDB by default enforces no data format
     * Mongoose does with the "Schema" object
     * Schema: define data types, validation, instance, and "static" functions
2. MONGOOSE CONCEPTS: MODEL
     * Representation of a MongoDB document
     * Synthesized from a Schema
     * You use the Model to actually create, query, and modify documents
3. HOSTED MONGODB
     * [MongoHQ](https://www.compose.io/mongodb/)
     * [Mongo Lab](https://mongolab.com/)

fields types
validation
model static methods
model methods
virtual property

find
insert
update
remove

use q for mongo
### Sessions and authentication in node.js. PassportJS

    * strategies
    * Sessions
    * Configurations
    * Local autentification
    * OPENID
    * OAUTH 1.0, 2.0
    * Ginhub autorisation
### Sockets

1. SOCKET.IO AT A HIGH LEVEL
 * Thin wrapper around [WebSockets](http://www.html5rocks.com/en/tutorials/websockets/basics/)
 * Works in tandem with an HTTP Server
 * Documentation: less than awesome, [wiki is better] (https://github.com/socketio/socket.io) than site
2. KEY FEATURES
 * Client/Server Push
 * Broadcast
 * Client "session" information
 * Message namespaces
 * Plain ol' WebSockets API as well  

todo: explain WebSockets itself
what is realtime?
    * providing of realtime
        * Periodic pooling
        * long pooling (memory )
        * forever polling (can't findout where client is missing)
        * websockets

websockets emit on all users, emin on spesific user, emit on overs
server part
client part
namespaces
broadcast
volatile


### Unit testing