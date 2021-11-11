# imageupload-node
image uploading with node, express, GridFSstorage and mongoose to mongodb-instance

# start MongoDB
1. cmd with admin-rights: "net start MongoDB" (starts the service)
2. cmd with admin-rights: "mongod" (makes db listen to conenctions)
3. cmd with admin-rights: "mongo" (opens mongo shell)
4. in mongo-shell: "use YOUR-DB-NAME"

# Change connection-string 
change mongoURI to your db to look something like this: "mongodb://127.0.0.1:27017/yourDB"
this is located under the upload-middleware

# start backend
cd into /src and run "npx nodemon index.js"

open browser at "localhost:6695"
