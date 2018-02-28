# moment-holyday-fr

Extensions for the library [momentjs](https://momentjs.com) to get french holydays.

```typescript
import * from "moment";
import "./moment-holyday-fr";
```

## Functions

### isHolyday
Returns true if the date is a holyday.

```typescript
let date = moment("1995-12-25");
if (date.isHolyday())
  console.log("it's a holyday");
 else
  console.log("it's not a holyday");
//prints "it's a holyday  
```

### getHolyday
Returns the name of the holyday if the date is a holyday, returns undefined if it is not.

```typescript
let date = moment("2018-04-02");
date.getHolyday()
//prints "Lundi de pâques"
```

### getHolydayList
Returns the list of the holydays of the year

```typescript
for (const holyday of moment().year(2017).getHolydayList())
  console.log(holyday.name + " is the " + holyday.date.format("L"))
/* prints: 
Jour de l'an is the 01/01/2017
Lundi de pâques is the 04/17/2017
Fête du travail is the 05/01/2017
Victoire 1945 is the 05/08/2017
L'ascension is the 05/25/2017
Pentecote is the 06/05/2017
Fête Nationale is the 07/14/2017
l'Assomption is the 08/15/2017
Toussain is the 11/01/2017
Armistice is the 11/11/2017
Noel is the 12/25/2017
*/
```
