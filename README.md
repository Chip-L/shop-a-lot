# Shop A Lot

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A fun tool for Dungeon Master's and players alike to introduce a fun element to their next Dungeon and Dragon's campaign. This Amazon style ecommerce site allows players to make accounts and place orders for their favorite fantasy gear. Our databases are seeded with source material straight from Wizards of the Coast SRD. Next day underdark delivery by our highly qualified Gnome Delivery Team comes exclusively with our Shop A Lot Prime membership.

In seriousness, we are a group of nerds dedicated to creating a more accesible, more friendly community around Dungeons and Dragons so more people can enjoy the hobby with less barriers to entry.

# Table of Contents

- [Features](#Features)
- [Future Features and Issues](#Known-Issues-and-Future-Features)
- [Finished Product](#Finished-Product)
- [Tech](#Technologies-Utilized)
- [Testing](#Testing)
- [Dependencies](#Install-Dependencies)
- [Database](#Seed-Database)
- [Server](#Start-Server)
- [License](#License)
- [Contributors](#Contributors)

## Features

- User Account Authentication and Creation
- Full 3.5e SRD gear imported
- Mostly accurate info

## Known Issues and Future Features

- (coming soon) Account creation comes with gold addition and subtraction
- (coming soon) Custom images for more of the items
- (coming soon) Allow DM's to create a custom shop for their players
- (coming soon) DM's will create homebrew and custom items for their campaign
- (coming soon) Responsive design for mobile devices and smaller screens

Got more issues? Report them on GitHub so that we can fix it!

## Finished Product

Deployed App: [Shop A Lot]()

## Technologies Utilized

App built in Node.JS with vanilla CSS and JS

Nodemailer package for email confirmation

Bcrypt for user authentication

## Testing

```
No tests specified
```

## Install Dependencies

```
npm i
```

## Seed Database

Copy schema in db and then:

```
npm run seed
```

## Start Server

```
npm run start
```

### License

Copyright 2021 Denver University Full Stack Bootcamp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

### Contributors

- Chip Long
- Sam Roberson
- Lauren Gabaldon
- Sam Brookshire
