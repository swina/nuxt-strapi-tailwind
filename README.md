# Nuxt / Strapi / TailwindCSS Starter WebSite

**Project is under development and requires a custom backend not yet available as repository**

I decided to use Strapi as CMS framework in order to give me complete control about my content, possibility to edit and get immediate update without rebuilding when a new content has been added or even updated. 

In my case I used a traditional mySQL database, but you can easily cheange your settings and choose mongoDB as well.

## Features
- custom content
- pages and articles (posts)
- use friendly url's (slug)
- auto menu
- tags
- SEO 
- media management 
- random content images based on tags/title

## Content-Type Structure

- Categories
- Articles (Posts)
- Pages
- Tags
- Users

**Single Entities**
- Settings

I used a Single Entity Content Type in order to set general data that are used. Typical settings are:

- site name
- site title
- logo
- email
- footer text (copyright and other info)
- social links

You can also customize your settings adding colors, typography etc. in order to  render the output per your needs


**Components**

- Seo :   description, keywords
 
This component is linked to Articles and Pages in order to add for each entry seo values that will be used to customize the head of each entry.


## Backend and Frontend

Since I decided to use NuxtJS and Strapi I created two apps, one for the backend (Strapi) and for the frontend (NuxtJS)

### Development 
In order to start working on development of your website you need to install locally 
- Frontend (NuxtJS)
- Backend (Strapi)

#### Start the frontend server

```bash
# Using yarn
yarn install
yarn develop

# Using npm
npm install
npm run develop
```

Nuxt server is running here => [http://localhost:3000](http://localhost:3000)

Enjoy this starter


#### Strapi Backend

Clone the repository

``` git clone https://github.com/swina/swina-strapi-cms```


Go to your installation folder (swina-strapi-cms)

``` npm install```


**Database Connection**
In order to connect to a database (I am using mySQL, but you can change to PostGres or MongoDB) you need to change the following settings in **config/database.js**
***Remember that you need that a database already exists***


```
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'mysql',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 3306),
        database: env('DATABASE_NAME', 'strapi-cms'),
        username: env('DATABASE_USERNAME', 'root'),
        password: env('DATABASE_PASSWORD', ''),
        ssl: env.bool('DATABASE_SSL', false),
      },
      options: {}
    },
  },
});
```

Run develop

``` yarn develop```



