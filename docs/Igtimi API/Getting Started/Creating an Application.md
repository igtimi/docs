---
title: Creating an Application
date: 2021-08-18
---

# Creating an Application

# Create an application

## Why create an application

- Want to have own application to analyse data
- Make an application that you have control over users that can log in to see authorised data
- multiple logins with users accessing different data

If you are only wanting to access the data on one user account that already has access to devices or data, then contact us as we can set you you with a temporary token.

## Register an application

Under the "Developers" tab, select "My Apps" then click the "Register App" button.

Your app will need a NAME and a REDIRECT_URI.

- NAME can be anything at all, but when a user accesses your app for the first time they will be asked to approve your application, using this name, to access their account.
- REDIRECT_URI is an OAuth2 concept.  Set this to _urn:ietf:wg:oauth:2.0:oob_ for now, you can change it later.

That's it!  After clicking "Create new app" you will be returned a CLIENT_ID and CLIENT_SECRET.  Don't share these with anyone, the CLIENT_ID and CLIENT_SECRET are what uniquely identifies and authorises your application to access the API.
