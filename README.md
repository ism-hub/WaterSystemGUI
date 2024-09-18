# Water System GUI
The front-end for the Water System project. Using [Angular](https://angular.io/) and [Redux](https://redux.js.org/). The GUI is a JavaScript page (after angular 'compiles' the TypeScript to JavaScript) that talks to REST servers on the ESP8266.

# Run
Clone from git -
```git
git clone https://github.com/ism-hub/WaterSystemGUI.git
```
Install dependencies, in the terminal type -  
```terminal
npm install
```
Install Angular CLI - 
```terminal
 npm install -g @angular/cli
 ```
Start the development server - 
```terminal
 ng serve -o
 ```
# Connect To The Server (The ESP chip provides the REST API)
In order to use the GUI to control the ESP chip you need to connect them, this is done by simply connecting the ESP (REST Server) to the same network you view the GUI page. If you followed the above steps you already have a window running the GUI on your browser. Now all you have to do is to connect the ESP to the same network your computer is on.
### Connect The ESP To Your Home Network
- Follow the instructions on how to run the [back-end](https://github.com/ism-hub/WaterSystemBackend) (compile and upload it to the ESP).
- Connect your computer to the ESP Access-Point  SSI: ESP8266123 Pass: ESP8266123 ![ESP AP](https://i.imgur.com/s74ch7b.png)
- Now the GUI controlling the ESP (your PC and the ESP are on the same network (The ESP network)). In the GUI go to the 'Station View -> Scanner View' and choose your home network and connect to it (make sure you check the 'auto connect' box to avoid repeating these steps again) ![Station Scanner](https://i.imgur.com/IQXJrWV.png)
- Done, connect your PC back to your home network and use the GUI to control the ESP from there.

# The Views 
### Menu
Can navigate to different views from here - 
![Menu](https://i.imgur.com/EYAK4Em.png)

### The Station View
#### Status View
Shows information about the network our ESP is connected to - 
![Station Status](https://i.imgur.com/z337qb4.png)

#### Scanner View
Shows information about nearby networks and the possibility to connect to them - 
![Station Scanner](https://i.imgur.com/IQXJrWV.png)

### The Access-Point View
#### Status
Information about the ESP as an Access-Point - 
![AP Status](https://i.imgur.com/rpYnz6X.png)

#### Settings
Can view and change the Access-Point settings -
![AP Settings](https://i.imgur.com/MuQt69T.png)

### The Garden View (our model)
Can set water programs add flowers etc. (needs a little visual update..)
![Garden](https://i.imgur.com/U1g6Mo9.png)


token= "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"

