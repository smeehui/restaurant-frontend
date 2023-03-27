import { default as axios } from "axios";

const getAllPosts = async () => {
    console.log("getting all posts....");
    // const graphqlQuery = {
    //     query: `query AllUser{
    //                 users{
    //                     id
    //                     fullName
    //                     email
    //                     password
    //                 }
    //             }`,
    //     variables: {},
    // };

    let result = await axios({
        url: GET_ALL_USER,
        method: "get",
        // headers: {
        //     "content-type": "application/json",
        // },
        // data: JSON.stringify(graphqlQuery),
    }).catch((jqXHR) => console.log(jqXHR));
    return result.data;
};

export { getAllPosts};
