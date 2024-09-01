
document.addEventListener('DOMContentLoaded', (e) => {
    const formAxios = document.getElementById('axiosTest')
    const btnPost = document.getElementById('submitAxios')
    const btnGet = document.getElementById('getAxios')
    const baseURL = "http://localhost:3002"

    formAxios.addEventListener('submit', async (e) => {
        e.preventDefault()
        const name = document.getElementById('name')
        const surname = document.getElementById('surname')
        const cpf = document.getElementById('cpf')
        const gender = document.getElementById('gender')
        const age = document.getElementById('age')


        const data = {
            cpf: cpf.value || '05400076200' , 
            name: name.value || "Fulano",
            surname: surname.value || "Ciclanês",
            gender: gender.value || 'Masculino',
            age: age.value   
        }

        const response = await axios.post(`${baseURL}/users`, data)
        formAxios.reset()
    })

    btnGet.addEventListener('click', async (e) => {
        const response = await axios.get(`${baseURL}/users`)
        const {data} = response
        await console.log(data)
    })
})