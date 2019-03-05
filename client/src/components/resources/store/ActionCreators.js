//action to store the list of users
const Users = users => ({
    type: "USERS",
    users
});
//action to store the list of groups
const Groups = groups => ({
    type: "GROUPS",
    groups
});

//action to get the name of the current group
const GroupName = groupname =>({
    type:"GROUP_NAME",
    groupname
});

export {
    Users,
    Groups,
    GroupName
}