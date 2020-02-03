import React from 'react';
import Weapon from './Data/Weapon'
import WeaponDetailComponent from './Components/WeaponDetailComponent'


import './App.css';

class App extends React.Component {

  countFodders: any = (level: number, pointNeeded: number) => {
    var fodders = [];
    var wep = new Weapon(1, level);

    if (pointNeeded === wep.getValue()) {
      fodders.push(wep);
      if (level > 1) {
        do {
          level = level - 1;
          fodders.push(this.countFodders(level, pointNeeded));
        }
        while (level > 1);
      }
      else {
        return [wep];
      }
    }
    else if (wep.getValue() < pointNeeded) {
      fodders = this.countFodders(level, pointNeeded - wep.getValue());
      if (fodders) {
        fodders.push(wep)
      }

      return fodders;
    }
    else {
      fodders = this.countFodders(level - 1, pointNeeded);
    }
    return fodders;
  };


  flattenArray = (array: any[]) => {
    let newArray: any = [];
    array.forEach(item => 
      {
      if (Array.isArray(item)) 
      {
        let noArray = true
        item.forEach(subItem => 
          {
          noArray = noArray && !Array.isArray(subItem)
        })

        if (noArray) 
        {
          newArray.push(item)
        }
        else 
        {
          // if there's still some array in there...
          // let mainValue = item[item.length - 1];
          // item.length -= 1;

          let mainValue: any = null;
          let lastElement = null;

          for (var i = item.length - 1; i >= 0; i--) {
            lastElement = item[item.length - 1]

            if (Array.isArray(lastElement)) {
              break
            } else {
              item.length -= 1
              if (mainValue === null || mainValue === undefined)
                mainValue = [lastElement]
              else mainValue.push(lastElement)
            }
          }

          let miniArray = this.flattenArray(item)
          for (var j = 0; j < miniArray.length; j++) {
            newArray.push([...mainValue, ...miniArray[j]])
          }

          newArray = [...newArray]
        }
      }
      else {
        // if only a single item
        newArray.push([item])
      }
    })

    return newArray
  }
  render() {

    let array = this.countFodders(6, 240);
    let flattenedArray: any[] = this.flattenArray(array);
    var details = flattenedArray.map((arrElement, index) => {
      return (
        <WeaponDetailComponent
            weapons={arrElement}
            key={index}
        />
      );
    }); 

    return (
      <div>
        {details}
      </div>
    );
  }

}

export default App;
