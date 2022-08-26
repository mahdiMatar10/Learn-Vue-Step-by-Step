export default{
    template:`

    <form @submit.prevent="add">
        <div class="text-black">
            <input v-model="newAssignment" placeholder="New assignment.." class="p-2 "/>
            <button type="submit" class="p-2 bg-white border-l">Add</button>
        </div>
    </form>
    `,

    props:{
        assignments: Array
    },

    data(){
        return{
            newAssignment:''
        }
    },
    methods:{
        add(){
            this.assignments.push({
                name: this.newAssignment,
                complete: false,
                id: this.assignments.length + 1 
            }),
            this.newAssignment=""
        }
    }
}