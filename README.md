# Robust_server_structure-_Assessment-Dennis_Wells-Solution
 
Robust server structure: URL shortener service
Instructions
Your task is to build a URL shortener service API using Node.js and Express. It should allow users to submit a URL and receive a "shortened" code, or ID, that can be used to retrieve the original URL later. It should also keep track of how often each shortened URL is retrieved so that you can calculate the most popular URLs.

What is a URL shortener?
The ecommerce company that you work for sells many different products under different categories. Here's an example: www.shoppingsite.com/category/shoe/product/nike132032.

If a customer wants to share a link to the product on Twitter, they may run into restrictions on the text length.

A URL shortener service overcomes this issue by shortening www.shoppingsite.com/category/shoe/product/nike/132032 to www.shoppingsite.com/8d13lk2k.

Existing files
You will only need to edit the src folder and follow code organization principles you learned in this module.

Use the existing data files located in src/data for the responses. Feel free to add or remove data from the files as necessary, but keep the same shape of the data.

Tasks
Create routes and handlers to create, read, update, delete, and list short URLs
You will need to create the following API endpoints for the urls resources:

HTTP verb	Path	Description
POST	/urls	Create a new short URL
GET	/urls/:urlId	Retrieve a short URL by ID
PUT	/urls/:urlId	Update a short URL by ID
GET	/urls	Retrieve a list of all short URLs
GET	/urls/:urlId/uses	Retrieve a list of use metrics for a given short URL ID
GET	/urls/:urlId/uses/:useId	Retrieve a use metric by ID for a given short URL ID
Short URLs cannot be deleted once created, because this would break existing links.

Create
The following Postman screenshot shows the data posted to /urls and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/b72c83c2-acbd-48a0-9bf7-c5d8cb0f8e0f)


Create a Short URL in postman

POST { data: {"href":"www.some-url.com"} } to /urls should assign an id to the object, save it, and return the saved object as a response to the client.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/17e8f6cf-5d21-4c70-8bae-4e5bb1228942)


Read
The following Postman screenshot shows a GET request to /urls/:urlId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/45ae89bf-af35-4d60-a4da-3f872fecda55)


Additionally, use records are created as a side effect of a GET request to /urls/:urlId. Each use record contains an id, a urlId which corresponds to ID of the URL being tracked by the use metric, and a time property (set to Date.now()) indicating when the use metric was recorded.

Read a Short URL in postman

Update
The following Postman screenshot shows a PUT request to /urls/:urlId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/dbbb2453-9799-48df-a386-3218c3293f44)


Update a Short URL in postman

List
The following Postman screenshot shows a GET request to /urls and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/2827e926-dc6c-4584-ad2e-3a7bd0a4cf71)


Update a Short URL in postman

Delete
The following Postman screenshot shows a DELETE request to /urls/:urlId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/c26b5de1-7cb2-456e-ad83-e92f3d5a3afd)


Delete a Short URL in postman

List short URL uses
The following Postman screenshot shows a GET request to /urls/:urlId/uses and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/a0049aa4-8bda-4826-8820-1853dd575fc3)


List Short URL uses's in postman

Read short URL use
The following Postman screenshot shows a GET request to /urls/:urlId/uses/:useId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/865d3a37-fcf7-408c-81ee-5649e5535e2e)


List Short URL uses in postman

The service should return a 404 error if the :urlId and :useId are mismatched. For example, if you send a GET request to /42/uses/79, and useId 79 isn't associated with urlId 42, the server should respond with 404.

Create routes and handlers to create, read, update, delete, and list use metrics related to short URLs
You will need to create the following API endpoints for the uses resources:

HTTP verb	Path	Description
GET	/uses/:useId	Retrieve a use metric by ID
DELETE	/uses/:useId	Delete a use metric by ID
GET	/uses	Retrieve a list of all use metrics
The uses resources have a path of /uses and are a record of every GET request for a specific short URL.

Create
Creating use records through the API is not allowed. Use records are created as a side effect of a GET request to /urls/:urlId.

The following Postman screenshot shows the data posted to /urls/:urlId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/9b34d583-788a-4f3e-9bf8-0e61c4bcc254)


Create a use in postman

Read
The following Postman screenshot shows a GET request to /uses/:useId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/d1d63086-3038-42e6-b5a2-9ce4d78682cf)


Read a use in postman

Update
The following Postman screenshot shows a PUT request to /uses/:useId and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/e046278d-5434-4241-96a0-6e08b494fde7)


Update a use in postman

Delete
The following Postman screenshot shows a DELETE request to /uses/:useId and the 204 response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/415671bd-c264-4f37-ae5d-18fc36acd6c0)


Delete a use in postman

List
The following Postman screenshot shows a GET request to /uses and the response from the server.
![image](https://github.com/Dennis231708/Robust_server_structure-_Assessment-Dennis_Wells-Solution/assets/56503655/bd6bc8ef-b2d1-4edb-806b-7f1aa169bfb5)


List uses in postman

Handle errors properly
Return a 404 error for any nonexistent path or resource.
Methods that are not allowed should return 405 (e.g., a DELETE request sent to /urls/:urlId)/
Saving data
There is no database in use for this project. All changes are stored in-memory.

The short URL data is exported from /src/data/urls-data.js.

The use data is exported from /src/data/uses-data.js.

There is some existing data in each file to give you a starting place.

Add and remove data from the arrays using push() and splice(), respectively.

When you restart your server, any changes made to these arrays will be lost.

Assigning IDs
IDs are often assigned by the database. Since your API is not connected to a database, you can use array.length + 1 to assign IDs, as follows:

const newUrlId = urls.length + 1;
const newUseId = uses.length + 1;
However, note that this method of assigning IDs to your database records is not recommended in practice and is only used in this assessment for simplicity so that you can focus on building the API. Later on, in the backend module, you will learn about industry-standard databases and better ways to assign IDs to database records.

Assigning time property
Use Date.now() to assign the time property of uses.
