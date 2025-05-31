import React from "react";

const UserContext= React.createContext()

export default UserContext;
// context banane k baad apko ek provider bhi banana padeta h 
/* example 

<UserContext>

<login>

</login>
<card>
    <dashboard>
        
    </dashboard>
</card>


</UserContext>

see above example and we make provider
--> usercontext ke andr jitne bhi compontes h bo usercontext k through k sari 
states ka excess le skenge 


*/

