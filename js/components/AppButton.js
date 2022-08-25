// the defualt thing that we're exporting is an object 
export default{
    
    template:`
    <button 
    
    :class="{
        
        'border rounded px-5 py-2 disabled:cursor-not-allowed': true,
        'bg-blue-400 hover:bg-blue-600': type == 'primary',    
        'bg-purple-400 hover:bg-purple-600': type == 'secondary',    
        'bg-gray-200 hover:bg-gray-400': type == 'muted',
        'is-loading': processing    

    }" 
    
    :disabled="processing">
    
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
        } ,

        processing:{
            type:Boolean,
            default:false
        }
    }
    


}
