# Student App Frontend

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

## Troubleshooting

When you get an error after trying to run the app which looks like this:

![troubleshooting](https://github.com/user-attachments/assets/8a11275e-07b7-4c15-8496-b1f652292d2a)

You have to paste this line: 
   ```javascript
   import gluestackPlugin from "@gluestack-ui/nativewind-utils/tailwind-plugin";
   ```
at the beginning of the ***index.js*** file located in `Frontend\node_modules\@gluestack-ui\nativewind-utils\tailwind-plugin` then respectively comment or delete from the file this line:
   ```javascript
   const plugin = require('tailwindcss/plugin');
   ```
and that part of the code:
   ```javascript
   const gluestackPlugin = plugin(function ({ matchVariant, }) {
       matchVariant('data', (_value) => {
           if (!_value.includes('=')) {
               return `&`;
           }
           const [state, value] = _value.split('=');
           return `&[data-${state}="${value}"]`;
       }, {
           sort(a, z) {
               return getStatesWeight(a.value) - getStatesWeight(z.value);
           },
       });
   });
   ```
After those steps the project should start properly.



