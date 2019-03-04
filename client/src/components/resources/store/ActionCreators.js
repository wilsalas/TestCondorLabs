//action to store the list of users
const GetCountListUser = listUsers => {
    return {
        type: "COUNT_LIST_TO_USER",
        listUsers
    }
}
//action to store the list of groups
const ListGroups = listGroups => {
    return {
        type: "LIST_GROUPS",
        listGroups
    }
}

export {
    GetCountListUser,
    ListGroups
}