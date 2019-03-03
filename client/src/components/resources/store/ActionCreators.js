const GetCountListUser = data => {
    return {
        type: "COUNT_LIST_TO_USER",
        countUsers: data.length,
        listUsers: data
    }
}

export {
    GetCountListUser
}