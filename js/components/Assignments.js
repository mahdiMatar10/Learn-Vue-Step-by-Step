import AssignmentList from "./AssignmentList.js";

import AssignmentCreate from "./AssignmentCreate.js";

// we made assignmentList generic which means we can pass in data from the outside to configure it
export default {
  components: { AssignmentList, AssignmentCreate },
  template: `
    <section class="flex gap-8">
    
        <Assignment-list :assignments="filters.inProgress"  title="In Progress">
          
        <assignment-create @add="add"></assignment-create> 
        
        </Assignment-list>
        
        <Assignment-list :assignments="filters.completed"  title="Completed" can-toggle>
        </Assignment-list>
        
        
    </section>

    `,
  data() {
    return {
      assignments: [

      ],
    };
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter(
          (assignment) => !assignment.complete
        ),
        completed: this.assignments.filter((assignment) => assignment.complete),
      };
    },
  },
  created() {
    fetch("http://localhost:3001/assignments")
      .then(response => response.json())
      .then(assignments => {
        this.assignments = assignments;
      })
  },

  methods: {
    add(name) {
      this.assignments.push({
        name: name,
        complete: false,
        id: this.assignments.length + 1,
      });
    },
  },
};
