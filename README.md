# ComicBase
1. There are three entities on this platform Series-> Season-> Comics Series - Series is independent entity which may contain 1 or multiple seasons. It contains (Name, description, created date, updated date, created by) Season - Season depends on Series which may contain 1 or multiple comics.(Name, description , starts on, ends on, created date, updated date) Comics - Comic depends on Season comic is single entity. which contains (Name, image, story, created date, updated date).
2. Platform will have 3 roles (Super Admin/ Admin/ User)
3. Super Admin can add/edit/ delete (Admin and User)
4. Admin can add/edit/delete (Season/Series/Comics)
5. User can see, search and comment on comics.
6. Super admin / Admin (Need to login to perform any action)
7. Searching can be done without login(Commenting can not be done without login)
8. Use Normal Bootstrap UI.
9. User can search, login and comment using app.
10. Json structure for apis should be { "status": true, "respData": { "data": "your data either json or array" } }

#Installation
1. npm install in both node and server side. 
2. "ng serve" to run client side.
3. "node app.js" to run server side.
4. "npm install ng2-datepicker" to use datepicker feature.

