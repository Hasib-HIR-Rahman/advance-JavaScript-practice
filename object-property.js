 const student = [
     {id: 30, name: 'Manna'},
     {id: 32, name: 'Banna'},
     {id: 34, name: 'Panna'},
     {id: 36, name: 'Tanna'},
     {id: 38, name: 'Janna'},

 ];
 const names = student.map(s => s.name);
 const ids = student.map(s => s.id);

 console.log(names, ids);