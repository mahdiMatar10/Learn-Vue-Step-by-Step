import AssignmentList from "./AssignmentList.js";
// we made assignmentList generic which means we can pass in data from the outside to configure it 
export default {
    components:{AssignmentList},
  template: `
    <section class="space-y-6">
    
        <Assignment-list :assignments="filters.inProgress"  title="In Progress"></Assignment-list>
        
        <Assignment-list :assignments="filters.completed"  title="Completed"></Assignment-list>

        <form @submit.prevent="add">
            <div class="text-black">
                <input v-model="newAssignment" placeholder="New assignment.." class="p-2 "/>
                <button type="submit" class="p-2 bg-white border-l">Add</button>
            </div>
        </form>
        
    </section>

    `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: false, id: 1 },
        { name: "Read Chapter", complete: false, id: 2 },
        { name: "Turn on homework", complete: false, id: 3 },
      ],

      newAssignment: ''
    }

    ;
  },

  computed: {
    filters(){
        return{
            inProgress: this.assignments.filter((assignment) => !assignment.complete),
            completed: this.assignments.filter((assignment) => assignment.complete)
        }
    }
  },

  methods:{
    add(){
        this.assignments.push({
            name: this.newAssignment,
            complete: false,
            id: this.assignments.length + 1 
        }),
        this.newAssignment='';
    }
  }
};
