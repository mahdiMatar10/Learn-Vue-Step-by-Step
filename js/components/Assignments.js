import AssignmentList from "./AssignmentList.js";
// we made assignmentList generic which means we can pass in data from the outside to configure it 
export default {
    components:{AssignmentList},
  template: `

    <Assignment-list :assignments="inProgressAssignments"  title="In Progress"></Assignment-list>
    
    <Assignment-list :assignments="completedAssignments"  title="Completed"></Assignment-list>

    `,
  data() {
    return {
      assignments: [
        { name: "Finish Project", complete: false, id: 1 },
        { name: "Read Chapter", complete: false, id: 2 },
        { name: "Turn on homework", complete: false, id: 3 },
      ],
    };
  },

  computed: {
    inProgressAssignments() {
      return this.assignments.filter((assignment) => !assignment.complete);
    },
    completedAssignments() {
      return this.assignments.filter((assignment) => assignment.complete);
    },
  },
};
