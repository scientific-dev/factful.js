# Factful.js
A Package which can give you Random Facts, Random Nasa Images in an easy way!

# Index
- Importing Module
- Getting Random Facts
- Getting Random Nasa Image

# Links
- [GitHub](https://github.com/Scientific-Guy)
- [Discord Server](https://discord.gg/FrduEZd)
- [Npm Package](https://www.npmjs.com/package/factful.js)

## Quick Example
#### 1. Importing Module
```js 
// Import Modules
const factful = require('factful.js')
```

#### 2. Getting Facts
```js 
const facts = factful.fact()

// Getting Random Fact from Random Cateogary
console.log(facts.all)

// Getting Random Fact from a Paticular Cateogary
// Current Cateogaries: emoji, space, cat, dog, covid, computer
console.log(facts.emoji)
console.log(facts.space)
console.log(facts.cat)
console.log(facts.dog)
console.log(facts.covid)
console.log(facts.computer)
```

#### 3. Getting Random Nasa Image
```js 
// Will return you the Image URL not the Image File!
console.log(factful.nasa())
```

### © Science Spot | Decimal Development - 2020
