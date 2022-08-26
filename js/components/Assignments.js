import AssignmentList from "./AssignmentList.js";

import AssignmentCreate from "./AssignmentCreate.js";

// we made assignmentList generic which means we can pass in data from the outside to configure it 
export default {
    components:{AssignmentList, AssignmentCreate },
  template: `
    <section class="space-y-6">
    
        <Assignment-list :assignments="filters.inProgress"  title="In Progress"></Assignment-list>
        
        <Assignment-list :assignments="filters.completed"  title="Completed"></Assignment-list>
        
        <assignment-create :assignments="assignments"></assignment-create>
    </section>

    `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: false, id: 1 },
        { name: "Read Chapter", complete: false, id: 2 },
        { name: "Turn on homework", complete: false, id: 3 },
      ]
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
        })
    }
  }
};
