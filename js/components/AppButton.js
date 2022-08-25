// the defualt thing that we're exporting is an object 
export default{
    
    template:`
    <button class="bg-gray-200 hover:bg-gray-400 border rounded px-5 py-2 disabled:cursor-not-allowed" :disabled="processing">
    
         <slot/>
     </button>
    `, 
    // props object 
    props:{
        // prop type is strings (data type[object, array, boolean, string, ...])
        // this is a name of the prop
        type: {
            // this is a type of the prop 
            type: String,
            default: 'primary'
        } 
    },
    
    data(){
     return{
         processing: true
     }
    }
}
