import { default as axios } from "axios";

const getAllUsers = async () => {
    console.log("posting....");
    const graphqlQuery = {
        query: `query AllUser{
         users{
             id
             fullName
             email
             password
         }
     }`,
        variables: {},
    };
    let result =  await axios({
        url: "http://localhost:4000/graphql",
        method: "post",
        headers: {
            "content-type": "application/json",
        },
        data: JSON.stringify(graphqlQuery),
    });
    return result.data.data.users
};
export default getAllUsers;
