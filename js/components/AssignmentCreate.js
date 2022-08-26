export default{
    template:`

    <form @submit.prevent="add">
        <div class="text-black">
            <input v-model="newAssignment" placeholder="New assignment.." class="p-2 "/>
            <button type="submit" class="p-2 bg-white border-l">Add</button>
        </div>
    </form>
    `,
    data(){
        return{
            newAssignment:''
        }
    },
    methods:{
        add(){
            // emit is view specific method 
            // pass through any data we want 
            // submit = mean Ajax request not updata the array

            // the parent to comunicate the child by props but 
            // the child to comunicate the parent by emittig an event 
             this.$emit('add' , this.newAssignment);
            // this.assignments.push({
            //     name: this.newAssignment,
            //     complete: false,
            //     id: this.assignments.length + 1 
            // }),
            this.newAssignment=""
        }
    }
}