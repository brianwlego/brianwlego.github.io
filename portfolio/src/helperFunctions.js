// Helper functions used in components //
function uuidv4(){
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}
export function getAllImages(context){
  return context.keys().map(i=>{return{id:uuidv4(), src:context(i)}});
}