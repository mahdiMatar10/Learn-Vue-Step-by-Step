import Assignments from "./Assignments.js"
import Panel from "./Panel.js";

export default {

        // for registar componantes
        components:{ Assignments,Panel },

        template:`

        
        <div class="grid gap-6">
            <assignments></assignments>
            <panel>
            
            <template v-slot:default>This is the my default text</template>
            </panel>

            <panel>
            
            <template v-slot:heading>Hello world</template>
            This is the my default text
            </panel>

            <panel>
            
            <template v-slot:heading>Hello world</template>
            This is the my default text

            <template v-slot:footer>Click here to learn more</template>
            </panel>
        </div>

        `
          };