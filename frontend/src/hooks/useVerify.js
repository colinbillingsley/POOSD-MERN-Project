export const useVerify = () => {

    const update = async () => {
        const exists = JSON.parse(localStorage.getItem('user'))
        
        exists.user.emailVerified = true
        exists.user.tempToken = null

        localStorage.setItem('user', JSON.stringify(exists))
    }
    
    return { update }
}