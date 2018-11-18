export const addTodo = text =>({
    text,
    type: 'ADD_TODO',
    id: Date.now()
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})


export const setVisibilityFilter = filter => ({
    type: 'SET_FILTER',
    filter
})
