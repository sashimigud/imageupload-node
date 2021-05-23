# imageupload-node
image uploading with node, express, GridFSstorage and mongoose to mongodb-instance

#start MongoDB
1. cmd with admin-rights: net start MongoDB
2. (optional) cmd with admin-rights: mongod (opens mongo-shell)

#Change connection-string 
change mongoURI to your db to look something like this: "mongodb://127.0.0.1:27017/yourDB"
this is located under the upload-middleware

#start backend
cd into /src and run "npx nodemon index.js"

open browser at "localhost:6695"
