export const loadUsers = (page = 1) => {
    const url = `${import.meta.env.VITE_BASE_URL}/users?_page${page}`
}