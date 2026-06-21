let devOpsTools=["Git","Docker","Jenkins","Ansible"];

// console.log("DevOps Tools: ",devOpsTools);

// devOpsTools.push("Kubernetes");

// console.log("Updated DevOps Tools: ",devOpsTools);

// devOpsTools.shift("docker");

// console.log("After removing the first tool: ",devOpsTools);


console.log("DevOps Tools: ",devOpsTools);
devOpsTools.unshift("Terraform");        // it adds the element at the beginning of the array
console.log("After adding a tool at the beginning: ",devOpsTools);
devOpsTools.shift("Terraform");          // it removes the first element of the array
console.log("After removing the first tool: ",devOpsTools);
devOpsTools.push("Kubernetes");          // it adds the element at the end of the array
console.log("After adding a tool at the end: ",devOpsTools);
devOpsTools.pop("Kubernetes");          // it removes the last element of the array
console.log("After removing the last tool: ",devOpsTools);





