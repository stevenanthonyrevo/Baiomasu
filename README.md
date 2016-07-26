# Baiomasu
A platform for application building known as a BIOMASS 

Within this application framework. We provide:

A biosphere layer (Parse - Server) 

Bakku (Parse - Dashboard) 

Client (Angular)

ClientExampleLogin (Jquery) *Subject to change

##Start With:   
```
npm start 
```
##Redirect:   
```
Root: http://localhost:1338 
Bakku: http://localhost:1338/dashboard
clientExampleLogin: http://localhost:1338/example
```

##Manual Start Up
####(Mongo needs to be running first)
```
 brew services start mongodb 
```
####(Now start up http server)
```
node server.js
```
##Manual Shut Down
####(Mongo will need to be shutdown)
```
 brew services stop mongodb 
```
####(Shows all running services)
```
 brew services list
```
####(Cleansup all running services)
```
 brew services cleanup
```
